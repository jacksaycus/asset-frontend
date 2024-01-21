import * as React from "react";
import {observer} from "mobx-react";
import {Slice, VictoryContainer, VictoryLabel, VictoryLegend, VictoryPie} from 'victory';
import {action, computed, observable, toJS} from "mobx";
import _ from "lodash";
import {toSvgDomNodeWithLegend} from "src/pages/DashboardViewUtils";
import PORTAL_VICTORY_THEME from "src/shared/theme/poralTheme";
import {AbstractChart} from "src/pages/charts/ChartContainer";
import ifndef from "src/shared/lib/ifndef";
import autobind from 'autobind-decorator';
import {DataCountSummary} from "src/pages/DashboardViewUtils";
// import ClinicalTable from "pages/dashboard/table/ClinicalTable";
// import {If} from 'react-if';
import {DASHBOARD_VIEW_CONFIG} from "../DashboardViewConfig";
// import DefaultTooltip from "src/public-lib/components/defaultTooltip/DefaultTooltip";
import {getTextWidth} from "src/public-lib/lib/TextTruncationUtils";
// import Table2 from '../Table2';

export interface IPieChartProps {
    width: number;
    height: number;
    data: DataCountSummary[];
    filters?: string[];
    onUserSelection?: (values: string[]) => void;
    placement?: 'left' | 'right';
    // patientAttribute: boolean;
    label?: string;
    labelDescription?: string;
}

@observer
export default class PieChart extends React.Component<IPieChartProps, {}> implements AbstractChart {

    private svg: SVGElement;

    constructor(props: IPieChartProps) {
        super(props);
        console.log("Pie Chart called",this.props.data);
    }

    // @autobind
    // private onUserSelection(filter: string) {
    //     let filters = toJS(this.props.filters);
    //     if (_.includes(filters, filter)) {
    //         filters = _.filter(filters, obj => obj !== filter);
    //     } else {
    //         filters.push(filter);
    //     }
    //     this.props.onUserSelection(filters);
    // }
private get colorsNivo(){
    let colors:string[] = [];
      colors.push("#lines.bg.#e8c1a0","#e8cla0","#f47560","#dots.bg.#f1e15b", "#a8e838", "#61cdbb");
    return colors;
}
    // private get userEvents() {
    //     const self = this;
    //     return [{
    //         target: "data",
    //         eventHandlers: this.pieSliceOnClickEventHandlers
    //     }, {
    //         target: "labels",
    //         eventHandlers: this.pieSliceOnClickEventHandlers
    //     }];
    // }

    // private get pieSliceOnClickEventHandlers() {
    //     return {
    //         onClick: () => {
    //             return [
    //                 {
    //                     target: "data",
    //                     mutation: (props: any) => {
    //                         this.onUserSelection(props.datum.value);
    //                     }
    //                 }
    //             ];
    //         }
    //     }
    // }

    @observable isTooltipHovered: boolean = false;
    @observable tooltipHighlightedRow: string | undefined = undefined;

    @autobind
    @action
    private highlightedRow(value: string): void {
        this.tooltipHighlightedRow = value;
    }

    public downloadData() {
        return this.props.data.map(obj => obj.value + '\t' + obj.count).join('\n');
    }

    public toSVGDOMNode(): Element {
        return toSvgDomNodeWithLegend(this.svg, {
            legendGroupSelector: ".studyViewPieChartLegend",
            chartGroupSelector: ".studyViewPieChartGroup",
            centerLegend: true
        });
    }

    @computed
    get totalCount() {
        return _.sumBy(this.props.data, obj => obj.count)
    }

    @computed
    get fill() {
        return (d: DataCountSummary) => {
            if (!_.isEmpty(this.props.filters) && !_.includes(this.props.filters, d.value)) {
                return "#D3D3D3";
            }
            return d.color;
        };
    }

    @computed
    get stroke() {
        return (d: DataCountSummary) => {
            if (!_.isEmpty(this.props.filters) && _.includes(this.props.filters, d.value)) {
                return "#cccccc";
            }
            return null;
        };
    }

    @computed
    get strokeWidth() {
        return (d: DataCountSummary) => {
            if (!_.isEmpty(this.props.filters) && _.includes(this.props.filters, d.value)) {
                return 3;
            }
            return 0;
        };
    }

    @computed
    get fillOpacity() {
        return (d: DataCountSummary) => {
            if (!_.isEmpty(this.props.filters) && !_.includes(this.props.filters, d.value)) {
                return '0.5';
            }
            return 1;
        };
    }

    @autobind
    private x(d: DataCountSummary) {
        return d.value;
    }

    @autobind
    private y(d: DataCountSummary) {
        return d.count;
    }

