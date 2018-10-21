import {Action} from '@ngrx/store';
import {AllUserData} from '../../../shared/to/all-user-data';

export enum AllAction {
  LOADUSERTHREADS = '[LOADUSER] threads',
}

export class LoadUserThreadsAction implements Action {
  readonly type = AllAction.LOADUSERTHREADS;
  constructor(public payload: AllUserData) {}
}

export type FullAction = LoadUserThreadsAction;
