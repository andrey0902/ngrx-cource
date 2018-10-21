import { Component, OnInit } from '@angular/core';
import {ThreadsService} from '../services/threads.service';
import {Store} from '@ngrx/store';
import {ApplicationSate} from '../store/application-sate';

@Component({
  selector: 'message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  constructor(private threadsService: ThreadsService,
              private store: Store<ApplicationSate>) {
    store.subscribe(
      state => console.log('message section received', state)
    )
  }
  ngOnInit() {
  }

}
