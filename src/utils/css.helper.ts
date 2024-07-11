import { css, type Theme } from '@emotion/react';

type CSSProperties = Parameters<typeof css>[0];

type ThemedCSSProperties = CSSProperties | ((theme: Theme) => CSSProperties);

type ConfigSchema = Record<string, Record<string, ThemedCSSProperties>>;

type ConfigVariants<T extends ConfigSchema> = {
    [key in keyof T]: keyof T[key];
};

interface Variants<T extends ConfigSchema> {
    defaultVariants: ConfigVariants<T>;
    variants: T;
}

export type VariantsProps<T extends ReturnType<typeof buildVariants>> = Partial<Parameters<T>[1]>;

export const buildVariants =
    <T extends ConfigSchema>(baseStyles: ThemedCSSProperties, variantsConfig: Variants<T>) =>
    (theme: Theme, props: Partial<ConfigVariants<T>>): ReturnType<typeof css> => {
        const { defaultVariants, variants } = variantsConfig;
        const stylesArray: CSSProperties[] = [];

        for (const key in variants) {
            if (Object.prototype.hasOwnProperty.call(variants, key)) {
                const variantKey = props[key] || defaultVariants[key];

                const variantStyles = variants[key][variantKey];

                if (variantStyles) {
                    if (typeof variantStyles === 'function') {
                        stylesArray.push(variantStyles(theme));
                    } else {
                        stylesArray.push(variantStyles);
                    }
                }
            }
        }

        console.log(stylesArray);
        if (typeof baseStyles === 'function') {
            return css(baseStyles(theme), ...stylesArray);
        }

        return css(baseStyles, ...stylesArray);
    };
