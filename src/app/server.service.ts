import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable() //used when injecting a service into a service
export class ServerService {

  constructor(private http: Http){} //http enables angualr to send requests

  storeServers(servers: any[]){
    return this.http.post('https://udemy-ng-http-a4fbf.firebaseio.com/data.json', servers);
  }
}
