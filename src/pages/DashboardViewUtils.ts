import _ from "lodash";
import {Layout} from 'react-grid-layout';
import {ChartDimension, ChartTypeEnum, Position, DASHBOARD_VIEW_CONFIG} from "./DashboardViewConfig";
// import MobxPromise from 'mobxpromise';
// import {getTextWidth} from "../../public-lib/lib/TextTruncationUtils";
// import {CNA_COLOR_AMP, CNA_COLOR_HOMDEL, DEFAULT_NA_COLOR, getClinicalValueColor} from "shared/lib/Colors";
// import styles from './styles.module.scss';
// import { stringListToIndexSet } from "public-lib";

export enum NumericalGroupComparisonType {
    QUARTILES = 'QUARTILES',
    MEDIAN='MEDIAN',
    BINS = 'BINS'
}

export type ChartType =
      'PIE_CHART'
    | 'CARD1'  
    | 'CARD2'
    | 'CARD3'
    | 'CARD4'
    | 'CARD5'
    | 'CARD6'
    | 'CARD7'
    | 'CARD8'
    | 'CARD9'
    | 'CARD10'
    | 'CARD11'
    | 'PROJECT'
    | 'ISSUE_LIST'
    | 'NONE';

export enum UniqueKey {
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
    PROJECT = 'PROJECT',
    ISSUE_LIST = 'ISSUE_LIST',
    ISSUE_TYPE = 'ISSUE_TYPE',
}

export type ChartMeta = {
    uniqueKey: string,
    displayName: string,
    description: string,
    priority: number,
    renderWhenDataChange: boolean
}
export type ChartMetaWithDimensionAndChartType = ChartMeta & {
    dimension: ChartDimension,
    chartType: ChartType,
}
export type ClinicalDataCountSet = { [attrId: string]: number };

export enum Datalabel {
    YES = 'YES',
    NO = 'NO',
    NA = "NA"
}

// export const SPECIAL_CHARTS: ChartMetaWithDimensionAndChartType[] = [{
//     uniqueKey: UniqueKey.PROJECT_TABLE,
//     displayName: 'My Projects',
//     description: 'My Projects',
//     chartType: ChartTypeEnum.TABLE,
//     dimension: {
//         w: 1,
//         h: 1
//     },
//     renderWhenDataChange: false,
//     priority: 3
// },
//     {
//         uniqueKey: UniqueKey.ISSUE_LIST,
//         displayName: 'JIRA ISSUE',
//         description: 'LIRA ISSUE',
//         chartType: ChartTypeEnum.LIST,
//         dimension: {
//             w: 1,
//             h: 1
//         },
//         priority: 0,
//         renderWhenDataChange: false
//     }];

export const COLORS = [
    DASHBOARD_VIEW_CONFIG.colors.theme.primary, DASHBOARD_VIEW_CONFIG.colors.theme.secondary,
    DASHBOARD_VIEW_CONFIG.colors.theme.tertiary, DASHBOARD_VIEW_CONFIG.colors.theme.quaternary,
    '#990099', '#0099c6', '#dd4477', '#66aa00',
    '#b82e2e', '#316395', '#994499', '#22aa99',
    '#aaaa11', '#6633cc', '#e67300', '#8b0707',
    '#651067', '#329262', '#5574a6', '#3b3eac',
    '#b77322', '#16d620', '#b91383', '#f4359e',
    '#9c5935', '#a9c413', '#2a778d', '#668d1c',
    '#bea413', '#0c5922', '#743411', '#743440',
    '#9986e2', '#6c3912', '#788508', '#609618',
    '#790099', '#5099c6', '#2d4477', '#76aa00',
    '#882e2e', '#916395', '#794499', '#92aa99',
    '#2aaa11', '#5633cc', '#667300', '#100707',
    '#751067', '#229262', '#4574a6', '#103eac',
    '#177322', '#66d620', '#291383', '#94359e',
    '#5c5935', '#29c413', '#6a778d', '#868d1c',
    '#5ea413', '#6c5922', '#243411', '#103440',
    '#2886e2', '#d93912', '#f28508', '#110618',
    '#970099', '#0109c6', '#d10477', '#68aa00',
    '#b12e2e', '#310395', '#944499', '#24aa99',
    '#a4aa11', '#6333cc', '#e77300', '#820707',
    '#610067', '#339262', '#5874a6', '#313eac',
    '#b67322', '#13d620', '#b81383', '#f8359e',
    '#935935', '#a10413', '#29778d', '#678d1c',
    '#b2a413', '#075922', '#763411', '#773440',
    '#2996e2', '#dc4912', '#f81508', '#104618',
    '#991099', '#0049c6', '#dd2477', '#663a00',
    '#b84e2e', '#312395', '#993499', '#223a99',
    '#aa1a11', '#6673cc', '#e66300', '#8b5707',
    '#656067', '#323262', '#5514a6', '#3b8eac',
    '#b71322', '#165620', '#b99383', '#f4859e',
    '#9c4935', '#a91413', '#2a978d', '#669d1c',
    '#be1413', '#0c8922', '#742411', '#744440',
    '#2983e2', '#dc3612', '#f88808', '#109518',
    '#990599', '#0092c6', '#dd4977', '#66a900',
    '#b8282e', '#316295', '#994199', '#22a499',
    '#aaa101', '#66310c', '#e67200', '#8b0907',
    '#651167', '#329962', '#5573a6', '#3b37ac',
    '#b77822', '#16d120', '#b91783', '#f4339e',
    '#9c5105', '#a9c713', '#2a710d', '#66841c',
    '#bea913', '#0c5822', '#743911', '#743740',
    '#298632', '#dc3922', '#f88588', '#109658',
    '#990010', '#009916', '#dd4447', '#66aa60',
    '#b82e9e', '#316365', '#994489', '#22aa69',
    '#aaaa51', '#66332c', '#e67390', '#8b0777',
    '#651037', '#329232', '#557486', '#3b3e4c',
    '#b77372', '#16d690', '#b91310', '#f4358e',
    '#9c5910', '#a9c493', '#2a773d', '#668d5c',
    '#bea463', '#0c5952', '#743471', '#743450',
    '#2986e3', '#dc3914', '#f88503', '#109614',
    '#990092', '#0099c8', '#dd4476', '#66aa04',
    '#b82e27', '#316397', '#994495', '#22aa93',
    '#aaaa14', '#6633c1', '#e67303', '#8b0705',
    '#651062', '#329267', '#5574a1', '#3b3ea5'
];

