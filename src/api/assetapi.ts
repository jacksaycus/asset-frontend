import {Service, Asset, Account, Profile} from '../types';
import axios from 'axios';
export const getService = async (): Promise<any[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/kitms-services`);
  // const response = await axios.get('http://192.168.0.214:8080/api/kitms-services');
  return response.data;
}
