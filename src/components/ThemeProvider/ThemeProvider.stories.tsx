import { Button } from '../Button/Button';
import { supportedThemes, ThemeProvider, useTheme } from './ThemeProvider';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: ThemeProvider,
    title: 'Components/ThemeProvider',
} satisfies Meta<typeof ThemeProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

const ThemeSwitcher = () => {
    const { currentTheme, setTheme } = useTheme();

    const cycleTheme = () => {
        const currentIndex = supportedThemes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % supportedThemes.length;
        setTheme(supportedThemes[nextIndex]);
    };

    return <Button onClick={cycleTheme}>{currentTheme}</Button>;
};

export const Primary: Story = {
    render: () => {
        return <ThemeSwitcher />;
    },
};
