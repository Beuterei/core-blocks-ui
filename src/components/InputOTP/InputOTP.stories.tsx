import { StoryPage } from '../../../storybook/preview';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './InputOTP';
import { type Meta, type StoryObj } from '@storybook/react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

const meta = {
    component: InputOTP,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'Input OTP Docs': 'https://input-otp.rodz.dev',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/input-otp',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        InputOTPGroup,
        InputOTPSeparator,
        InputOTPSlot,
    },
    title: 'Components/InputOTP',
} satisfies Meta<typeof InputOTP>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </>
        ),
        maxLength: 6,
    },
};

export const Pattern: Story = {
    args: {
        children: (
            <>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </>
        ),
        maxLength: 6,
        pattern: REGEXP_ONLY_DIGITS_AND_CHARS,
    },
};
