import {
    Autowired,
    Component,
    Context,
    Events,
    EventService,
    GridOptionsWrapper,
    GridPanel,
    PostConstruct,
    RefSelector,
    ToolPanelVisibleChanged
} from "ag-grid/main";
import {IToolPanel} from "ag-grid";
import {ToolPanelColumnComp} from "./toolPanelColumnComp";
import {ToolPanelSelectComp} from "./toolPanelSelectComp";

export class ToolPanelComp extends Component implements IToolPanel {

    @Autowired("context") private context: Context;
    @Autowired("eventService") private eventService: EventService;
    @Autowired("gridOptionsWrapper") private gridOptionsWrapper: GridOptionsWrapper;

    @RefSelector('toolPanelSelectComp') private toolPanelSelectComp: ToolPanelSelectComp;
    @RefSelector('columnComp') private columnComp: ToolPanelColumnComp;

    constructor() {
        super(`<div class="ag-tool-panel">
                  <ag-tool-panel-select-comp ref="toolPanelSelectComp"></ag-tool-panel-select-comp>
                  <ag-tool-panel-column-comp ref="columnComp"></ag-tool-panel-column-comp>
              </div>`);
    }

    public registerGridComp(gridPanel: GridPanel): void {
        this.toolPanelSelectComp.registerGridComp(gridPanel);
    }

    @PostConstruct
    private postConstruct(): void {
        this.instantiate(this.context);
        this.toolPanelSelectComp.registerColumnComp(this.columnComp);
    }

    public refresh(): void {
        this.columnComp.refresh();
    }

    public showToolPanel(show: boolean): void {
        this.columnComp.setVisible(show);
        let event: ToolPanelVisibleChanged = {
            type: Events.EVENT_TOOL_PANEL_VISIBLE_CHANGED,
            api: this.gridOptionsWrapper.getApi(),
            columnApi: this.gridOptionsWrapper.getColumnApi()
        };
        this.eventService.dispatchEvent(event);
    }

    public isToolPanelShowing(): boolean {
        return this.columnComp.isVisible();
    }

}
