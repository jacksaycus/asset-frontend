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
}

export type Account = {
  company: string;
  userid: string;
  authority: string;
  name : string;
  tel : string;
  phone: string;
  email : string;
  rating: number;
}