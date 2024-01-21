import * as _ from 'lodash';

import {action, computed, IReactionDisposer, observable, reaction, toJS} from "mobx";
import {
    ChartMeta,
    ChartType,
    ClinicalDataCountSet,
    Datalabel,
    MutationCountVsCnaYBinsMin,
    NA_DATA,
    // SPECIAL_CHARTS,
    UniqueKey,
    NumericalGroupComparisonType,
    calculateLayout
} from './DashboardViewUtils';
// import MobxPromise from 'mobxpromise';

import autobind from "autobind-decorator";

import windowStore from 'src/shared/components/window/WindowStore';
import {ChartDimension, ChartTypeEnum, DASHBOARD_VIEW_CONFIG, DashboardViewLayout} from "./DashboardViewConfig";

export type ChartUserSetting = {
    id: string,
    name?: string,
    chartType?: ChartType,
    layout?: {
        x: number,
        y: number,
        w: number;
        h: number;
    }
}

export type StudyPageSettings = {
    chartSettings:ChartUserSetting[],
    origin:string[]
}

// const DEFAULT_CHART_NAME = 'Custom Chart';

export type StatusMessage = {
    status: 'success' | 'warning' | 'danger' | 'info',
    message: string
};

export class GridViewPageStore {
    private reactionDisposers:IReactionDisposer[] = [];

    constructor() {
        console.log("GridViewPageStore");
        this.loadUserSettings();
        this.updateLayout();
        this.reactionDisposers.push(reaction(() => [this.visibleAttributes, this.columns, this.chartsDimension.toJSON(), this.chartsType.toJSON()], () => {
            console.log("reaction visibleAttributes");
                this.updateLayout();
        }));
        };
    
        
    @computed
    get loadingInitialDataForSummary() {
        console.log("loadingInitialDataForSummary()");
        return true;
    }

    @computed get isLoggedIn() {
        return true;
    }

    @observable hideRestoreSettingsMsg = this.isLoggedIn;

    //this is set on initial load
    private _loadUserSettingsInitially = this.isLoggedIn;

    // make sure the reactions are disposed when the component which initialized store will unmount
    destroy() {
        for (const disposer of this.reactionDisposers) {
            disposer();
        }
    }

    @autobind
    @action private clearPageSettings() {
        this.currentGridLayout = [];
        this.currentFocusedChartByUser = undefined;
        this.currentFocusedChartByUserDimension = undefined;
        
    }

    @autobind
    @action
    loadUserSettings() {
        
       let setting : ChartUserSetting[] = [];
       setting.push(
        {
            id: UniqueKey.CARD1,
            chartType: ChartTypeEnum.CARD1,
            layout: {
                x: 0,
                y: 0,
                w: 2,
                h: 3.5
            }
           },
           {
            id: UniqueKey.CARD2,
            chartType: ChartTypeEnum.CARD2,
            layout: {
                x: 2,
                y: 0,
                w: 2,
                h: 3.5
            }
           },
           {
            id: UniqueKey.CARD3,
            chartType: ChartTypeEnum.CARD3,
            layout: {
                x: 2,
                y: 0,
                w: 2,
                h: 3.5
            }
           },
           {
            id: UniqueKey.CARD4,
            chartType: ChartTypeEnum.CARD4,
            layout: {
                x: 2,
                y: 0,
                w: 2,
                h: 3.5
            }
           },
           {
            id: UniqueKey.CARD5,
            chartType: ChartTypeEnum.CARD5,
            layout: {
                x: 2,
                y: 0,
                w: 2,
                h: 3.5
            }
           },
           {
            id: UniqueKey.CARD6,
            chartType: ChartTypeEnum.CARD6,
            layout: {
                x: 2,
                y: 0,
                w: 2,
                h: 3.5
            }
           },
           {
            id: UniqueKey.CARD7,
            chartType: ChartTypeEnum.CARD7,
            layout: {
                x: 2,
                y: 0,
                w: 2,
                h: 3.5
            }
           },
           {
            id: UniqueKey.CARD8,
            chartType: ChartTypeEnum.CARD8,
            layout: {
                x: 2,
                y: 0,
                w: 2,
                h: 3.5
            }
           },
           {
            id: UniqueKey.CARD9,
            chartType: ChartTypeEnum.CARD9,
            layout: {
                x: 2,
                y: 0,
                w: 2,
                h: 3.5
            }
           },
           {
            id: UniqueKey.CARD10,
            chartType: ChartTypeEnum.CARD10,
            layout: {
                x: 2,
                y: 0,
                w: 2,
                h: 3.5
            }
           },
           {
            id: UniqueKey.CARD11,
            chartType: ChartTypeEnum.CARD11,
            layout: {
                x: 2,
                y: 0,
                w: 2,
                h: 3.5
            }
           },
           {
            id: UniqueKey.PIE_CHART,
            chartType: ChartTypeEnum.PIE_CHART,
            layout: {
                x: 2,
                y: 0,
                w: 2,
                h: 3.5
            }
           },




        //    {
        //     id: UniqueKey.ISSUE_LIST,
        //     chartType: ChartTypeEnum.ISSUE_LIST,
        //     layout: {
        //         x: 0,
        //         y: 0,
        //         w: 2,
        //         h: 2
        //     }
        //    },
        //    {
        //     id: UniqueKey.PROJECT,
        //     chartType: ChartTypeEnum.PROJECT,
        //     layout: {
        //         x: 2,
        //         y: 0,
        //         w: 2,
        //         h: 2
        //     }
        //    },
        //    {
        //     id: UniqueKey.ISSUE_TYPE,
        //     chartType: ChartTypeEnum.ISSUE_TYPE,
        //     layout: {
        //         x: 4,
        //         y: 0,
        //         w: 2,
        //         h: 2
        //     }
        //    }
        )
        this.loadSettings(setting);
    }

