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
  let qstr = `${import.meta.env.VITE_API_URL}/kitms-user/all`
  if(searchColumn!=='' && searchValue!=='') qstr = `${import.meta.env.VITE_API_URL}/kitms-user/all?serviceColumn=${searchColumn}&?serviceValue=${searchValue}`
  const response = await axios.get(qstr);
  // console.log(response.data)
  return response.data;
}

export const getAccountDetail = async (param): Promise<any[]> => {
  console.log(param.queryKey[1]);
  console.log(param.queryKey[1].searchValue)
    const searchValue = param.queryKey[1].searchValue 
  // let qstr = `${import.meta.env.VITE_API_URL}/kitms-user/${searchValue}`
  let qstr = `${import.meta.env.VITE_API_URL}/kitms-user/11`
  const response = await axios.get(qstr);
  // console.log(response.data)
  return response.data;
}

export const addAccount = async (account: any): Promise<any[]> => {
  const method = account.get('mode')
  console.log('addAccount...',method)
  const response = await axios( {
    method: method,
    url: `${import.meta.env.VITE_API_URL}/kitms-user`,
    headers: { 'Content-Type': 'multipart/form-data' },
    data: account
  }
  );
  return response.data;
}
export const delAccount = async (account: any): Promise<any[]> => {
  const response = await axios( {
    method: 'DELETE',
    url: `${import.meta.env.VITE_API_URL}/kitms-user`,
    headers: { 'Content-Type': 'multipart/form-data' },
    data: account
  }
  );
  return response.data;
}
export const getBranch = async (): Promise<any[]> => {
  console.log('.........getbranch')
  let qstr = `${import.meta.env.VITE_API_URL}/common/getKitmsCommonBranchList`
  const response = await axios.get(qstr);
  // console.log(response.data)
  return response.data;
}