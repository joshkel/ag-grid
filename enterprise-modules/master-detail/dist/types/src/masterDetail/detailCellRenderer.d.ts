import type { BeanCollection, ICellRenderer, IDetailCellRendererParams } from '@ag-grid-community/core';
import { Component } from '@ag-grid-community/core';
export declare class DetailCellRenderer extends Component implements ICellRenderer {
    private eDetailGrid;
    private detailApi;
    private params;
    private ctrl;
    private context;
    wireBeans(beans: BeanCollection): void;
    init(params: IDetailCellRendererParams): void;
    refresh(): boolean;
    destroy(): void;
    private selectAndSetTemplate;
    private setDetailGrid;
    private setRowData;
}
