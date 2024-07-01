import type { BeanCollection } from '@ag-grid-community/core';
import { Component } from '@ag-grid-community/core';
import type { ChartMenuParamsFactory } from '../../chartMenuParamsFactory';
export declare class GridLinePanel extends Component {
    private readonly chartMenuUtils;
    private chartTranslationService;
    wireBeans(beans: BeanCollection): void;
    private readonly chartOptions;
    constructor(chartMenuUtils: ChartMenuParamsFactory);
    postConstruct(): void;
    private getGridLineColorPickerParams;
    private getGridLineWidthSliderParams;
    private getGridLineDashSliderParams;
}
