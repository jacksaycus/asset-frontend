import React from 'react';
import { Item, Button, Label, Segment, Menu, Header ,Table} from 'semantic-ui-react';
import {ActivityViewPageStore} from './ActivityViewPageStore';
import { observer } from 'mobx-react';
export interface IProjectProps {
    data?:any;
    width?: number;
    height?: number;
}
@observer
export default class Table2 extends React.Component<IProjectProps, {}>{
    
    private store: ActivityViewPageStore;

    constructor(props: IProjectProps) {
        super(props);
    }

public render() {

  return (
  <div style={{width:this.props.width, height:this.props.height}}>
    <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>a</Table.HeaderCell>
            <Table.HeaderCell>b</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>React</Table.Cell>
            <Table.Cell style={{background:"green"}}>aa</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Spring</Table.Cell>
            <Table.Cell color='red'></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Oracle</Table.Cell>
            <Table.Cell color='orange'></Table.Cell>
          </Table.Row>
          
        </Table.Body>
      </Table>
</div>
  );
 };
}
