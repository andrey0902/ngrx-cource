 import { ApplicationSate } from '../store/application-sate';

 export function userNameSelector(state: ApplicationSate): string {

   const currentUserId = state.uiState.userId;
   const currentParticipant = state.storeData.participants[currentUserId];

   if (!currentParticipant) {
     return '';
   }
   return currentParticipant.name;
 }