    @autobind
    @action
    hideChart(uniqueKey: string) {
        this.changeChartVisibility(uniqueKey, false);
    }
    @action
    changeChartVisibility(uniqueKey:string, visible: boolean) {
        if(visible){
            this._chartVisibility.set(uniqueKey, true);
        } else {
            this._chartVisibility.delete(uniqueKey);
        }
    }

    @autobind
    @action
    private loadSettings(chartSettngs: ChartUserSetting[]){
        console.log('chartSettngs',chartSettngs);
        this.clearPageSettings();

        _.map(chartSettngs, chartUserSettings => {
        if (chartUserSettings.layout) {
            this.currentGridLayout.push({
                i: chartUserSettings.id,
                isResizable: false,
                moved: false,
                static: false,
                ...chartUserSettings.layout
                });
                this.chartsDimension.set(chartUserSettings.id, {
                    w: chartUserSettings.layout.w,
                    h: chartUserSettings.layout.h
                });
            }
            this.changeChartVisibility(chartUserSettings.id, true);
            console.log(chartUserSettings.chartType);
            chartUserSettings.chartType && this.chartsType.set(chartUserSettings.id, chartUserSettings.chartType);
        });
    }


    
    @observable private _chartVisibility = observable.map<boolean>();

    @observable geneQueryStr: string;

    private geneMapCache:{[entrezGeneId:number]:string} = {};

    @observable public chartsDimension = observable.map<ChartDimension>();

    @observable public chartsType = observable.map<ChartType>();

    private newlyAddedCharts = observable.array<string>();

    @observable pageStatusMessages: { [code: string]: StatusMessage } = {};

    public isNewlyAdded(uniqueKey:string) {
        return this.newlyAddedCharts.includes(uniqueKey);
    }

    // @computed
    // get isInitialFilterState(): boolean {
    //     return _.isEqual(toJS(this.initialFilters), toJS(this.filters));
    // }

    @computed
    get containerWidth(): number {
        return this.columns * DASHBOARD_VIEW_CONFIG.layout.grid.w + (this.columns + 1) * DASHBOARD_VIEW_CONFIG.layout.gridMargin.x;
    }

    @computed
    private get columns(): number {
        return Math.floor((windowStore.size.width - 40) / (DASHBOARD_VIEW_CONFIG.layout.grid.w + DASHBOARD_VIEW_CONFIG.layout.gridMargin.x));
    }

    @autobind @action
    private updateLayout() {
        this.currentGridLayout = calculateLayout(this.visibleAttributes, this.columns, this.chartsDimension.toJSON(), this.useCurrentGridLayout ? this.currentGridLayout : [], this.currentFocusedChartByUser, this.currentFocusedChartByUserDimension);
        if (this.useCurrentGridLayout) {
            this.useCurrentGridLayout = false;
        }
    }

