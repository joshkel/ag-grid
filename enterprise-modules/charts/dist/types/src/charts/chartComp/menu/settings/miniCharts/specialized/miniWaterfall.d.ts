import type { ChartType } from '@ag-grid-community/core';
import { _Scene } from 'ag-charts-community';
import type { ThemeTemplateParameters } from '../../miniChartsContainer';
import { MiniChartWithAxes } from '../miniChartWithAxes';
export declare class MiniWaterfall extends MiniChartWithAxes {
    static chartType: ChartType;
    private readonly bars;
    private data;
    constructor(container: HTMLElement, fills: string[], strokes: string[], themeTemplate: ThemeTemplateParameters, isCustomTheme: boolean);
    updateColors(fills: string[], strokes: string[], themeTemplate?: ThemeTemplateParameters, isCustomTheme?: boolean): void;
    createWaterfall(root: _Scene.Group, data: number[], size: number, padding: number, direction: 'horizontal' | 'vertical'): {
        bars: _Scene.Rect[];
    };
}
