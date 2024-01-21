import * as React from "react";
import styles from "./styles.module.scss";
import {ChartMeta} from "../DashboardViewUtils";
import {ChartType, NumericalGroupComparisonType} from "src/pages/DashboardViewUtils";
import {GridViewPageStore} from "src/pages/GridViewPageStore";
// import DefaultTooltip from "../../../public-lib/components/defaultTooltip/DefaultTooltip";
import autobind from 'autobind-decorator';
import classnames from 'classnames';
// import fileDownload from 'react-file-download';
import {action, computed, observable} from "mobx";
import {observer} from "mobx-react";
// import {saveSvgAsPng} from "save-svg-as-png";
// import svgToPdfDownload from "public-lib/lib/svgToPdfDownload";
// import {Dropdown, MenuItem} from "react-bootstrap";
// import Timer = NodeJS.Timer;
// import {serializeEvent} from "shared/lib/tracking";

export interface IChartHeaderProps {
    chartMeta: ChartMeta;
    chartType: ChartType;
    store: GridViewPageStore;
    title: string;
    height: number;
    placement: 'left' | 'right',
    active           : boolean;
    resetChart       : () => void;
    deleteChart      : () => void;
    toggleLogScale?  : () => void;
    hideLabel?       : boolean;
    // chartControls?   : ChartControls;
    changeChartType  : (chartType: ChartType) => void;
    getSVG?          : ()=>Promise<SVGElement | null>;
    // getData?         : ((dataType?:DataType)=>Promise<string | null>) | ((dataType?:DataType)=>string);
    // downloadTypes?   : DownloadControlsButton[];
    // openComparisonPage: (categorizationType?: NumericalGroupComparisonType) => void;
}

export interface ChartControls {
    showResetIcon?      : boolean;
    showTableIcon?      : boolean;
    showPieIcon?        : boolean;
    showComparisonPageIcon?   : boolean;
    showLogScaleToggle? : boolean;
    logScaleChecked?    : boolean;
}

@observer
export class ChartHeader extends React.Component<IChartHeaderProps, {}> {

    @observable menuOpen = false;
    @observable downloadSubmenuOpen = false;
    @observable comparisonSubmenuOpen = false;
    @observable showCustomBinModal:boolean = false;
    private closeMenuTimeout:number|undefined = undefined;

    @computed
    get fileName() {
        return this.props.chartMeta.displayName.replace(/[ \t]/g, '_');
    }

    @autobind
    @action
    private openMenu() {
        this.menuOpen = true;
        window.clearTimeout(this.closeMenuTimeout);
        this.closeMenuTimeout = undefined;
    }

    @autobind
    @action
    private closeMenu() {
        if (!this.closeMenuTimeout) {
            this.closeMenuTimeout = window.setTimeout(()=>{
                this.menuOpen = false;
                this.closeMenuTimeout = undefined;
            }, 125);
        }
    }

    @computed get active() {
        // return this.menuOpen || this.props.active;
        return false;
    }

    // there's some incompatiblity with rc-tooltip and study view layout
    // these adjustments force tooltips to open on different directions because tooltips
    // were breaking at far right of page
    @computed
    get tooltipPosition() {
        return  this.props.placement == 'left' ? 'topRight' : 'top';
    }

    @computed
    get tooltipAlign() {
        return this.props.placement == 'left' ? { offset:[0,-6] } : undefined;
    }

    public render() {
        return (
            <div className={classnames(styles.header, 'chartHeader')}
                 style={{position:"relative", height: `${this.props.height}px`, lineHeight: `${this.props.height}px`}}>
                <div className={classnames(styles.name, styles.draggable)}>
                    {!this.props.hideLabel && <span className='chartTitle' style={{fontSize:"11"}}>{this.props.title}</span>}
                </div>
                {this.active && (
                    <div
                        style={{
                            position:"absolute",
                            top:2,
                            right:2
                        }}
                    >

                    </div>
                )}
            </div>
        );
    }

}
