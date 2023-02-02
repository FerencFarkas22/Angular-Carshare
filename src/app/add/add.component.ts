import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  service: CarService
  constructor(service:CarService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.service.disableGuest();
  }
}
