import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import {ThreadsService} from './services/threads.service';
import {StoreModule} from '@ngrx/store';
import {INITIAL_APPLICATION_STORE, reducers} from './store/application-sate';
import { EffectsModule } from '@ngrx/effects';
import { LoadThreadsEffectService } from './store/effects/load-threads-effect.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot(reducers,
      {
        initialState: {
          ...INITIAL_APPLICATION_STORE
        }
      }),
    EffectsModule.forRoot([LoadThreadsEffectService]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
