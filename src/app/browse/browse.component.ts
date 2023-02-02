import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
service:CarService;
  constructor(service:CarService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.service.getCars();
    this.service.fullArray();
  }

}
