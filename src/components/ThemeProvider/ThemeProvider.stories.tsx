import { Button } from '@/components/Button/Button';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider/ThemeProvider';
import type { SupportedThemes } from '@/twind.config';
import { type Meta, type StoryObj } from '@storybook/react';

const themes: SupportedThemes[] = ['base', 'dark', 'light-green', 'dark-green'];

const ThemeToggler = () => {
    const { currentTheme, setCurrentTheme } = useTheme();

    return (
        <Button
            onClick={() => {
                const currentIndex = themes.indexOf(currentTheme);
                const nextIndex = (currentIndex + 1) % themes.length;
                setCurrentTheme(themes[nextIndex]);
            }}
        >
            Toggle Theme: {currentTheme}
        </Button>
    );
};

const meta = {
    title: 'Components/ThemeProvider',
    args: {
        localStorageKey: 'theme-provider-example',
    },
    render: args => (
        <ThemeProvider {...args}>
            <ThemeToggler />
        </ThemeProvider>
    ),
} satisfies Meta<typeof ThemeProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