    // Minus the margin width
    @computed
    get studyViewPageLayoutProps(): DashboardViewLayout {
        return {
            cols: this.columns,
            grid: DASHBOARD_VIEW_CONFIG.layout.grid,
            gridMargin: DASHBOARD_VIEW_CONFIG.layout.gridMargin,
            layout: this.currentGridLayout,
            dimensions: DASHBOARD_VIEW_CONFIG.layout.dimensions
        };
    }

    @autobind @action
    updateCurrentGridLayout(newGridLayout: ReactGridLayout.Layout[]) {
        this.currentGridLayout = newGridLayout;
    }

    //this variable is acts as flag whether to use it as a currentGridLayout in updating layout
    private useCurrentGridLayout = false;

    @observable.ref private currentGridLayout: ReactGridLayout.Layout[] = [];
    //@observable private currentGridLayoutUpdated = false;
    @observable private previousSettings: { [id: string]: ChartUserSetting } = {};

    private currentFocusedChartByUser: ChartMeta | undefined = undefined;
    private currentFocusedChartByUserDimension: ChartDimension | undefined = undefined;
    
    public customChartFilterSet =  observable.map<string[]>();

    @observable numberOfSelectedSamplesInCustomSelection: number = 0;
    

    @computed
    get visibleAttributes(): ChartMeta[] {
        let arr:ChartMeta[] = [];
        arr.push({
            uniqueKey: UniqueKey.CARD1,
            displayName: "CARD1",
            description: "CARD1",
            priority: 12,
            renderWhenDataChange: false
        });
        arr.push({
            uniqueKey: UniqueKey.CARD2,
            displayName: "CARD2",
            description: "CARD2",
            priority: 11,
            renderWhenDataChange: false
        });
        arr.push({
            uniqueKey: UniqueKey.CARD3,
            displayName: "CARD3",
            description: "CARD3",
            priority: 10,
            renderWhenDataChange: false
        });
        arr.push({
            uniqueKey: UniqueKey.CARD4,
            displayName: "CARD4",
            description: "CARD4",
            priority: 9,
            renderWhenDataChange: false
        });
        arr.push({
            uniqueKey: UniqueKey.CARD5,
            displayName: "CARD5",
            description: "CARD5",
            priority: 8,
            renderWhenDataChange: false
        });
        arr.push({
            uniqueKey: UniqueKey.CARD6,
            displayName: "CARD6",
            description: "CARD6",
            priority: 7,
            renderWhenDataChange: false
        });
        arr.push({
            uniqueKey: UniqueKey.CARD7,
            displayName: "CARD7",
            description: "CARD7",
            priority: 6,
            renderWhenDataChange: false
        });
        arr.push({
            uniqueKey: UniqueKey.CARD8,
            displayName: "CARD8",
            description: "CARD8",
            priority: 5,
            renderWhenDataChange: false
        });
        arr.push({
            uniqueKey: UniqueKey.CARD9,
            displayName: "CARD9",
            description: "CARD9",
            priority: 4,
            renderWhenDataChange: false
        });
        arr.push({
            uniqueKey: UniqueKey.CARD10,
            displayName: "CARD10",
            description: "CARD10",
            priority: 3,
            renderWhenDataChange: false
        });
        arr.push({
            uniqueKey: UniqueKey.CARD11,
            displayName: "CARD11",
            description: "CARD11",
            priority: 2,
            renderWhenDataChange: false
        });
        arr.push({
            uniqueKey: UniqueKey.PIE_CHART,
            displayName: "PIE_CHART",
            description: "PIE_CHART",
            priority: 1,
            renderWhenDataChange: false
        });




        
        // arr.push({
        //     uniqueKey: UniqueKey.ISSUE_LIST,
        //     displayName: "Issue List",
        //     description: "Issue List",
        //     priority: 1,
        //     renderWhenDataChange: false
        // });
        // arr.push({
        //     uniqueKey: UniqueKey.PROJECT,
        //     displayName: "Projects",
        //     description: "Issue List",
        //     priority: 2,
        //     renderWhenDataChange: false
        // });
        // arr.push({
        //     uniqueKey: UniqueKey.ISSUE_TYPE,
        //     displayName: "Issue Type",
        //     description: "Issue Type",
        //     priority: 3,
        //     renderWhenDataChange: false
        // });
        return arr;
        
    }

    
    private getTableDimensionByNumberOfRecords(records: number) {
        return records <= DASHBOARD_VIEW_CONFIG.thresholds.rowsInTableForOneGrid ? {
            w: 2,
            h: 1
        } : {w: 2, h: 2};
    }
   
}
