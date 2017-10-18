import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class TeamService {
  player = []
  constructor(private _http: Http) { }

  display() {
    return this._http.get("/get_players").map(data => data.json()).toPromise()
  }

  create(player) {
    console.log(player)
    return this._http.post('/create', player)
      .subscribe(
      (response) => {
        console.log('Successful response from the server');
        // callback()
      },
      (err) => {
        console.log(err);
        // callback()
      })
  }

  update(status, id, callback) {
    console.log(status)
    return this._http.put(`/update/${id}`, {status})
      .subscribe(
      (response) => {
        console.log('Successful response from the server');
        /* code */
        callback();
      },
      (err) => {
        console.log(err);
        callback()
      }
      )
  }



  destroy(id, callback) {
    console.log("in distroy")
    return this._http.put(`/distroy/${id}`, Error)
    .subscribe(
      (response) => {
        console.log('Successful response from the server');
        callback()
      },
      (err) => {
        console.log(err);
        callback()
      }
      )
  }


}
