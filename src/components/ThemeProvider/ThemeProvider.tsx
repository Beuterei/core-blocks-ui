import { cn } from '../../lib/utils';
import { BroadcastChannel } from 'broadcast-channel';
import {
    createContext,
    type PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

export const supportedThemes = ['light', 'dark', 'light-red', 'dark-red', 'system'] as const;
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
        alertDialog: PortalContainer;
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
    theme,
}: PropsWithChildren<{
    readonly containers?:
        | PortalContainer
        | {
              alertDialog?: PortalContainer;
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
    readonly theme?: SupportedThemes;
}>) => {
    const [currentTheme, setCurrentTheme] = useState<SupportedThemes>(theme ?? defaultTheme);
    const [currentSystemTheme, setCurrentSystemTheme] = useState<SupportedThemes>('light');
    const themeBroadcastChannel: BroadcastChannel<ThemeBroadcastMessage> = useMemo(
        () => new BroadcastChannel('theme-change', { webWorkerSupport: false }),
        [],
    );

    useEffect(() => {
        const setSystemTheme = (isDark: boolean) => {
            if (isDark) {
                setCurrentSystemTheme('dark');
            } else {
                setCurrentSystemTheme('light');
            }
        };

        const mq = window.matchMedia('(prefers-color-scheme: dark)');

        if (mq.matches) {
            setSystemTheme(true);
        }

        const handleChange = (event: MediaQueryListEvent) => setSystemTheme(event.matches);
        mq.addEventListener('change', handleChange);

        return () => mq.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        themeBroadcastChannel.onmessage = ({
            localStorageKey: eventLocalStorageKey,
            theme: eventTheme,
        }) => {
            if (eventLocalStorageKey === localStorageKey && isSupportedTheme(eventTheme)) {
                setCurrentTheme(eventTheme);
            }
        };

        return () => {
            void themeBroadcastChannel.close();
        };
    }, [localStorageKey, themeBroadcastChannel]);

    useEffect(() => {
        const localStorageTheme = localStorage.getItem(localStorageKey);
        if (localStorageTheme && isSupportedTheme(localStorageTheme)) {
            setCurrentTheme(localStorageTheme);
        }
    }, [localStorageKey]);

    useEffect(() => {
        if (theme && isSupportedTheme(theme)) {
            setCurrentTheme(theme);
        }
    }, [theme]);

    const setNewTheme = useCallback(
        (newTheme: SupportedThemes) => {
            if (newTheme !== currentTheme) {
                localStorage.setItem(localStorageKey, newTheme);
                setCurrentTheme(newTheme);

                void themeBroadcastChannel.postMessage({
                    localStorageKey,
                    theme: newTheme,
                    // eslint-disable-next-line unicorn/require-post-message-target-origin
                });
            }
        },
        [currentTheme, localStorageKey, setCurrentTheme, themeBroadcastChannel],
    );

    const contextValue = useMemo<ThemeContextType>(() => {
        const defaultContainer = document.body;
        const containerConfig = isPortalContainer(containers) ? {} : containers;
        const fallbackContainer = isPortalContainer(containers)
            ? (containers ?? defaultContainer)
            : defaultContainer;

        return {
            containers: {
                alertDialog: containerConfig?.alertDialog ?? fallbackContainer,
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
            setTheme: setNewTheme,
        };
    }, [containers, currentTheme, setNewTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            <div
                className={cn('font-sans text-base m-0 text-foreground bg-background')}
                data-theme={currentTheme === 'system' ? currentSystemTheme : currentTheme}
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
