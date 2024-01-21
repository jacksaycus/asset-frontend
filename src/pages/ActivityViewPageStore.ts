import * as _ from 'lodash';
import * as request from 'superagent';
import { computed, observable, action, runInAction } from 'mobx';
import { remoteData } from 'src/public-lib/api/remoteData';
import { labelMobxPromises, cached } from 'mobxpromise';
export type IActivity = {
    id: number;
    title: string;
    category?: string;
    description?: string;
    date?: string;
    city?: string;
    venue?: string;
    isHost?: boolean;
    isGoing?: boolean;
};
export type RepositoryViewURLQuery = {
    id?: string;
    name?: string;
    filters?: string;
};

export class ActivityViewPageStore {
    constructor() {
        labelMobxPromises(this);
    }
    @observable projectcomplete: boolean;
    @observable repositorycomplete: boolean;
    @observable projectId:string="";
    @observable repositoryId:string="";
    
    // @observable activity: any[];

    // @computed get activity1() {
    //     return this.projectcomplete ? this.activitydata1.result : [];
    // }
    @computed get activity2() {
        console.log('activity2 computed',this.projectcomplete);
        return this.projectcomplete ? this.activitydata2.result : [];
    }
    @computed get activity3() {
        console.log('activity3 computed');
        return this.repositorycomplete ? this.activitydata3.result : [];
    }

    readonly activitydata1 = remoteData(
        {
            await: () => [],
            invoke: () => {
                return (
                    request
                        .get('http://localhost:5000/api/activities/1')
                        //    .query({identifier_type: 'entrez_id'})
                        .then(res => {
                            let response = res.body;
                            let result: Array<IActivity>;
                            if (response instanceof Array) {
                                console.log(response);
                                result = response;
                            } else {
                                result = [response];
                            }

                            return result;
                        })
                );
            },
            onError: (err: Error) => {
                // fail silently
            },
        },
        []
    );

    readonly activitydata2 = remoteData(
        {
            await: () => [],
            invoke: () => {
                return (
                    request
                        .get(`http://localhost:5000/api/activities/${this.projectId}`)
                        //    .query({identifier_type: 'entrez_id'})
                        .then(res => {
                            let response = res.body;
                            let result: Array<IActivity>;
                            if (response instanceof Array) {
                                console.log(response);
                                result = response;
                            } else {
                                result = [response];
                            }

                            return result;
                        })
                );
            },
            onError: (err: Error) => {
                // fail silently
            },
        },
        []
    );

    readonly activitydata3 = remoteData(
        {
            await: () => [],
            invoke: () => {
                return (
                    request
                    .get(`http://localhost:5000/api/activities/${this.repositoryId}`)
                        //    .query({identifier_type: 'entrez_id'})
                        .then(res => {
                            let response = res.body;
                            let result: Array<IActivity>;
                            if (response instanceof Array) {
                                console.log(response);
                                result = response;
                            } else {
                                result = [response];
                            }

                            return result;
                        })
                );
            },
            onError: (err: Error) => {
                // fail silently
            },
        },
        []
    );


    @action
    async updateStoreFromURL(query: RepositoryViewURLQuery) {
        let repositoryNameString: string = '';
        //let studyIds: string[] = [];
        if (query.id) {
            repositoryNameString = query.id;
        }
        console.log(repositoryNameString);
    }

    // readonly ziraData = remoteData(
    //     {
    //         invoke: async () => {
    //             //  console.log('--> ', fetchZiraData());
    //             return fetchZiraData();
    //         },
    //     },
    //     []
    // );

    // readonly ziraData1 = remoteData(
    //     {
    //         invoke: async () => {
    //             // console.log('--> ', fetchZiraData());
    //             return fetchZiraData();
    //         },
    //     },
    //     []
    // );

    // readonly ziraData = remoteData(
    //   {
    //      invoke: () => {
    //         console.log('--> ', client.fetchZiraDataGET());
    //         return client.fetchZiraDataGET();
    //      },
    // },[]

    // );
}
