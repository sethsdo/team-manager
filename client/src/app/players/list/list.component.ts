import { Component, OnInit } from '@angular/core';
import { TeamService } from './../../team.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from './../../player'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  playersList: Array<Player>;
  constructor(private _teamService: TeamService, private _router: Router) {
    // this.playersList = this._teamService.player
  }

  destroy(id){
    if(confirm("Do you want to Delete?")) {
      console.log(id)
      this._teamService.destroy(id, this.displayTeams.bind(this))
    }
    
    // this._router.navigate(['players/list']);
  }

  displayTeams(){
    console.log("in display")
    this._teamService.display()
      .then(player => this.playersList = player)
      .catch(err => console.log("there is an error"))
  }

  ngOnInit() {
    this.displayTeams()
    // this.playersList = this._teamService.display()
    console.log(this.playersList)
  }

}
