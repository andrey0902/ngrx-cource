import { Component, OnInit } from '@angular/core';
import {ThreadsService} from '../services/threads.service';
import {Store} from '@ngrx/store';
import {ApplicationSate} from '../store/application-sate';
import {LoadUserThreadsAction} from '../store/actions';
import {map, skip} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as _ from 'lodash';
import {Thread} from '../../../shared/model/thread';


@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {
  userName$: Observable<string>;
  unreadMessagesCounter$: Observable<number>;
  constructor(private threadsService: ThreadsService,
              private store: Store<ApplicationSate>) {

  this.userName$ = this.store
      .pipe(skip(1),
        map(this.mapStateToUserName)
    );

  this.unreadMessagesCounter$ = this.store
      .pipe(skip(1),
        map(this.mapStateToUnreadMessagesCounter)
    );
  }

  mapStateToUserName(state: ApplicationSate): string {
    return state.storeData.participants[
      state.uiState.userId
      ].name;
  }

  mapStateToUnreadMessagesCounter(state: ApplicationSate): number {

    const currentUserId = state.uiState.userId;
    return _.values<Thread>(state.storeData.threads)
      .reduce((acc, thread) => acc + thread.participants[currentUserId], 0);
  }
  ngOnInit() {

        this.threadsService.loadUserThreads()
          .subscribe(value => {
            console.log(value);
            this.store.dispatch(new LoadUserThreadsAction(value));
          });


  }

}
