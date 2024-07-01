import type { BeanCollection, IClipboardCopyParams, IClipboardCopyRowsParams, IClipboardService, NamedBean, RowPositionUtils } from '@ag-grid-community/core';
import { BeanStub } from '@ag-grid-community/core';
export declare class ClipboardService extends BeanStub implements NamedBean, IClipboardService {
    beanName: "clipboardService";
    private csvCreator;
    private selectionService;
    private rowModel;
    private ctrlsService;
    private valueService;
    private focusService;
    private rowRenderer;
    private visibleColsService;
    private funcColsService;
    private cellNavigationService;
    private cellPositionUtils;
    rowPositionUtils: RowPositionUtils;
    private rangeService?;
    wireBeans(beans: BeanCollection): void;
    private clientSideRowModel;
    private gridCtrl;
    private lastPasteOperationTime;
    private navigatorApiFailed;
    postConstruct(): void;
    pasteFromClipboard(): void;
    private pasteFromClipboardLegacy;
    private refocusLastFocusedCell;
    private getClipboardDelimiter;
    private processClipboardData;
    static stringToArray(strData: string, delimiter?: string): string[][];
    private doPasteOperation;
    private pasteIntoActiveRange;
    private getDisplayedColumnsStartingAt;
    private pasteStartingFromFocusedCell;
    private isPasteSingleValueIntoRange;
    private pasteSingleValueIntoRange;
    private hasOnlyOneValueToPaste;
    copyRangeDown(): void;
    private removeLastLineIfBlank;
    private fireRowChanged;
    private pasteMultipleValues;
    private updateCellValue;
    copyToClipboard(params?: IClipboardCopyParams): void;
    cutToClipboard(params?: IClipboardCopyParams, source?: 'api' | 'ui' | 'contextMenu'): void;
    private copyOrCutToClipboard;
    private clearCellsAfterCopy;
    private clearSelectedRows;
    private clearCellValue;
    private shouldSkipSingleCellRange;
    private iterateActiveRanges;
    private iterateActiveRange;
    copySelectedRangeToClipboard(params?: IClipboardCopyParams): void;
    private buildDataFromMergedRanges;
    private buildDataFromRanges;
    private getRangeRowPositionsAndCellsToFlash;
    private getCellsToFlashFromRowNodes;
    private copyFocusedCellToClipboard;
    copySelectedRowsToClipboard(params?: IClipboardCopyRowsParams): void;
    private buildExportParams;
    private processRowGroupCallback;
    private dispatchFlashCells;
    private processCell;
    private copyDataToClipboard;
    private copyDataToClipboardLegacy;
    private executeOnTempElement;
    private getRangeSize;
}
