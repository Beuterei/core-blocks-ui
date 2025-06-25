import { cn } from '../../lib/utils';
import { type SupportedThemes, supportedThemes } from '../ThemeProvider/ThemeProvider';
import {
    type ComponentProps,
    type ComponentType,
    createContext,
    type CSSProperties,
    type ReactNode,
    useContext,
    useId,
    useMemo,
} from 'react';
import {
    type DefaultLegendContentProps as RechartsPrimitiveDefaultLegendContentProps,
    type DefaultTooltipContentProps as RechartsPrimitiveDefaultTooltipContentProps,
    ResponsiveContainer as RechartsPrimitiveResponsiveContainer,
    type Tooltip as RechartsPrimitiveTooltip,
} from 'recharts';
import { type NameType, type ValueType } from 'recharts/types/component/DefaultTooltipContent';

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = Object.fromEntries(
    supportedThemes.map((theme) => [theme, `[data-theme="${theme}"]`]),
) as Record<SupportedThemes, string>;
export type ChartConfig = Record<
    string,
    {
        icon?: ComponentType;
        label?: ReactNode;
    } & (
        | { color?: never; theme: Record<keyof typeof THEMES, string> }
        | { color?: string; theme?: never }
    )
>;

interface ChartContextProps {
    config: ChartConfig;
}

const ChartContext = createContext<ChartContextProps | null>(null);

