import * as React from 'react';
import * as _ from 'lodash';
import autobind from "autobind-decorator";
import * as request from 'superagent';
import {computed, observable, action, runInAction} from "mobx";
import {observer,} from 'mobx-react';
import {remoteData} from "src/public-lib/api/remoteData";
import AppConfig from "appConfig";
// import styles from './styles.module.scss';
import {PageLayout} from "src/shared/components/PageLayout/PageLayout";
import LoadingIndicator from "shared/components/loadingIndicator/LoadingIndicator";
import GridLayout, { Layout} from 'react-grid-layout';
// import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';
// import './gridmain.css';
import './grid.css';
import Page from 'src/components/Page';
import { Container} from '@mui/material';
import { Responsive, WidthProvider } from "react-grid-layout";
import Activity1 from './Activity1';
import Activity2 from './Activity2';
import Activity3 from './Activity3';
import Table1 from './Table1';
import List1 from './List1';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export type layout = ReactGridLayout.Layout[];
export type layouts = {
    [lg: string]: layout;
};

export class DatasetPageStore {

  @action
  generateLayout():any {
    let layoutarr = [
      {
        x: 0,
        y: 0 ,
        w: 4,
        h: 10,
        i: "jira",
        static: false
      },
      {
        x: 4,
        y: 0 ,
        w: 4,
        h: 10,
        i: "jira1",
        static: false
      },
      {
        x: 8,
        y: 0 ,
        w: 4,
        h: 10,
        i: "jira2",
        static: false
      },
      {
        x: 0,
        y: 0 ,
        w: 4,
        h: 10,
        i: "jira3",
        static: false
      },
      {
        x: 4,
        y: 0 ,
        w: 4,
        h: 10,
        i: "jira4",
        static: false
      },
      {
        x: 8,
        y: 0 ,
        w: 4,
        h: 10,
        i: "jira5",
        static: false
      },
    ];
    return layoutarr;
  }

  @action
  generateLayout2():any {
    return _.map(_.range(0, 6), function(item, i) {
      var y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: i*2,
        y: 0 ,
        w: 4,
        h: 7,
        i: i.toString(),
        
      };
    });
  }

  generateLayout3() {
    return _.map(_.range(0, 25), function(item, i) {
      var y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (_.random(0, 5) * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
        static: Math.random() < 0.05
      };
    });
  }

  @observable layout:ReactGridLayout.Layout[];
  public layouts:layouts;
  @observable currentBreakpoint:string = "lg";
    @observable compactType: "vertical" | "horizontal" | null;
  @observable mounted:boolean =  false;

  constructor() {
    const lay:ReactGridLayout.Layout[] = this.generateLayout3();
    this.layouts = {lg:lay};
  }
   
  @autobind
  @action
  onLayoutChange(newLayout:ReactGridLayout.Layout[]) {
   this.layout = newLayout ;
  }

  @action
 onCompactTypeChange() {
   const compactType = this.compactType === "horizontal"
       ? "vertical"
       : "horizontal";
 }

 @autobind
 @action
 onBreakpointChange(breakpoint:string) {
     this.currentBreakpoint = breakpoint;
 }
}
 

type IGridProps = {
    className: string,
    items: number,
    rowHeight: number,
    onLayoutChange: (t:any) => void,
    cols: 12
}

@observer
export default class GridTest1 extends React.Component<IGridProps, {}> {
    private store:DatasetPageStore;
    
    public static defaultProps = {
        className: "layout",
        items: 20,
        rowHeight: 30,
        onLayoutChange: function() {},
        cols: 12
      };
    
      
    constructor(props:any) {
        super(props);
        this.store = new DatasetPageStore();
    }
   
    // generateDOM() {
    //   // console.log(this.store.layouts.lg);
    //   return _.map(this.store.layouts.lg, function(l:ReactGridLayout.Layout, i) {
    //     // console.log(i);
    //     return (
    //       <div key={i} className={l.static ? "static" : ""}>
    //         {l.static ? (
    //           <span
    //             className="text"
    //             title="This item is static and cannot be removed or resized."
    //           >
    //             Static - {i}
    //           </span>
    //         ) : (
    //           <span className="text">{i}</span>
    //         )}
    //       </div>
    //     );
    //   });
    // }

    generateDOM() {
        return _.map(this.store.layouts.lg, function(l:ReactGridLayout.Layout, i) {
          console.log(l.i);
        return (
          <div key={l.i}>
            {/* <span className="text">{i}</span> */}
            {l.i==="jira" &&
            <Activity1 id={l.i} store={this.store}/>
            }
            {l.i==="jira1" &&
            <Activity2 id={l.i} store={this.store}/>
            }
            {l.i==="jira2" &&
            <Activity3 id={l.i} store={this.store}/>
            }
            {l.i==="jira3" &&
            <Table1 store={this.astore}/>
            }
            {l.i==="jira4" &&
            <List1 />
            }
          {/* {
            activities.map(activity => ( */}
             {/* <ActivityListItem key={i} activity={activity} /> */}
          {/* // ))
          // } */}
           </div>     
            )
          })     
    }
  
private cols= { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
    public render() {

        // const header:JSX.Element|null = !_.isEmpty(AppConfig.serverConfig.skin_data_sets_header) ? <p style={{marginBottom:"20px"}} dangerouslySetInnerHTML={{__html: AppConfig.serverConfig.skin_data_sets_header!}}></p> : null;
        // const footer:JSX.Element|null = !_.isEmpty(AppConfig.serverConfig.skin_data_sets_footer) ? <p style={{marginTop:"20px"}} dangerouslySetInnerHTML={{__html: AppConfig.serverConfig.skin_data_sets_footer!}}></p> : null;

        return (
          <Page title='메인'>
          <Container>
        
            <div>

                {/* <Helmet>
                    <title>gridtest</title>
                </Helmet> */}

                {/* <h1>Datasets</h1> */}

                <div>
        <div>
        
        
        {/* <button onClick={this.onNewLayout}>Generate New Layout</button>
        <button onClick={this.onCompactTypeChange}>
          Change Compaction Type
        </button> */}
        <ResponsiveReactGridLayout
          className="layout"
          rowHeight = {30}
          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
          width={100}
          layouts={this.store.layouts}
          onBreakpointChange={this.store.onBreakpointChange}
          onLayoutChange={this.store.onLayoutChange}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={true}
          compactType={this.store.compactType}
          preventCollision={!this.store.compactType}
          isDraggable={false}
          isResizable={false}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>


    </div>

            </div>
            </Container>
        </Page>
        
        )
    }
}
