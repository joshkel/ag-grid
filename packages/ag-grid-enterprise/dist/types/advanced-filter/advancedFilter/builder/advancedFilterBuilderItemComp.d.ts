import type { BeanCollection } from 'ag-grid-community';
import { TabGuardComp } from 'ag-grid-community';
import type { AdvancedFilterBuilderDragFeature } from './advancedFilterBuilderDragFeature';
import type { AdvancedFilterBuilderEvents, AdvancedFilterBuilderItem } from './iAdvancedFilterBuilder';
export declare class AdvancedFilterBuilderItemComp extends TabGuardComp<AdvancedFilterBuilderEvents> {
    private readonly item;
    private readonly dragFeature;
    private readonly focusWrapper;
    private dragAndDropService;
    private advancedFilterExpressionService;
    wireBeans(beans: BeanCollection): void;
    private readonly eTreeLines;
    private readonly eDragHandle;
    private readonly eButtons;
    private readonly eValidation;
    private readonly eMoveUpButton;
    private readonly eMoveDownButton;
    private readonly eAddButton;
    private readonly eRemoveButton;
    private ePillWrapper;
    private validationTooltipFeature;
    private moveUpDisabled;
    private moveDownDisabled;
    private moveUpTooltipFeature;
    private moveDownTooltipFeature;
    constructor(item: AdvancedFilterBuilderItem, dragFeature: AdvancedFilterBuilderDragFeature, focusWrapper: HTMLElement);
    postConstruct(): void;
    setState(params: {
        disableMoveUp?: boolean;
        disableMoveDown?: boolean;
        treeLines: boolean[];
        showStartTreeLine: boolean;
    }): void;
    focusMoveButton(backwards: boolean): void;
    afterAdd(): void;
    private setupTreeLines;
    private updateTreeLines;
    private setupValidation;
    private setupAddButton;
    private setupRemoveButton;
    private setupMoveButtons;
    private updateValidity;
    private createPill;
    private getInputType;
    private setupDragging;
    private updateAriaLabel;
    private updateAriaExpanded;
    private removeItem;
    private moveItem;
}
