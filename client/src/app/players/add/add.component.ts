import { Component, OnInit } from '@angular/core';
import { Player } from './../../player'
import { TeamService } from './../../team.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  constructor(private _teamService: TeamService, private _router: Router) { }
  player = {
    player: "",
    position: ""
  }

  onSubmit(){
    console.log(this.player)
    this._teamService.create(this.player)
    this._router.navigate(['players/list']);
  }


  ngOnInit() {
    console.log(this._teamService.display())
  }

}
