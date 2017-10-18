import { Component, OnInit } from '@angular/core';
import { TeamService } from './../../team.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from './../../player'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  playersList: Array<Player>;
  constructor(private _teamService: TeamService, private _router: Router) { }

  status = null

  displayTeams() {
    this._teamService.display()
      .then(player => this.playersList = player)
      .catch(err => console.log("there is an error"))
  }
  gameStatus(id, status){
    this.status = status
    console.log(id, status)
    this._teamService.update(status, id, this.displayTeams.bind(this))
  }

  ngOnInit() {
    this.displayTeams()
  }

}
