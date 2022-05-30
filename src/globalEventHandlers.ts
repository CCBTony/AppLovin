import { Event } from '@/meta';
import { appModel } from '@/store';

const { eventHub } = appModel;

const loginStatusCheck = () => {
  console.log('call loginStatusCheck');
};

const initHandlers = () => {
  eventHub.on(Event.AXIOS_RESPONSE_ERROR, loginStatusCheck);
};

export default initHandlers;
