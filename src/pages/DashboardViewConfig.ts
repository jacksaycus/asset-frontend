import {Layout} from 'react-grid-layout';
import * as _ from 'lodash';
import {ChartType} from "./DashboardViewUtils";

export type DashboardViewColor = {
    theme: DashboardViewColorTheme
}

export type DashboardViewColorTheme = {
    primary: string,
    secondary: string,
    tertiary: string,
    quaternary: string,

    unselectedGroup: string,
    selectedGroup: string,
    clinicalFilterTitle: string,
    clinicalFilterContent: string,
}

export type DashboardViewThreshold = {
    pieToTable: number,
    piePadding: number,
    barRatio: number,
    rowsInTableForOneGrid: number,
    clinicalCharts: number,
    chartHighlight: number,
}

export type ChartDimension = {
    w: number,
    h: number
}

export type Position = {
    x: number,
    y: number
}

export type DashboardViewLayout = {
    layout: Layout[],
    cols: number,
    grid: ChartDimension,
    gridMargin: Position,
    dimensions: {[chartType in ChartType]: ChartDimension}
}

export type DashboardViewFrontEndConfig = {
    thresholds: DashboardViewThreshold,
    // initialBins: { [uniqueKey: string]: number[] }
    colors: DashboardViewColor,
    // alwaysShownClinicalAttributes: string[],
    layout: DashboardViewLayout,
    defaultPriority: number,
    priority: { [id: string]: number };
}

// export type DashboardViewConfig = DashboardView & DashboardViewFrontEndConfig
export type DashboardViewConfig = DashboardViewFrontEndConfig

export enum ChartTypeEnum {
    PIE_CHART = 'PIE_CHART',
    CARD1 = 'CARD1',
    CARD2 = 'CARD2',
    CARD3 = 'CARD3',
    CARD4 = 'CARD4',
    CARD5 = 'CARD5',
    CARD6 = 'CARD6',
    CARD7 = 'CARD7',
    CARD8 = 'CARD8',
    CARD9 = 'CARD9',
    CARD10 = 'CARD10',
    CARD11 = 'CARD11',
    ISSUE_TYPE = 'PIE_CHART',
    PROJECT = 'PROJECT',
    ISSUE_LIST = 'ISSUE_LIST',
    NONE = 'NONE'
}

export enum ChartTypeNameEnum {
    CARD1 = 'card1',
    CARD2 = 'card2',
    CARD3 = 'CARD3',
    CARD4 = 'CARD4',
    CARD5 = 'CARD5',
    CARD6 = 'CARD6',
    CARD7 = 'CARD7',
    CARD8 = 'CARD8',
    CARD9 = 'CARD9',
    CARD10 = 'CARD10',
    CARD11 = 'CARD11',
    PIE_CHART = 'pie chart',
    PROJECT = 'project',
    ISSUE_LIST = 'issue list' ,
    NONE = 'none'
}

const dashboardViewFrontEnd = {
    defaultPriority: 1,
    priority: {
        "SAMPLE_HISTOLOGY": 8,
    },
    thresholds: {
        pieToTable: 20,
        piePadding: 20,
        barRatio: 0.8,
        rowsInTableForOneGrid: 4,
        clinicalCharts: 20,
        chartHighlight: 10000
    },
    layout: {
        layout: [],
        cols: 6,
        grid: {
            w: 195,
            h: 170
        },
        gridMargin: {
            x: 5,
            y: 5
        },
        dimensions: {
            [ChartTypeEnum.CARD1]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.CARD2]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.CARD3]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.CARD4]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.CARD5]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.CARD6]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.CARD7]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.CARD8]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.CARD9]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.CARD10]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.CARD11]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.PIE_CHART]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.ISSUE_TYPE]: {
                w: 1,
                h: 1
            },
            [ChartTypeEnum.PROJECT]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.ISSUE_LIST]: {
                w: 2,
                h: 2
            },
            [ChartTypeEnum.NONE]: {
                w: 0,
                h: 0
            }
        }
    },

    colors: {
        theme: {
            primary: '#2986E2',
            secondary: '#DC3912',
            tertiary: '#f88508',
            quaternary: '#109618',

            unselectedGroup: '#2986E2',
            selectedGroup: '#DC3912',
            clinicalFilterTitle: '#A9A9A9',
            clinicalFilterContent: '#2986E2',
        }
    }
};

export const DASHBOARD_VIEW_CONFIG: DashboardViewConfig = dashboardViewFrontEnd;
