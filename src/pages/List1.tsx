import React from 'react';
import { Item, Button, Label, Segment, Menu, Header } from 'semantic-ui-react';

export interface IProjectProps {
  data?:any;
  width?: number;
  height?: number;
}
export default class ActivityViewPage extends React.Component<IProjectProps, {}>{
    
    //private activityViewPageStore: ActivityViewPageStore;

    constructor(props: IProjectProps) {
        super(props);
    }
 


public render() {

  return (
    <div style={{width:this.props.width, height:this.props.height}}>
    <Menu vertical fluid>
    <Menu.Item>
      <Header size='medium' as='h1'>
        List group item heading
      </Header>
      <p>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
        varius blandit.
      </p>
    </Menu.Item>
    <Menu.Item>
      <Header size='medium' as='h1'>
        List group item heading
      </Header>
      <p>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
        varius blandit.
      </p>
    </Menu.Item>
    <Menu.Item>
      <Header size='medium' as='h1'>
        List group item heading
      </Header>
      <p>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
        varius blandit.
      </p>
    </Menu.Item>
  </Menu>
  </div>
  );
 };
}