    @autobind
    private label(d: DataCountSummary) {
        console.log("label d",d);
        return d.count / this.totalCount > 0.5 ? d.count.toLocaleString() : (
            this.maxLength(d.count / this.totalCount, this.pieSliceRadius / 3) <
            getTextWidth(
                // d.count.toLocaleString(),
                d.count.toLocaleString(),
                PORTAL_VICTORY_THEME.axis.style.tickLabels.fontFamily,
                `${PORTAL_VICTORY_THEME.axis.style.tickLabels.fontSize}px`
            ) ? '' : d.count.toLocaleString());
    }

    // We don't want to show a bigger pie chart when the height is way smaller than width
    @computed
    get chartSize() {
        return (this.props.width + this.props.height ) / 2;
    }

    @computed
    get pieSliceRadius(): number {
        const chartWidth = this.props.width > this.props.height ? this.props.height : this.props.width;
        return chartWidth / 2 - DASHBOARD_VIEW_CONFIG.thresholds.piePadding;
    }

    @computed
    get victoryPie() {
        return (
            <VictoryPie
                standalone={false}
                theme={PORTAL_VICTORY_THEME}
                containerComponent={<VictoryContainer responsive={false}/>}
                groupComponent={<g className="studyViewPieChartGroup" transform="translate(0, -12)"/>}
                width={this.props.width}
                height={this.chartSize}
                labelRadius={this.pieSliceRadius / 3}
                radius={this.pieSliceRadius}
                labels={
                    [
                        'Spring','Full stack','Vue,React',
                    ]
                }
                data={[{
                    value:'React',
                    count:30,
                    color:'green'
                },
                {
                    value:'Spring',
                    count:30,
                    color:'rgb(226, 93, 71)'
                },
                {
                    value:'Oracle',
                    count:30,
                    color:'#f47560'
                }
            ]}
                dataComponent={<CustomSlice/>}
                labelComponent={<VictoryLabel/>}
                // events={this.userEvents}
                style={{
                    data: {
                        fill: ifndef(this.fill, "#cccccc"),
                        stroke: ifndef(this.stroke, "0x000000"),
                        strokeWidth: ifndef(this.strokeWidth, 0),
                        fillOpacity: ifndef(this.fillOpacity, 1),
                        cursor: 'pointer'
                    },
                    labels: {
                        fill: "white",
                        cursor: 'pointer'
                    }
                }}
                x={this.x}
                y={this.y}
            />
        );
    }

    @computed
    get victoryLegend1() {
        let data1 : any[] = [];
        data1.push({
            value:'React',
                    count:30,
                    color:'green'
        },
        {
            value:'Spring',
            count:30,
            color:'rgb(226, 93, 71)'
        },
        {
            value:'Oracle',
            count:30,
            color:'#f47560'
        }
        )
        // const legendData = this.props.data.map(data =>
        const legendData = data1.map(data =>
             ({name: `${data.value}: ${data.count} `} ) );
        const colorScale = data1.map(data => data.color);
          console.log('legendData',legendData,this.props.height);
        // override the legend style without mutating the actual theme object
        const theme = _.cloneDeep(PORTAL_VICTORY_THEME);
        theme.legend.style.data = {
            type: "square",
            size: 5,
            strokeWidth: 0,
            stroke: "black"
        };

        return (
            <VictoryLegend
                standalone={false}
                theme={theme}
                colorScale={colorScale}
                x={0} y={this.props.height + 1}
                rowGutter={-10}
                title={this.props.label || "Legend"}
                centerTitle={true}
                style={{title: {fontWeight: "bold"}}}
                data={legendData}
                groupComponent={<g className="studyViewPieChartLegend"/>}
            />
        );
    }

    private maxLength(ratioOfPie: number, radius: number) {
        return Math.abs(Math.tan(Math.PI * ratioOfPie / 2)) * radius * 2;
    }

    public render() {
        return (
            // <DefaultTooltip
            //     placement={this.props.placement}
            //     // overlay={(
            //     //     <ClinicalTable
            //     //         width={300}
            //     //         height={150}
            //     //         data={this.props.data}
            //     //         label={this.props.label}
            //     //         labelDescription={this.props.labelDescription}
            //     //         patientAttribute={this.props.patientAttribute}
            //     //         showAddRemoveAllButtons={true}
            //     //         filters={this.props.filters}
            //     //         highlightedRow={this.highlightedRow}
            //     //         onUserSelection={this.props.onUserSelection}
            //     //     />)}
            //     overlay={(
            //         <Table2 />
            //     )}
            //     destroyTooltipOnHide={true}
            //     trigger={["hover"]}
            // >
                <svg
                    width={this.props.width}
                    height={this.props.height}
                    ref={(ref: any) => this.svg = ref}
                >
                    {this.victoryPie}
                    {/* {this.victoryLegend1} */}
                </svg>
            // </DefaultTooltip>
        );
    }

}

class CustomSlice extends React.Component<{}, {}> {
    render() {
        const d: any = this.props;
        return (
            <g>
                <Slice {...this.props} />
                <title>{`${d.datum.value}:${d.datum.count}`}</title>
            </g>
        );
    }
}
