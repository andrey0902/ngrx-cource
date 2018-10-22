import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThreadSummaryVm } from '../../../shared/model/thread-summary.vm';

@Component({
  selector: 'thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  @Input() public threads: ThreadSummaryVm[];
  @Output() public threadSelected: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  public selectThread(threadId: number) {
    this.threadSelected.emit(threadId);
  }
}
