import {INITIAL_UI_STATE, UiState} from './ui-state';
import {INITIAL_STORE_DATA, StoreData} from './store-data';
import {ActionReducerMap} from '@ngrx/store';

import {uiStateReducer} from '../../reducer/ui-state.reducer';
import {storeDataReducer} from '../../reducer/core.reducer';

export interface ApplicationSate {
    uiState: UiState;
    storeData: StoreData;
}

export const reducers: ActionReducerMap<ApplicationSate> = {
  storeData: storeDataReducer,
  uiState: uiStateReducer
};

export const INITIAL_APPLICATION_STORE: ApplicationSate = {

    uiState: INITIAL_UI_STATE,
    storeData: INITIAL_STORE_DATA

};
