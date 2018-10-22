import { Component, OnInit } from '@angular/core';
import {ThreadsService} from '../services/threads.service';
import {Store} from '@ngrx/store';
import {ApplicationSate} from '../store/application-sate';
import { LoadUserThreadsAction, ThreadSelectedAction, UserThreadsLoadActions } from '../store/actions';
import {map, skip} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as _ from 'lodash';
import {Thread} from '../../../shared/model/thread';
import { ThreadSummaryVm } from '../../../shared/model/thread-summary.vm';
import { mapStateToUnreadMessagesCounter } from './mapStateToUnreadMessagesCounter';
import { stateToThreadSummariesSelector } from './stateToThreadSummariesSelector';
import { userNameSelector } from './userNameSelector';


@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  userName$: Observable<string>;
  unreadMessagesCounter$: Observable<number>;
  threadSummaries$: Observable<ThreadSummaryVm[]>;
  constructor(private store: Store<ApplicationSate>) {

  this.userName$ = this.store
      .select(userNameSelector);

  this.unreadMessagesCounter$ = this.store
      .pipe(
        map(mapStateToUnreadMessagesCounter)
    );

 this.threadSummaries$ = store.select(stateToThreadSummariesSelector);
  }

  ngOnInit() {

    this.store.dispatch(new LoadUserThreadsAction());

  }

  onThreadSelected(selectedThreadId: number) {
    console.log(selectedThreadId);
    this.store.dispatch(new ThreadSelectedAction(selectedThreadId));
  }

}
