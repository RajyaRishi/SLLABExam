import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  tododetails=[
    {"mission":"Thaicom" ,"missionid":"9D1B7E0", "manufacturers":"Orbital ATK"},
    {"mission":"Iridium NEXT" ,"missionid":"F3364BF", "manufacturers":"Orbital ATK"},
    {"mission":"Commercial Resupply Services" ,"missionid":"EE86F74", "manufacturers":"SpaceX"}
  ]
  getlist(){
    return this.tododetails
  }

  constructor() { }
}
