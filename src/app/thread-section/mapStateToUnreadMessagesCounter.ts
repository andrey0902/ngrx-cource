import { ApplicationSate } from '../store/application-sate';
import { Thread } from '../../../shared/model/thread';
import * as _ from 'lodash';

export function mapStateToUnreadMessagesCounter(state: ApplicationSate): number {

  const currentUserId = state.uiState.userId;
  return _.values<Thread>(state.storeData.threads)
    .reduce((acc, thread) => acc + (thread.participants[currentUserId] || 0), 0);
}
