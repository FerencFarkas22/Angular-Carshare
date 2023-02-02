import { Component } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-share';
  service:CarService;
  constructor(service:CarService){
    this.service = service;
  }
  ngOnInit():void{
    this.service.disableUsers();
  }
}