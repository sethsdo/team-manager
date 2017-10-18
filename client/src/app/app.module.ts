import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './players/list/list.component';
import { AddComponent } from './players/add/add.component';
import { GameComponent } from './status/game/game.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TeamService } from './team.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    StatusComponent,
    ListComponent,
    AddComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
