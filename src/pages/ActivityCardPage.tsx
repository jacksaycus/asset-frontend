import React from 'react';
import {Card,Image,Grid } from 'semantic-ui-react';
import 'materialize-css/dist/css/materialize.min.css';
import './styles.scss';

export type IProps = {
  header:string;
  image?:string;
  description:string;
  extra:string;
}

export class Card30 extends React.Component<IProps, {}> {
  constructor(props:IProps){
      super(props);
  }
public render(){
  return (
    // <div style={{ height: 270, float: 'left'}}>
    <div className="card blue-grey darken-1">
    <div className="card-content white-text">
    <span className="card-title">{this.props.header}</span>
    <p>{this.props.description}</p>
        </div>
                <div className="card-action">
    <a target="_blank" rel="noopener noreferrer" >{this.props.extra}</a>
                </div>
            </div>
        // </div>
   )
  }
}

export class Card0 extends React.Component<IProps, {}> {
  constructor(props:IProps){
      super(props);
  }
public render(){
  return (
  //  <Card style={{width:'390px',height:'537px'}}>
  <Card>
    <Image src={this.props.image} wrapped ui={false} style={{width:'auto',height:'320px',position: 'relative'}}/>
    <Card.Content>
  <Card.Header>{this.props.header}</Card.Header>
      <Card.Meta>
        <span className='date'></span>
      </Card.Meta>
      <Card.Description>
        {this.props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    {this.props.extra}
    </Card.Content>
   </Card> 
   )
}
}

// export const Card1 = () => {
//   return (
//     <Card style={{width:this.props.width, height:this.props.height}}>
//     <Image src={require('src/assets/rootImages/assets/logos/abio.png') } wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>cBioPortal</Card.Header>
//       <Card.Meta>
//         <span className='date'></span>
//       </Card.Meta>
//       <Card.Description>
//        test
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//     test
//     </Card.Content>
//    </Card> 
//    )
// }
export type ICard = {
  width:number;
  height:number;
 }

 export class Card1 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
    <Image src='src/assets/rootImages/assets/logos/bbio.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>CDW</Card.Header>
      <Card.Meta>
        <span className='date'></span>
      </Card.Meta>
      <Card.Description>
       test
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     test
    </Card.Content>
   </Card> 
    )
   }
  }

export class Card2 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src='src/assets/rootImages/assets/logos/chris.jpg' style={{width:'360px', height:'360px'}} wrapped ui={false} />
         <Card.Content>
           <Card.Header>test</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           test
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         test
         </Card.Content>
        </Card> 
       )
}
}

export class Card3 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src='src/assets/rootImages/assets/logos/elbuy.jpg' wrapped ui={false} />
         <Card.Content>
           <Card.Header>test</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
          test
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         test
         </Card.Content>
        </Card> 
       )
  }
}

export class Card4 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src='src/assets/rootImages/assets/logos/ali.jpg' wrapped ui={false} />
         <Card.Content>
           <Card.Header>test</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
          test
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         test
         </Card.Content>
        </Card> 
       )
  }
}

export class Card5 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src='src/assets/rootImages/assets/logos/daniel.jpg' wrapped ui={false} />
         <Card.Content>
           <Card.Header>인사성과관리</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
          test
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
        test
         </Card.Content>
        </Card> 
       )
  }
}

export class Card6 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src='src/assets/rootImages/assets/logos/dzrpt.jpg' wrapped ui={false} />
         <Card.Content>
           <Card.Header>Global SCM</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
         test
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         test
         </Card.Content>
        </Card> 
       )
  }
}

export class Card7 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src='src/assets/rootImages/assets/logos/kasra.jpg' wrapped ui={false} />
         <Card.Content>
           <Card.Header>Global MES</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           test
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         test
         </Card.Content>
        </Card> 
       )
  }
}

export class Card8 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src='src/assets/rootImages/assets/logos/matthew.png' style={{width:'300px',height:'300px'}} wrapped ui={false} />
         <Card.Content>
           <Card.Header>R.C Mobile</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           test
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         test
         </Card.Content>
        </Card> 
       )
  }
}

export class Card9 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src='src/assets/rootImages/assets/logos/elliot.jpg' style={{width:'300px',height:'300px'}} wrapped ui={false} />
         <Card.Content>
           <Card.Header>test</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           test
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
        test
         </Card.Content>
        </Card> 
       )
  }
}

export class Card10 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src='src/assets/rootImages/assets/logos/restaurantReason.jpg' wrapped ui={false} />
         <Card.Content>
           <Card.Header>test</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           test
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         test
         </Card.Content>
        </Card> 
       )
  }
}

export class Card11 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src='src/assets/rootImages/assets/logos/steve.jpg' wrapped ui={false} />
         <Card.Content>
           <Card.Header>test</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           test
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         test
         </Card.Content>
        </Card> 
       )
  }
}


// export const Card2 = () => {
//   return (
//    <Card style={{width:'360px'}}>
//     <Image src={require('src/assets/rootImages/assets/logos/culture.jpg') } wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>다부처연계플랫폼</Card.Header>
//       <Card.Meta>
//         <span className='date'></span>
//       </Card.Meta>
//       <Card.Description>
//       국가차원에 문화정보를 수집 데이타베이스화여 대국민서비스하기위한 
//       메타정보 플랫폼을 구축 기존에 정형화된 데이타에서 한층 진일보하여 
//       비정형데이타를 수집하여 이를 체계적으로 분류하여 수집가공함 
//       이는 적합한 문화정보서비스에 전초적 역할을 수행하는 작업이었음.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//     Java,Jsp,jQuery,전자정부,Tibero,리얼그리드,eChart
//     </Card.Content>
//    </Card> 
//    )
// }