export const ChartStyle = ({
    config,
    id,
}: {
    readonly config: ChartConfig;
    readonly id: string;
}) => {
    const colorConfig = Object.entries(config).filter(
        ([, itemConfig]) => itemConfig.theme ?? itemConfig.color,
    );

    if (!colorConfig.length) {
        return null;
    }

    return (
        <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
                __html: Object.entries(THEMES)
                    .map(
                        ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
    .map(([key, itemConfig]) => {
        const color =
            itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ?? itemConfig.color;
        return color ? `  --color-${key}: ${color};` : null;
    })
    .join('\n')}
}
`,
                    )
                    .join('\n'),
            }}
        />
    );
};

export const ChartContainer = ({
    children,
    className,
    config,
    id,
    ...props
}: ComponentProps<'div'> & {
    readonly children: ComponentProps<typeof RechartsPrimitiveResponsiveContainer>['children'];
    readonly config: ChartConfig;
}) => {
    const uniqueId = useId();
    const chartId = `chart-${id ?? uniqueId.replaceAll(':', '')}`;

    const value = useMemo(() => ({ config }), [config]);

    return (
        <ChartContext.Provider value={value}>
            <div
                className={cn(
                    "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
                    className,
                )}
                data-chart={chartId}
                data-slot="chart"
                {...props}
            >
                <ChartStyle config={config} id={chartId} />
                <RechartsPrimitiveResponsiveContainer>
                    {children}
                </RechartsPrimitiveResponsiveContainer>
            </div>
        </ChartContext.Provider>
    );
};

const useChart = () => {
    const context = useContext(ChartContext);

    if (!context) {
        throw new Error('useChart must be used within a <ChartContainer />');
    }

    return context;
};

// Helper to extract item config from a payload.
const getPayloadConfigFromPayload = (config: ChartConfig, payload: unknown, key: string) => {
    if (typeof payload !== 'object' || payload === null) {
        return undefined;
    }

    const payloadPayload =
        'payload' in payload && typeof payload.payload === 'object' && payload.payload !== null
            ? payload.payload
            : undefined;

    let configLabelKey: string = key;

    if (key in payload && typeof payload[key as keyof typeof payload] === 'string') {
        configLabelKey = payload[key as keyof typeof payload] as string;
    } else if (
        payloadPayload &&
        key in payloadPayload &&
        typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
    ) {
        configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
    }

    return configLabelKey in config ? config[configLabelKey] : config[key];
};

export const ChartTooltipContent = ({
    active,
    className,
    color,
    formatter,
    hideIndicator = false,
    hideLabel = false,
    indicator = 'dot',
    label,
    labelClassName,
    labelFormatter,
    labelKey,
    nameKey,
    payload,
}: ComponentProps<'div'> &
    ComponentProps<typeof RechartsPrimitiveTooltip> &
    Omit<RechartsPrimitiveDefaultTooltipContentProps<ValueType, NameType>, 'accessibilityLayer'> & {
        readonly hideIndicator?: boolean;
        readonly hideLabel?: boolean;
        readonly indicator?: 'dashed' | 'dot' | 'line';
        readonly labelKey?: string;
        readonly nameKey?: string;
    }) => {
    const { config } = useChart();

    const tooltipLabel = useMemo(() => {
        if (hideLabel || !payload?.length) {
            return null;
        }

        const [item] = payload;
        const key = `${labelKey ?? item?.dataKey ?? item?.name ?? 'value'}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        const value =
            !labelKey && typeof label === 'string'
                ? (config[label]?.label ?? label)
                : itemConfig?.label;

        if (labelFormatter) {
            return (
                <div className={cn('font-medium', labelClassName)}>
                    {labelFormatter(value, payload)}
                </div>
            );
        }

        if (!value) {
            return null;
        }

        return <div className={cn('font-medium', labelClassName)}>{value}</div>;
    }, [config, hideLabel, label, labelClassName, labelFormatter, labelKey, payload]);

    if (!active || !payload?.length) {
        return null;
    }

    const nestLabel = payload.length === 1 && indicator !== 'dot';

    return (
        <div
            className={cn(
                'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
                className,
            )}
        >
            {nestLabel ? null : tooltipLabel}
            <div className="grid gap-1.5">
                {payload.map((item, index) => {
                    const key = `${nameKey ?? item.name ?? item.dataKey ?? 'value'}`;
                    const itemConfig = getPayloadConfigFromPayload(config, item, key);
                    const indicatorColor = color ?? item.payload?.fill ?? item.color;

                    return (
                        <div
                            className={cn(
                                'flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground',
                                indicator === 'dot' && 'items-center',
                            )}
                            key={key}
                        >
                            {formatter && item?.value !== undefined && item.name ? (
                                formatter(item.value, item.name, item, index, item.payload)
                            ) : (
                                <>
                                    {itemConfig?.icon ? (
                                        <itemConfig.icon />
                                    ) : (
                                        !hideIndicator && (
                                            <div
                                                className={cn(
                                                    'shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)',
                                                    {
                                                        'h-2.5 w-2.5': indicator === 'dot',
                                                        'my-0.5':
                                                            nestLabel && indicator === 'dashed',
                                                        'w-0 border-[1.5px] border-dashed bg-transparent':
                                                            indicator === 'dashed',
                                                        'w-1': indicator === 'line',
                                                    },
                                                )}
                                                style={
                                                    {
                                                        '--color-bg': indicatorColor,
                                                        '--color-border': indicatorColor,
                                                    } as CSSProperties
                                                }
                                            />
                                        )
                                    )}
                                    <div
                                        className={cn(
                                            'flex flex-1 justify-between leading-none',
                                            nestLabel ? 'items-end' : 'items-center',
                                        )}
                                    >
                                        <div className="grid gap-1.5">
                                            {nestLabel ? tooltipLabel : null}
                                            <span className="text-muted-foreground">
                                                {itemConfig?.label ?? item.name}
                                            </span>
                                        </div>
                                        {item.value !== null && (
                                            <span className="font-mono font-medium text-foreground tabular-nums">
                                                {typeof item.value === 'number'
                                                    ? item.value.toLocaleString()
                                                    : String(item.value)}
                                            </span>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const ChartLegendContent = ({
    className,
    hideIcon = false,
    nameKey,
    payload,
    verticalAlign,
}: ComponentProps<'div'> &
    RechartsPrimitiveDefaultLegendContentProps & {
        readonly hideIcon?: boolean;
        readonly nameKey?: string;
    }) => {
    const { config } = useChart();

    if (!payload?.length) {
        return null;
    }

    return (
        <div
            className={cn(
                'flex items-center justify-center gap-4',
                verticalAlign === 'top' ? 'pb-3' : 'pt-3',
                className,
            )}
        >
            {payload.map((item) => {
                const key = `${nameKey ?? item.dataKey ?? 'value'}`;
                const itemConfig = getPayloadConfigFromPayload(config, item, key);

                return (
                    <div
                        className={cn(
                            'flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground',
                        )}
                        key={item.value}
                    >
                        {itemConfig?.icon && !hideIcon ? (
                            <itemConfig.icon />
                        ) : (
                            <div
                                className="h-2 w-2 shrink-0 rounded-[2px]"
                                style={{
                                    backgroundColor: item.color,
                                }}
                            />
                        )}
                        {itemConfig?.label}
                    </div>
                );
            })}
        </div>
    );
};

export { Legend as ChartLegend, Tooltip as ChartTooltip } from 'recharts';
