import * as React from "react";
import * as _ from "lodash";
import styles from "./summaryStyles.module.scss";
import chartHeaderStyles from "./chartHeader/styles.module.scss";
import {inject, observer} from "mobx-react";
import getBrowserWindow from "src/public-lib/lib/getBrowserWindow";
import {GridViewPageStore} from './GridViewPageStore';
import {ChartContainer, IChartContainerProps} from './charts/ChartContainer';
import {
  ChartMeta,
} from "./DashboardViewUtils";
import {ChartTypeEnum, DASHBOARD_VIEW_CONFIG} from "./DashboardViewConfig";
import autobind from 'autobind-decorator';
import ReactGridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

@observer
export default class DashboardViewPage extends React.Component<{},{}> {
  private store: GridViewPageStore;
 
  private handlers: any;
    constructor(props:any) {
        super(props);
        console.log("dashboard view called");
        // this.store = new GridViewPageStore(this.appStore);
        this.store = new GridViewPageStore();
        this.handlers = {
          isNewlyAdded:(uniqueKey: string) => {
              return this.store.isNewlyAdded(uniqueKey);
          },
          onLayoutChange: (layout: ReactGridLayout.Layout[]) => {
              this.store.updateCurrentGridLayout(layout);
          },
      }

    }
    private get appStore(){
      return getBrowserWindow().globalStores.appStore;
  }
    renderAttributeChart = (chartMeta: ChartMeta) => {
      console.log("this.store.visibleAttributes ", this.store.visibleAttributes);
      console.log("chartMeta ", chartMeta);
      console.log("this.store.chartsType",this.store.chartsType);
      const props:Partial<IChartContainerProps> = {
          chartMeta: chartMeta,
          chartType: this.store.chartsType.get(chartMeta.uniqueKey),
          store: this.store,
          dimension: this.store.chartsDimension.get(chartMeta.uniqueKey),
          title: chartMeta.displayName,
          filters: [],
           isNewlyAdded: this.handlers.isNewlyAdded,
      };

      const {CARD1, CARD2 } = ChartTypeEnum;
      switch (this.store.chartsType.get(chartMeta.uniqueKey)) {
          case CARD1: {
              
              break;
          }
          case CARD2: {

            break;   
          }
          
          
          default:
              break;
      }

      // Using custom component inside of the GridLayout creates too many chaos as mentioned here
      // https://github.com/STRML/react-grid-layout/issues/299
      // Option 1:    Always create div wrapper out of your custom component, but this solves all the issues.
      // Option 2:    Expose style, className in your component and apply all the properties in your component
      //              first division tag. And remember, you component has to use div as first child.
      //              This solution only works with grid layout, not resizing.
      // Decided to go with option 1 due to following reasons:
      // 1.   The ChartContainer will be used to include all charts in the study view.
      //      Then across the study page, there should be only one place to include ChartContainer component.
      // 2.   The maintainer of RGL repo currently not actively accepts pull requests. So we don't know when the
      //      issue will be solved.
      return (
      <div key={chartMeta.uniqueKey}>
          <ChartContainer key={chartMeta.uniqueKey} {...(props as any)}/>
      </div>);
  };

  @autobind
  getProgressItems(elapsedSecs:number): IProgressIndicatorItem[] {
      return [{
          label: 'Loading meta information',
          // promises: [this.store.defaultVisibleAttributes, this.store.mutationProfiles, this.store.cnaProfiles]
      }, {
          label: 'Loading clinical data' + (elapsedSecs > 2 ? ' - this can take several seconds' : ''),
          // promises: [this.store.initialVisibleAttributesClinicalDataBinCountData, this.store.initialVisibleAttributesClinicalDataCountData]
      }];
  }

    public render() {
    return (
      
      //  <LoadingIndicator isLoading={this.store.loadingInitialDataForSummaryTab} size={"big"} center={true}>
      //               <ProgressIndicator getItems={this.getProgressItems} show={this.store.loadingInitialDataForSummaryTab} sequential={false}/>
      //           </LoadingIndicator>
      // {!this.store.loadingInitialDataForSummaryTab &&
        <div data-test="summary-tab-content" style={{ marginTop: '5em' }}>
          {/* <NavBar /> */}
            <div className={styles.studyViewFlexContainer}>
                {/* {this.store.defaultVisibleAttributes.isComplete && ( */}
                    <ReactGridLayout className="layout"
                                     style={{width: this.store.containerWidth}}
                                     width={this.store.containerWidth}
                                     cols={this.store.studyViewPageLayoutProps.cols}
                                     rowHeight={this.store.studyViewPageLayoutProps.grid.h}
                                     layout={this.store.studyViewPageLayoutProps.layout}
                                     margin={[DASHBOARD_VIEW_CONFIG.layout.gridMargin.x, DASHBOARD_VIEW_CONFIG.layout.gridMargin.y]}
                                     
                                     useCSSTransforms={true}
                                     draggableHandle={`.${chartHeaderStyles.draggable}`}
                                     onLayoutChange={this.handlers.onLayoutChange} >
                        {this.store.visibleAttributes.map(this.renderAttributeChart)}
                    </ReactGridLayout>
                {/* )} */}

            </div>

        </div>
        
        // }
        
  );
   
 }
}
