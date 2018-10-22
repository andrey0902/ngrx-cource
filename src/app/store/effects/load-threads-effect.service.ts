import { Injectable } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { Actions, Effect } from '@ngrx/effects';
import { AllAction, UserThreadsLoadActions } from '../actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

@Injectable()
export class LoadThreadsEffectService {
  @Effect() userThreads$: Observable<Action> = this.actions$
    .ofType(AllAction.LOADUSERTHREADS)
    .pipe(mergeMap(action => this.threadsService.loadUserThreads()
      .pipe(
        map(
          allUserData => new UserThreadsLoadActions(allUserData)),
          catchError(() => of({type: 'LOGIN_FAILED'})))));

  constructor(private actions$: Actions, private threadsService: ThreadsService) {
  }


}
