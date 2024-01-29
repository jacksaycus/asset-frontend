import {Service, Asset, Account, Profile} from '../types';
import axios from 'axios';
export const getService = async (param): Promise<any[]> => {
  console.log(param.queryKey[1]);
  console.log(param.queryKey[1].searchColumn, param.queryKey[1].searchValue)
  const searchColumn = param.queryKey[1].searchColumn;
  const searchValue = param.queryKey[1].searchValue 
  let qstr = `${import.meta.env.VITE_API_URL}/kitms-services`
  if(serviceValue!=='') qstr = `${import.meta.env.VITE_API_URL}/kitms-services?serviceColumn=${searchColumn}&?serviceValue=${searchValue}`
  const response = await axios.get(qstr);
  return response.data;
}

export const getServiceDetail = async (serviceNo:string): Promise<any[]> => {
  const qstr = `${import.meta.env.VITE_API_URL}/api/kitms-services/${serviceNo}`
  const response = await axios.get(qstr);
  return response.data;
}

export const getAccount = async (param): Promise<any[]> => {
  console.log(param.queryKey[1]);
  console.log(param.queryKey[1].searchColumn, param.queryKey[1].searchValue)
  const searchColumn = param.queryKey[1].searchColumn;
  const searchValue = param.queryKey[1].searchValue 
  let qstr = `${import.meta.env.VITE_API_URL}/api/kitms-user/all`
  if(searchColumn!=='' && searchValue!=='') qstr = `${import.meta.env.VITE_API_URL}/api/kitms-user/all?serviceColumn=${searchColumn}&?serviceValue=${searchValue}`
  const response = await axios.get(qstr);
  return response.data;
}