export const NA_DATA = "NA";
export const EXPONENTIAL_FRACTION_DIGITS = 3;

export const MutationCountVsCnaYBinsMin = 52; // calibrated so that the dots are right up against each other. needs to correspond with the width and height of the chart


const OPERATOR_MAP: {[op:string]: string} = {
    "<=": "≤",
    "<" : "<",
    ">=": "≥",
    ">": ">"
};


function translateSpecialText(text: string | undefined): string {
    if (!text) {
        return "";
    } else if (text === ">=") {
        return "≥";
    } else if (text === "<=") {
        return "≤";
    }

    return text;
}

export function formatRange(min: number | undefined, max: number | undefined, special: string | undefined): string {
    special = translateSpecialText(special);

    if(min === undefined) {
        if (max === undefined) {
            return special;
        } else {
            return `${special}${max.toLocaleString()}`;
        }
    } else {
        if (max === undefined) {
            return `${special}${min.toLocaleString()}`;
        } else if (min !== max) {
            return `${special}${min.toLocaleString()}-${max.toLocaleString()}`;
        } else {
            return `${special}${min.toLocaleString()}`
        }
    }
}

// export function mutationCountVsCnaTooltip(d:IStudyViewDensityScatterPlotDatum) {
//     const binStats = getBinStatsForTooltip(d);
//     return (
//         <div>
//             <div>Number of Samples: <b>{d.count.toLocaleString()}</b></div>
//             <div>Mutation Count: <b>{binStats.mutRange}</b></div>
//             <div>Fraction Genome Altered: <b>{binStats.fgaRange}</b></div>
//         </div>
//     );
// }

export function isSelected(datum: { uniqueSampleKey: string }, selectedSamples: { [uniqueSampleKey: string]: any }) {
    return datum.uniqueSampleKey in selectedSamples;
}

export function getPriority(priorities: number[]): number {
    let priority = 0;
    _.some(priorities, _priority => {
        if (_priority === 0) {
            priority = 0;
            return true;
        }
        priority = (_priority + priority) / 2;
    });
    return priority;
}

