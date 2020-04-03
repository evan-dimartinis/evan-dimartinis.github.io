import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuipComponent } from './quip/quip.component';
import { VotingComponent } from './voting/voting.component';

@NgModule({
  declarations: [
    AppComponent,
    QuipComponent,
    VotingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
