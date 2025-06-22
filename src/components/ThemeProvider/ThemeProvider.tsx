import { cn } from '../../lib/utils';
import {
    createContext,
    type PropsWithChildren,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

// TODO: Add support for prefers-color-scheme
export const supportedThemes = ['light', 'dark', 'light-red', 'dark-red'] as const;
export type SupportedThemes = (typeof supportedThemes)[number];
export const defaultTheme = 'light' satisfies SupportedThemes;

type PortalContainer = DocumentFragment | Element | null;

const isSupportedTheme = (theme: string): theme is SupportedThemes => {
    return supportedThemes.includes(theme as SupportedThemes);
};

const isPortalContainer = (container: unknown): container is PortalContainer => {
    return (
        container instanceof DocumentFragment || container instanceof Element || container === null
    );
};

interface ThemeBroadcastMessage {
    localStorageKey: string;
    theme: SupportedThemes;
}

interface ThemeContextType {
    containers: {
        contextMenu: PortalContainer;
        dialog: PortalContainer;
        drawer: PortalContainer;
        dropdownMenu: PortalContainer;
        hoverCard: PortalContainer;
        menubar: PortalContainer;
        popover: PortalContainer;
        select: PortalContainer;
        sheet: PortalContainer;
        tooltip: PortalContainer;
    };
    currentTheme: SupportedThemes;
    setTheme: (theme: SupportedThemes) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
    children,
    containers,
    localStorageKey = 'app-theme',
}: PropsWithChildren<{
    readonly containers?:
        | PortalContainer
        | {
              contextMenu?: PortalContainer;
              dialog?: PortalContainer;
              drawer?: PortalContainer;
              dropdownMenu?: PortalContainer;
              hoverCard?: PortalContainer;
              menubar?: PortalContainer;
              popover?: PortalContainer;
              select?: PortalContainer;
              sheet?: PortalContainer;
              tooltip?: PortalContainer;
          };
    readonly localStorageKey?: string;
}>) => {
    const [currentTheme, setCurrentTheme] = useState<SupportedThemes>(defaultTheme);
    const themeBroadcastChannel = useMemo(() => new BroadcastChannel('theme-change'), []);

    useEffect(() => {
        const handleThemeChange = (event: MessageEvent<ThemeBroadcastMessage>) => {
            const { localStorageKey: eventLocalStorageKey, theme } = event.data;
            if (eventLocalStorageKey === localStorageKey && isSupportedTheme(theme)) {
                setCurrentTheme(theme);
            }
        };

        themeBroadcastChannel.addEventListener('message', handleThemeChange);

        return () => {
            themeBroadcastChannel.removeEventListener('message', handleThemeChange);
            themeBroadcastChannel.close();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const theme = localStorage.getItem(localStorageKey);
        if (theme && isSupportedTheme(theme)) {
            setCurrentTheme(theme);
        }
    }, [localStorageKey]);

    const contextValue = useMemo<ThemeContextType>(() => {
        const defaultContainer = document.body;
        const containerConfig = isPortalContainer(containers) ? {} : containers;
        const fallbackContainer = isPortalContainer(containers)
            ? (containers ?? defaultContainer)
            : defaultContainer;

        return {
            containers: {
                contextMenu: containerConfig?.contextMenu ?? fallbackContainer,
                dialog: containerConfig?.dialog ?? fallbackContainer,
                drawer: containerConfig?.drawer ?? fallbackContainer,
                dropdownMenu: containerConfig?.dropdownMenu ?? fallbackContainer,
                hoverCard: containerConfig?.hoverCard ?? fallbackContainer,
                menubar: containerConfig?.menubar ?? fallbackContainer,
                popover: containerConfig?.popover ?? fallbackContainer,
                select: containerConfig?.select ?? fallbackContainer,
                sheet: containerConfig?.sheet ?? fallbackContainer,
                tooltip: containerConfig?.tooltip ?? fallbackContainer,
            },
            currentTheme,
            setTheme: (theme: SupportedThemes) => {
                if (theme !== currentTheme) {
                    localStorage.setItem(localStorageKey, theme);
                    setCurrentTheme(theme);

                    themeBroadcastChannel.postMessage({
                        localStorageKey,
                        theme,
                        // eslint-disable-next-line unicorn/require-post-message-target-origin
                    });
                }
            },
        };
    }, [containers, currentTheme, localStorageKey, themeBroadcastChannel]);

    return (
        <ThemeContext.Provider value={contextValue}>
            <div
                className={cn('font-sans text-base m-0 text-foreground bg-background')}
                data-theme={currentTheme}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
