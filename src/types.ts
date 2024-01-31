import { string } from "prop-types";

export type Asset = {
  company: string;
  assetsort: string;
  serial: string;
  model: string;
  manufacturer: string;
  assetplace: string;
  assetdate: string;
  checkperiod: string;
  assetprice: string;
  bigo:string;
  status:string;
}

export type Account = {
  company: string;
  userid: string;
  authority: string;
  username : string;
  tel : string;
  phone: string;
  email : string;
  rating: string;
  password: string;
  repassword: string;
  priority:string;
  bigo:string;
  branch:[];
}

export type Profile = {
  name: string;
  userid: string;
  password: string;
  email: string;
  tel: string;
  phone: string;
  bigo: string;
}

export type Service = {
  requestno:string;
  company:string;
  asmanager:string;
  requestdate:string;
  status:string;
  servicename: string;
  servicecontent: string;
  servicetype: string;
  pridicttime: string;
  priority: string;
  servicehopedate: string;
  bigo: string;
  branch:string;
  contract:string;
  requester:string;
  asset: string;
}

export type User = {
  userid:string;
  password:string;
}