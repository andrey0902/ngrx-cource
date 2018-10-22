import { ApplicationSate } from '../store/application-sate';
import { Thread } from '../../../shared/model/thread';
import * as _ from 'lodash';
import { ThreadSummaryVm } from '../../../shared/model/thread-summary.vm';

export function stateToThreadSummariesSelector(state: ApplicationSate) {
  const threads = _.values<Thread>( state.storeData.threads);

  const result: ThreadSummaryVm[] = threads.map(_.partial(mapThreadToThreadSummary, state));

  return result;

}

export function
mapThreadToThreadSummary(state: ApplicationSate, thread: Thread): ThreadSummaryVm {
  const names =  _.keys(thread.participants)
    .map(
      participantId => state.storeData.participants[participantId].name
    );
  const lastMessageId = _.last(thread.messageIds);

  const lastMessage = state.storeData.messages[lastMessageId];

  return {
    id: thread.id,
    participantName: _.join(names, ','),
    lastMessageText: state.storeData.messages[lastMessageId].text,
    timestamp: lastMessage.timestamp
  }
}
