import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  service:CarService;
  constructor(service:CarService, ) {
    this.service = service;
   }
  ngOnInit(): void {
    this.service.logout();
  }
}
