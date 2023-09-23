import { API_DOCUMED_GATEWAY_URL } from '../constants';
import { AxiosClientFactory } from './factory';

export const documedAxiosClient = AxiosClientFactory.createClient(API_DOCUMED_GATEWAY_URL, true);
