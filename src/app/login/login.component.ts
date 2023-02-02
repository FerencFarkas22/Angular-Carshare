import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  service: CarService;
  constructor(service:CarService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.service.disableUsers();
  }

}