export function getDefaultChartDimension(): ChartDimension {
    return {w: 1, h: 1};
}
type ClinicalAttributeSorting = {
    priority: number,
    displayName: string
}
export function clinicalAttributeSortingComparator(a: ClinicalAttributeSorting, b: ClinicalAttributeSorting): number {
    return b.priority - a.priority || a.displayName.localeCompare(b.displayName);
}
// Descent sort priority then ascent sort by display name
export function chartMetaComparator(a: ChartMeta, b: ChartMeta): number {
    return clinicalAttributeSortingComparator({
        priority: a.priority,
        displayName: a.displayName
    }, {
        priority: b.priority,
        displayName: b.displayName
    });
}
export function calculateLayout(
    visibleAttributes: ChartMeta[],
    cols: number,
    chartsDimension: { [uniqueId: string]: ChartDimension },
    currentGridLayout: Layout[],
    currentFocusedChartByUser?: ChartMeta,
    currentFocusedChartByUserDimension?: ChartDimension
): Layout[] {
    let layout: Layout[] = [];
    let availableChartLayoutsMap: { [chartId: string]: boolean } = {};
    let matrix = [new Array(cols).fill('')] as string[][];

    // look if we need to put the chart to a fixed position and add the position to the matrix
    if (currentGridLayout.length > 0) {
        if (currentFocusedChartByUser && currentFocusedChartByUserDimension) {
            var currentFocusedChartIndex = currentGridLayout.findIndex(
                layout => layout.i === currentFocusedChartByUser.uniqueKey
            )!;

            if (currentFocusedChartIndex !== -1) {
                const currentChartLayout =
                    currentGridLayout[currentFocusedChartIndex];
                const newChartLayout = calculateNewLayoutForFocusedChart(
                    currentChartLayout,
                    currentFocusedChartByUser,
                    cols,
                    currentFocusedChartByUserDimension
                );
                layout.push(newChartLayout);
                availableChartLayoutsMap[
                    currentFocusedChartByUser.uniqueKey
                ] = true;
                matrix = generateMatrixByLayout(newChartLayout, cols);

                currentGridLayout[currentFocusedChartIndex] = newChartLayout;
            } else {
                throw new Error(
                    'cannot find matching unique key in the grid layout'
                );
            }
        }

        const chartOrderMap = _.keyBy(
            currentGridLayout,
            chartLayout => chartLayout.i
        );
        // order charts based on x and y (first order by y, if y is same for both then order by x)
        // push all undefined charts to last
        visibleAttributes.sort((a, b) => {
            const chart1 = chartOrderMap[a.uniqueKey];
            const chart2 = chartOrderMap[b.uniqueKey];
            if (chart1 || chart2) {
                if (!chart2) {
                    return -1;
                }
                if (!chart1) {
                    return 1;
                }
                return chart1.y === chart2.y
                    ? chart1.x - chart2.x
                    : chart1.y - chart2.y;
            }
            return 0;
        });
    } else {
        // sort the visibleAttributes by priority
        visibleAttributes.sort(chartMetaComparator);
    }

    // filter out the fixed position chart then calculate layout
    _.forEach(
        _.filter(
            visibleAttributes,
            (chart: ChartMeta) => !availableChartLayoutsMap[chart.uniqueKey]
        ),
        (chart: ChartMeta) => {
            const dimension =
                chartsDimension[chart.uniqueKey] || getDefaultChartDimension();
            const position = findSpot(matrix, dimension);
            while (position.y + dimension.h >= matrix.length) {
                matrix.push(new Array(cols).fill(''));
            }
            layout.push({
                i: chart.uniqueKey,
                x: position.x,
                y: position.y,
                w: dimension.w,
                h: dimension.h,
                minH: dimension.minH,
                minW: dimension.minW,
                isResizable: true,
            });
            const xMax = position.x + dimension.w;
            const yMax = position.y + dimension.h;
            for (let i = position.y; i < yMax; i++) {
                for (let j = position.x; j < xMax; j++) {
                    matrix[i][j] = chart.uniqueKey;
                }
            }
        }
    );
    return layout;
}

export function calculateNewLayoutForFocusedChart(previousLayout: Layout, currentFocusedChartByUser: ChartMeta, cols: number, currentFocusedChartByUserDimension:ChartDimension): Layout {
    const initialX = previousLayout.x;
    const initialY = previousLayout.y;
    const dimensionWidth = currentFocusedChartByUserDimension.w;
    let x = initialX;
    let y = initialY;

    if (isFocusedChartShrunk({w: previousLayout.w, h: previousLayout.h}, currentFocusedChartByUserDimension)) {
        x = initialX + previousLayout.w - dimensionWidth;
    }
    else if (initialX + dimensionWidth >= cols && initialX - dimensionWidth >= 0) {
        x = cols - dimensionWidth;
    }

    return {
        i: currentFocusedChartByUser.uniqueKey,
        x,
        y,
        w: currentFocusedChartByUserDimension.w,
        h: currentFocusedChartByUserDimension.h,
        isResizable: false
    };
}

export function generateMatrixByLayout(layout: Layout, cols: number) : string[][] {
    let matrix = [new Array(cols).fill('')] as string[][];
    const xMax = layout.x + layout.w;
    const yMax = layout.y + layout.h;
    while (yMax >= matrix.length) {
        matrix.push(new Array(cols).fill(''));
    }
    for (let i = layout.y; i < yMax; i++) {
        for (let j = layout.x; j < xMax; j++) {
            matrix[i][j] = layout.i!;
        }
    }
    return matrix;
}

