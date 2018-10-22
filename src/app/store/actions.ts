import {Action} from '@ngrx/store';
import {AllUserData} from '../../../shared/to/all-user-data';

export enum AllAction {
  USERTHREADSLOADED = '[USETTHREAD] loaded threads',
  LOADUSERTHREADS = '[LOADEUSERTHREAD] load data threads',
  THREADSELECTED = '[THREADSELECTED] select the thread'
}

export class LoadUserThreadsAction implements Action {
  readonly type = AllAction.LOADUSERTHREADS;

  constructor(public payload?: any) {}
}

export class UserThreadsLoadActions implements Action {
  readonly type = AllAction.USERTHREADSLOADED;
  constructor(public payload: AllUserData) {}
}

export class ThreadSelectedAction implements Action {
  readonly type = AllAction.THREADSELECTED;
  constructor(public payload: number) {}
}

export type FullAction = UserThreadsLoadActions | LoadUserThreadsAction | ThreadSelectedAction;
