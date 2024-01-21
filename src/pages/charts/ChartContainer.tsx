import * as React from "react";
import styles from "./styles.module.scss";
import {observer} from "mobx-react";
import {action, computed, observable} from "mobx";
import _ from "lodash";
// import {ChartControls, ChartHeader} from "src/pages/chartHeader/ChartHeader";
import {GridViewPageStore} from "src/pages/GridViewPageStore";
// import classnames from "classnames";
import MobxPromise from "mobxpromise";
import {Card1,Card2,Card3,Card4,Card5,Card6,Card7,Card8,Card9,Card10,Card11} from '../ActivityCardPage';
import autobind from 'autobind-decorator';
import {
    ChartMeta,
    ChartType,
    UniqueKey,
    getWidthByDimension,
    getHeightByDimension,
    getTableHeightByDimension
    // NumericalGroupComparisonType
} from "../DashboardViewUtils";
import {ChartDimension, ChartTypeEnum, DASHBOARD_VIEW_CONFIG} from "../DashboardViewConfig";
// import LoadingIndicator from "../../../shared/components/loadingIndicator/LoadingIndicator";
import {DataType, DownloadControlsButton} from "src/public-lib/components/downloadControls/DownloadControls";
// import {Modal} from "react-bootstrap";
// import MobxPromiseCache from "shared/lib/MobxPromiseCache";
import WindowStore from "src/shared/components/window/WindowStore";
import Timer = NodeJS.Timer;
import PieChart from "./PieChart";


export interface AbstractChart {
    toSVGDOMNode: () => Element;
}

export type ChartDownloadType = 'TSV' | 'SVG' | 'PDF' | 'PNG';

export interface IChartContainerDownloadProps {
    type: ChartDownloadType;
    initDownload?: () => Promise<string>;
}

const COMPARISON_CHART_TYPES:ChartType[] = [ChartTypeEnum.ISSUE_TYPE, ChartTypeEnum.PROJECT, ChartTypeEnum.ISSUE_LIST];

export interface IChartContainerProps {
    chartMeta: ChartMeta;
    chartType: ChartType;
    store: GridViewPageStore;
    dimension: ChartDimension;
    title: string;
    promise: MobxPromise<any>;
    filters: any;
    onValueSelection?: any;
    onDataBinSelection?: any;
    getData?: ((dataType?: DataType)=>Promise<string|null>) | ((dataType?:DataType)=>string);
    downloadTypes?:DownloadControlsButton[];
    onResetSelection?: any;
    onDeleteChart: (chartMeta: ChartMeta) => void;
    onChangeChartType: (chartMeta: ChartMeta, newChartType: ChartType) => void;
    onToggleLogScale?:any;
    logScaleChecked?:boolean;
    showLogScaleToggle?:boolean;
    selectedGenes?:any;
    cancerGenes:number[];
    onGeneSelect?:any;
    isNewlyAdded: (uniqueKey: string) => boolean;
    cancerGeneFilterEnabled: boolean;
    filterByCancerGenes?: boolean;
    onChangeCancerGeneFilter?: (filtered: boolean) => void;
    // openComparisonPage:(params:{
    //     chartMeta: ChartMeta,
    //     categorizationType?: NumericalGroupComparisonType,
    //     clinicalAttributeValues?:{ value:string, color:string }[]
    // })=>void;
    patientToAnalysisGroup?:MobxPromise<{[uniquePatientKey:string]:string}>;
    sampleToAnalysisGroup?:MobxPromise<{[uniqueSampleKey:string]:string}>;
    }

@observer
export class ChartContainer extends React.Component<IChartContainerProps, {}> {
    private chartHeaderHeight = 20;

    private handlers: any;
    private plot: AbstractChart;

    private mouseLeaveTimeout:Timer;

    @observable mouseInChart: boolean = false;
    @observable placement: 'left' | 'right' = 'right';
    @observable chartType: ChartType;

    @observable newlyAdded = false;

    constructor(props: IChartContainerProps) {
        super(props);

        this.chartType = this.props.chartType;
        console.log('chartType ', this.chartType);

        this.handlers = {
            ref: (plot: AbstractChart) => {
                this.plot = plot;
            },
            resetFilters: action(() => {
                this.props.onResetSelection(this.props.chartMeta, []);
            }),
            onValueSelection: action((values: string[]) => {
                this.props.onValueSelection(this.props.chartMeta, values);
            }),
            onToggleLogScale: action(() => {
                if (this.props.onToggleLogScale) {
                    this.props.onToggleLogScale(this.props.chartMeta);
                }
            }),
            onMouseEnterChart: action((event: React.MouseEvent<any>) => {
                if (this.mouseLeaveTimeout) {
                    clearTimeout(this.mouseLeaveTimeout);
                }
                this.placement = event.nativeEvent.x > WindowStore.size.width - 400 ? 'left' : 'right';
                this.mouseInChart = true;
            }),
            onMouseLeaveChart: action(() => {
                this.mouseLeaveTimeout = setTimeout(() => {
                    this.placement = 'right';
                    this.mouseInChart = false;
                }, 100);
            }),
            defaultDownload: {
                SVG: () => Promise.resolve((new XMLSerializer()).serializeToString(this.toSVGDOMNode())),
                PNG: () => Promise.resolve(this.toSVGDOMNode()),
                PDF: () => Promise.resolve(this.toSVGDOMNode())
            },
            onChangeChartType: (newChartType: ChartType) => {
                this.mouseInChart = false;
                this.props.onChangeChartType(this.props.chartMeta, newChartType)
            },
            onDeleteChart: () => {
                this.props.onDeleteChart(this.props.chartMeta);
            }
        };
    }

