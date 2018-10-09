import config from '@/api/config';
import CRM from '@/client/api/crm';
import store from '@/store';

const client = new CRM(config.endpoints.auth || 'https://api.crm.latest.rustbucket.io', store.getters['auth/jwt']);

export default client;
