import React from 'react';
import autobind from "autobind-decorator";
import * as request from 'superagent';
import {computed, observable, action, runInAction} from "mobx";
import {observer,} from 'mobx-react';
import { Item, Button, Segment, Icon, Label } from 'semantic-ui-react';
import {remoteData} from "src/public-lib/api/remoteData";
import {ActivityViewPageStore} from './ActivityViewPageStore';
import LoadingIndicator from "src/shared/components/loadingIndicator/LoadingIndicator";
// // const ActivityListItem: React.FC<{ activity: any }> = ({ activity }) => {
//     export type IActivity = {
//         'id':number
//         'title':string
//         'category'?:string
//         'description'?:string
//         'date'?:string
//         'city'?:string
//         'venue'?:string
//         'isHost'?:boolean
//         'isGoing'?:boolean
    
//     };    
// export class ActivityStore {
    
//     @observable activity:any[];
//     constructor(){
     
//     }

   

// //  @autobind   
// //  @action
// readonly activitydata = remoteData({
//     await: () => [],
//     invoke: () => {
//             return request.get('http://localhost:5000/api/activities/1')
//             //    .query({identifier_type: 'entrez_id'})
//                .then((res) => {
//                     let response = res.body;
//                     let result: Array<IActivity>;
//                     if (response instanceof Array) {
//                         console.log(response);
//                       result = response;
//                     } else {
//                       result = [response];
//                     }
                   
//                     return result;
//                     // return  result.map((record: any) => ({
//                     //   id: record.id,
//                     //   name: record.name,
//                     //   title: record.title,
//                     //   category:record.category,
//                     //   city:record.city,
//                     //   venue:record.venue,
//                     //   isHost:record.isHost,
//                     //   isGoing:record.isGoing
//                     // }));
//                 });
        
        
//         // else {
//         //     return Promise.resolve([]);
//         // }
//       },
//       onError: (err: Error) => {
//         // fail silently
//       }

//     }, []);
// //   activities(): Promise<Array<any>> {
// //         return request.get('http://localhost:5000/api/activities/1')
// //             //    .query({identifier_type: 'entrez_id'})
// //                .then((res) => {
// //                     let response = res.body;
// //                     let result: Array<any>;
// //                     if (response instanceof Array) {
// //                         console.log(response);
// //                       result = response;
// //                     } else {
// //                       result = [response];
// //                     }
                   
// //                     // return result;
// //                     return  result.map((record: any) => ({
// //                       id: record.id,
// //                       name: record.name,
// //                       title: record.title,
// //                       category:record.category,
// //                       city:record.city,
// //                       venue:record.venue,
// //                       isHost:record.isHost,
// //                       isGoing:record.isGoing
// //                     }));
                    
// //                     // return result.map((record: any) => ({
// //                     //     id: record.id,
// //                     //     name: record.name,
// //                     //     description: record.description,
// //                     //     url: 'https://civicdb.org/#/events/genes/'
// //                     //     + record.id + '/summary',
// //                     //     variants: createVariantMap(record.variants)
// //                     // }));
// //                 });
// //         }
// }

type IProps = {
    id:string;
    store:ActivityViewPageStore
}
    @observer
    export default class Activity1 extends React.Component<IProps, {}> {
        private store:ActivityViewPageStore
        constructor(props:any){
            super(props);
            this.store = this.props.store;
        }

        render(){
  return (
      <div key={this.props.id}>
        <LoadingIndicator isLoading={this.store.activitydata1.isPending} />
    {this.store.activitydata1.isComplete &&
     this.store.activitydata1.result.map((activity,i) => (
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
          to={`/activities/${activity.id}`}
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

