import {ApplicationSate} from '../app/store/application-sate';
import {AllAction, FullAction} from '../app/store/actions';
import {INITIAL_UI_STATE, UiState} from '../app/store/ui-state';

export function uiStateReducer(state: UiState,
                               action: FullAction): UiState {
  switch (action.type) {
    case AllAction.THREADSELECTED:
      return {
        ...state,
        currentThreadId: action.payload
      };
    default:
      return state;
  }
}
