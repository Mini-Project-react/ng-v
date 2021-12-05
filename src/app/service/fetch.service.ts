import { Injectable } from '@angular/core';
import { PROJECTS } from 'data';
@Injectable({
  providedIn: 'root'
})
export class FetchService {
  
  constructor() {
  console.log("dasf");

   }
   getProjectsLive(){
     return PROJECTS.live
   }
   getProjectsFinished(){
    return PROJECTS.finished
  }
}
