import { isSupportedTheme, type SupportedThemes } from '../../twind.config';
import { cx } from '@twind/core';
import {
    createContext,
    type PropsWithChildren,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

interface ThemeContextType {
    currentTheme: SupportedThemes;
    setCurrentTheme: (theme: SupportedThemes) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
    children,
    localStorageKey = 'app-theme',
}: PropsWithChildren<{
    readonly localStorageKey?: string;
}>) => {
    const [internalCurrentTheme, setInternalCurrentTheme] = useState<SupportedThemes>(() => {
        const storedTheme = localStorage.getItem(localStorageKey);
        return storedTheme && isSupportedTheme(storedTheme) ? storedTheme : 'base';
    });

    const isHandlingEvent = useRef(false);

    useEffect(() => {
        const handleThemeChange = () => {
            if (isHandlingEvent.current) {
                isHandlingEvent.current = false;
                return;
            }

            const storedTheme = localStorage.getItem(localStorageKey);
            if (storedTheme && isSupportedTheme(storedTheme)) {
                setInternalCurrentTheme(storedTheme);
            }
        };

        window.addEventListener('themeChange', handleThemeChange);
        window.addEventListener('storage', handleThemeChange);
        return () => {
            window.removeEventListener('themeChange', handleThemeChange);
            window.removeEventListener('storage', handleThemeChange);
        };
    }, [localStorageKey]);

    const contextValue = useMemo<ThemeContextType>(
        () => ({
            currentTheme: internalCurrentTheme,
            setCurrentTheme: newTheme => {
                setInternalCurrentTheme(newTheme);

                localStorage.setItem(localStorageKey, newTheme);
                isHandlingEvent.current = true;
                const event = new CustomEvent('themeChange');
                window.dispatchEvent(event);
            },
        }),
        [internalCurrentTheme, localStorageKey],
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <div
                className={cx(
                    'font-sans text-base m-0 text-foreground',
                    'base',
                    internalCurrentTheme,
                )}
                style={{
                    WebkitTextSizeAdjust: '100%',
                    MozTabSize: '4',
                    tabSize: '4',
                    fontFeatureSettings: 'normal',
                }}
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
