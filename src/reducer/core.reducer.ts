import {ApplicationSate} from '../app/store/application-sate';
import {AllAction, FullAction, LoadUserThreadsAction} from '../app/store/actions';
import {INITIAL_STORE_DATA, StoreData} from '../app/store/store-data';
import * as _ from 'lodash';


export function storeDataReducer(state: StoreData, action: FullAction): StoreData {
  switch (action.type) {
    case AllAction.LOADUSERTHREADS:
      return handlingLoadUserThreads(state, action);

    default:
      return state;
  }
}


function handlingLoadUserThreads(state: StoreData, action: LoadUserThreadsAction): StoreData {
  console.log('storedata', state);
  const data = action.payload;
  const storeData: StoreData = {
    participants: _.keyBy(data.participants, 'id'),
    messages:  _.keyBy(data.messages, 'id'),
    threads:  _.keyBy(data.threads, 'id'),
  }
  const state1 = state;
  return {
    ...state,
    ...storeData
  };
}
