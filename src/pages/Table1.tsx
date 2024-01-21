import React from 'react';
import { Item, Button, Label, Segment, Menu, Header ,Table} from 'semantic-ui-react';
import {ActivityViewPageStore} from './ActivityViewPageStore';
import { observer } from 'mobx-react';
export interface IProjectProps {
    data?:any;
    width?: number;
    height?: number;
    store:ActivityViewPageStore;
}
@observer
export default class ActivityViewPage extends React.Component<IProjectProps, {}>{
    
    private store: ActivityViewPageStore;

    constructor(props: IProjectProps) {
        super(props);
        this.store = this.props.store;
    }
 

private onClick(id:string){
    console.log("......",id);
 this.store.projectId=id;
 this.store.projectcomplete=true;
}
public render() {

  return (
  <div style={{width:this.props.width, height:this.props.height}}>
    <Table>
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell>
                Name
            </Table.HeaderCell>
            <Table.HeaderCell>
                Premium Plan
            </Table.HeaderCell>
        </Table.Row>
    </Table.Header>
    <Table.Body>
        <Table.Row onClick={()=>this.onClick("2")} style={{cursor:"pointer"}}>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row onClick={()=>this.onClick("3")} style={{cursor:"pointer"}}>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
        </Table.Row>
        <Table.Row onClick={()=>this.onClick("4")} style={{cursor:"pointer"}}>
            <Table.Cell>Jill</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
        </Table.Row>
    </Table.Body>
</Table>
</div>
  );
 };
}
