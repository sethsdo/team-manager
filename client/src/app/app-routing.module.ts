import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { AddComponent } from './players/add/add.component';
import { StatusComponent } from './status/status.component';
import { GameComponent } from './status/game/game.component';

const routes: Routes = [
  { path: '', redirectTo: 'players/list', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent, children:[
    { path: 'list', pathMatch: 'full', component: ListComponent },
    { path: 'addplayer', pathMatch: 'full', component: AddComponent },
  ] },
  { path: 'status', component: StatusComponent, children:[
    { path: 'game', pathMatch: 'full', component: GameComponent },
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
