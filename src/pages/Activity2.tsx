import React from 'react';
import autobind from "autobind-decorator";
import * as request from 'superagent';
import {computed, observable, action, runInAction} from "mobx";
import {observer,} from 'mobx-react';
import { Item, Button, Segment, Icon, Label } from 'semantic-ui-react';
import {remoteData} from "src/public-lib/api/remoteData";
import {ActivityViewPageStore} from './ActivityViewPageStore';
import LoadingIndicator from "src/shared/components/loadingIndicator/LoadingIndicator";
// const ActivityListItem: React.FC<{ activity: any }> = ({ activity }) => {
 

type IProps = {
    id:string;
    store:ActivityViewPageStore;
}
    @observer
    export default class Activity2 extends React.Component<IProps, {}> {
        private store:ActivityViewPageStore
        constructor(props:any){
            super(props);
            this.store = this.props.store;
        }

    private onClick(id:string){
      console.log("......",id);
      this.store.repositoryId=id;
      this.store.repositorycomplete=true;
    }

 render(){
  return (
    <div key={this.props.id}>
    <LoadingIndicator isLoading={this.store.activitydata2.isPending} />
    {this.store.projectcomplete &&
     this.store.activity2.map((activity,i) => (
        <Segment.Group key={i}>
      <Segment>
        <Item.Group>
          <Item>
            {/* <Item.Image
              size='tiny'
              circular
              src={host.image || '/assets/user.png'}
              style={{ marginBottom: 3 }}
            /> */}
            <Item.Content>
              {/* <Item.Header as={Link} to={`/activities/${activity.id}`}> */}
              <Item.Header>
                {activity.title}
              </Item.Header>
              <Item.Description>
                Hosted by
                {/* <Link to={`/profile/${host.username}`}> {host.displayName}</Link> */}
              </Item.Description>
              {activity.isHost && (
                <Item.Description>
                  <Label
                    basic
                    color='orange'
                    content='You are hosting this activity'
                  />
                </Item.Description>
              )}
              {activity.isGoing && !activity.isHost && (
                <Item.Description>
                  <Label
                    basic
                    color='green'
                    content='You are going to this activity'
                  />
                </Item.Description>
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        {/* <Icon name='clock' /> {format(activity.date, 'h:mm a')} */}
        <Icon name='clock' /> {activity.date}
        <Icon name='marker' /> {activity.venue}, {activity.city}
      </Segment>
      <Segment secondary>
        {/* <ActivityListItemAttendees attendees={activity.attendees} /> */}
      </Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
        //   as={Link}
        //   to={`/activities/${activity.id}`}
        onClick={()=>this.onClick("5")}
          floated='right'
          content='View'
          color='blue'
        />
      </Segment>
    </Segment.Group>
     ))
}
</div>
  );
};
    }

