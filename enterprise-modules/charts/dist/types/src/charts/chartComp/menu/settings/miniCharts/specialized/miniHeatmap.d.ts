import type { ChartType } from '@ag-grid-community/core';
import type { ThemeTemplateParameters } from '../../miniChartsContainer';
import { MiniChart } from '../miniChart';
export declare class MiniHeatmap extends MiniChart {
    static chartType: ChartType;
    private readonly rects;
    constructor(container: HTMLElement, fills: string[], strokes: string[], themeTemplate: ThemeTemplateParameters, isCustomTheme: boolean);
    updateColors(fills: string[], strokes: string[], themeTemplate?: ThemeTemplateParameters, isCustomTheme?: boolean): void;
}