/**
 * Calculate the layout used by react-grid-layout
 *
 * @param {ChartMeta[]} visibleAttributes
 * @param {number} cols number of grids per row, 6 cols will be the stander when using 13 inch laptop
 * @param {[id: string]: ChartDimension} chartsDimension
 * @returns {ReactGridLayout.Layout[]}
 */


export function findSpot(matrix: string[][], chartDimension: ChartDimension): Position {
    if (matrix.length === 0) {
        return {
            x: 0,
            y: 0
        };
    }
    let found: Position | undefined = undefined;
    _.each(matrix, (row: string[], rowIndex: number) => {
        _.each(row, (item: string, columnIndex: number) => {
            if (!item && !isOccupied(matrix, {x: columnIndex, y: rowIndex}, chartDimension)) {
                found = {x: columnIndex, y: rowIndex};
                return false;
            }
        });
        if (found) {
            return false;
        }
    });

    if (!found) {
        return {
            x: 0,
            y: matrix.length
        }
    } else {
        return found;
    }
}


export function isOccupied(matrix: string[][], position: Position, chartDimension: ChartDimension) {
    let occupied = false;
    if (matrix.length === 0) {
        return false;
    }

    // For chart higher than 1 grid, or wider than 1 grid, we only plot them on the odd index
    if (chartDimension.w > 1 && position.x % 2 !== 0) {
        occupied = true;
    }
    if (chartDimension.h > 1 && position.y % 2 !== 0) {
        occupied = true;
    }
    if (!occupied) {
        const xMax = position.x + chartDimension.w;
        const yMax = position.y + chartDimension.h;
        for (let i = position.y; i < yMax; i++) {
            if (i >= matrix.length) {
                break;
            }
            for (let j = position.x; j < xMax; j++) {
                if (j >= matrix[0].length || matrix[i][j]) {
                    occupied = true;
                    break;
                }
            }
            if (occupied) {
                break;
            }
        }
    }
    return occupied;
}

export function isFocusedChartShrunk(oldDimension: ChartDimension, newDimension: ChartDimension): boolean {
    return (oldDimension.w + oldDimension.h) > (newDimension.w + newDimension.h);
}

export function toSvgDomNodeWithLegend(svgElement: SVGElement,
    params:{
        legendGroupSelector: string,
        selectorToHide?:string,
        chartGroupSelector?: string,
        centerLegend?: boolean
    })
{
const svg = svgElement.cloneNode(true) as SVGElement;
const legend = $(svgElement).find(params.legendGroupSelector).get(0);
const legendBBox = legend.getBoundingClientRect();

if (params.selectorToHide) {
$(svg).find(params.selectorToHide).remove();
}

const height = + $(svgElement).height()! + legendBBox.height;
const width = Math.max($(svgElement).width()!, legendBBox.width);

// adjust width and height to make sure that the legend is fully visible
$(svg).attr("height", height + 5);
$(svg).attr("width", width);
$(svg).css({height: height + 5, width});

// center elements
if (params.centerLegend) {
const widthDiff = Math.abs($(svgElement).width()! - legendBBox.width);
const shift = widthDiff / 2;
const transform = `translate(${shift}, 0)`;

if ($(svgElement).width()! > legendBBox.width) {
// legend needs to be centered wrt the chart
$(svg).find(params.legendGroupSelector).attr("transform", transform);
}
else if (params.chartGroupSelector) {
// chart needs to be centered wrt the legend
$(svg).find(params.chartGroupSelector).attr("transform", transform);
}
}

return svg;
}
export type DataCount = {
    'count': number
    'value': string
};
export type DataCountSummary = DataCount & { color: string , percentage: number, freq: string}

// Grid includes 10px margin
export function getWidthByDimension(chartDimension: ChartDimension, borderWidth: number) {
    return DASHBOARD_VIEW_CONFIG.layout.grid.w * chartDimension.w + (chartDimension.w - 1) * DASHBOARD_VIEW_CONFIG.layout.gridMargin.x - borderWidth * 2;
}

// Grid includes 15px header and 35px tool section
export function getHeightByDimension(chartDimension: ChartDimension, chartHeight: number) {
    return DASHBOARD_VIEW_CONFIG.layout.grid.h * chartDimension.h + (chartDimension.h - 1) * DASHBOARD_VIEW_CONFIG.layout.gridMargin.y - chartHeight;
}

// 30px tool section
export function getTableHeightByDimension(chartDimension: ChartDimension, chartHeight: number) {
     return getHeightByDimension(chartDimension, chartHeight) - 30;
}
