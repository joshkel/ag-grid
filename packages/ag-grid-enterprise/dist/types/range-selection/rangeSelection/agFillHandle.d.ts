import type { BeanCollection, CellCtrl } from 'ag-grid-community';
import { SelectionHandleType } from 'ag-grid-community';
import { AbstractSelectionHandle } from './abstractSelectionHandle';
export declare class AgFillHandle extends AbstractSelectionHandle {
    private valueService;
    private navigationService;
    private cellNavigationService;
    private visibleColsService;
    wireBeans(beans: BeanCollection): void;
    private initialPosition;
    private initialXY;
    private lastCellMarked;
    private markedCells;
    private cellValues;
    private dragAxis;
    private isUp;
    private isLeft;
    private isReduce;
    protected type: SelectionHandleType;
    constructor();
    protected updateValuesOnMove(e: MouseEvent): void;
    protected onDrag(_e: MouseEvent): void;
    protected onDragEnd(e: MouseEvent): void;
    private getFillHandleDirection;
    private raiseFillStartEvent;
    private raiseFillEndEvent;
    private handleValueChanged;
    private clearCellsInRange;
    private processValues;
    protected clearValues(): void;
    private clearMarkedPath;
    private clearCellValues;
    private markPathFrom;
    private extendVertical;
    private reduceVertical;
    private extendHorizontal;
    private reduceHorizontal;
    refresh(cellCtrl: CellCtrl): void;
}