    public toSVGDOMNode(): SVGElement {
        if (this.plot) {
            // Get result of plot
            return this.plot.toSVGDOMNode() as SVGElement;
        } else {
            return document.createElementNS("http://www.w3.org/2000/svg", "svg");
        }
    }

    @autobind
    @action
    changeChartType(chartType: ChartType) {
        this.chartType = chartType;
        this.handlers.onChangeChartType(chartType);
    }

    @computed
    get borderWidth() {
        return this.highlightChart ? 2 : 1;
    }

    @computed
    get chart() {
        console.log('this.chartType',this.chartType);
        const {PIE_CHART,CARD1,CARD2,CARD3,CARD4,CARD5,CARD6,CARD7,CARD8,CARD9,CARD10,CARD11} = ChartTypeEnum;
        switch (this.chartType) {
            // case ISSUE_LIST: {
            //     return ()=>(
            //         <List1
            //             width={getWidthByDimension(this.props.dimension, this.borderWidth)}
            //             height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
            //             data={""}
            //             // ref={this.handlers.ref}
            //             // onUserSelection={this.handlers.onDataBinSelection}
            //             // filters={this.props.filters}
            //             // data={this.props.promise.result}
            //         />
            //     );
            // }
            case CARD1: {
                return ()=>(
                    <Card1
                        width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                        height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                        // data={""}
                        
                    />
                );
            }
            case CARD2: 
            {
                return ()=>(
                    <Card2
                        width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                        height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                        // data={""}
                        
                    />
                );
            }
            case CARD3: 
            {
                return ()=>(
                    <Card3
                        width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                        height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                        // data={""}
                        
                    />
                );
            }
            case CARD4: 
            {
                return ()=>(
                    <Card4
                        width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                        height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                        // data={""}
                        
                    />
                );
            }
            case CARD5: 
            {
                return ()=>(
                    <Card5
                        width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                        height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                        // data={""}
                        
                    />
                );
            }
            case CARD6: 
            {
                return ()=>(
                    <Card6
                        width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                        height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                        // data={""}
                        
                    />
                );
            }
            case CARD7: 
            {
                return ()=>(
                    <Card7
                        width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                        height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                        // data={""}
                        
                    />
                );
            }
            case CARD8: 
            {
                return ()=>(
                    <Card8
                        width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                        height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                        // data={""}
                        
                    />
                );
            }
            case CARD9: 
            {
                return ()=>(
                    <Card9
                        width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                        height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                        // data={""}
                        
                    />
                );
            }
            case CARD10: 
            {
                return ()=>(
                    <Card10
                        width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                        height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                        // data={""}
                        
                    />
                );
            }
            case CARD11: 
            {
                return ()=>(
                    <Card11
                        width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                        height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                        // data={""}
                        
                    />
                );
            }
            case PIE_CHART: 
            {
                return ()=>(
                    <PieChart 
                      width={getWidthByDimension(this.props.dimension, this.borderWidth)}
                      height={getTableHeightByDimension(this.props.dimension, this.chartHeaderHeight)}
                      data={[]}
                    />
                );
            }
            default:
                return null;
        }
    }

    @computed get loadingPromises() {
        const ret = [this.props.promise];
        return ret;
    }

    @computed
    get highlightChart() {
        return this.newlyAdded;
    }

    componentDidMount() {
        if (this.props.isNewlyAdded(this.props.chartMeta.uniqueKey)) {
            this.newlyAdded = true;
            setTimeout(() => this.newlyAdded = false, DASHBOARD_VIEW_CONFIG.thresholds.chartHighlight);
        }
    }

    componentWillReceiveProps(nextProps: Readonly<IChartContainerProps>, nextContext: any): void {
        if (nextProps.chartType !== this.chartType) {
            this.chartType = nextProps.chartType;
        }
    }

    public render() {
        return (
            // <div className={classnames(styles.chart, { [styles.highlight]: this.highlightChart})}
            <div
                 data-test={`chart-container-${this.props.chartMeta.uniqueKey}`}
                 >
                {/* <ChartHeader
                    height={this.chartHeaderHeight}
                    chartMeta={this.props.chartMeta}
                    chartType={this.props.chartType}
                    store={this.props.store}
                    title={this.props.title}
                    active={this.mouseInChart}
                    resetChart={this.handlers.resetFilters}
                    deleteChart={this.handlers.onDeleteChart}
                    toggleLogScale={this.handlers.onToggleLogScale}
                    
                    changeChartType={this.changeChartType}
                    getSVG={()=>Promise.resolve(this.toSVGDOMNode())}
                    
                    
                    
                    placement={this.placement}
                /> */}
                <div style={{display: 'flex', flexGrow: 1, margin: 'auto', alignItems: 'center'}}>
                    {/* {(this.props.promise.isPending) && (
                        <LoadingIndicator
                            isLoading={true}
                            className={styles.chartLoader}
                        />
                    )}
                    {this.props.promise.isError && (<div>Error when loading data.</div>)}

                    {(!this.props.chartMeta.renderWhenDataChange || this.props.promise.isComplete) && */}
                    {/* <div style={{visibility: this.props.promise.isPending ? 'hidden' : 'visible', display: 'flex'}}> */}
                    <div style={{visibility: 'visible', display: 'flex'}}>
                        {this.chart && this.chart()}
                    </div>
                    {/* } */}
                </div>
            </div>
        );
    }
}
