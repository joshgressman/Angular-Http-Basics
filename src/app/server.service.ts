import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http'
import 'rxjs/RX';
import { Observable } from 'rxjs/Observable';
@Injectable() //used when injecting a service into a service
export class ServerService {

  constructor(private http: Http){} //http enables angualr to send requests

  //Post servers to firebase server
  // storeServers(servers: any[]){
  //   const headers = new Headers({'Content-Type': 'application/json'});
  //   return this.http.post('https://udemy-ng-http-a4fbf.firebaseio.com/data.json', servers, {headers: headers});
  // }

  //using put instead of POST with Firebase over rides the data
  //Instead of having multiple instances
  storeServers(servers: any[]){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://udemy-ng-http-a4fbf.firebaseio.com/data.json', servers, {headers: headers});
  }

  //Get data from firebase DB
  getServers(){
    return this.http.get('https://udemy-ng-http-a4fbf.firebaseio.com/data.json')
     //map transfroms data into usable data in the application
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    )
    .catch(
      (error: Response) =>{
        console.log(error);
        return Observable.throw(error);
      }
    );
  }

}
