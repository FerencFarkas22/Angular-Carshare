import { Injectable } from '@angular/core';
import { LoginModel } from './login-model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { TokenModel } from './token-model';
import { Router } from '@angular/router';
import { Car } from './car';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  public loginmodel: LoginModel = new LoginModel();
  public currentCar: Car = new Car();
  public allCars: Car = new Car();
  http: HttpClient;
  router:Router;
  public cars : Array<Car> = new Array<Car>();

  constructor(http: HttpClient, router:Router) {
    this.http = http;
    this.router = router ;
  }
  public login(){
    this.http.post<TokenModel>('https://weblerapi.kovos.net/auth',
    this.loginmodel)
    .subscribe(t => {

        localStorage.setItem('cartoken', t.token);
        localStorage.setItem('username', this.loginmodel.username);
        localStorage.setItem('password', this.loginmodel.password);
        this.router.navigate(['/browse']);
      

    });

  }
  public logout(){
    localStorage.removeItem('cartoken');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate(['/browse']);
  }

  public isLoggedIn(): boolean{
    return localStorage.getItem('cartoken') != null;
  }

  public disableGuest(){
    if(!this.isLoggedIn()){
      this.router.navigate(['/browse']);
    }
  }
  public disableUsers(){
    if(this.isLoggedIn()){
      this.router.navigate(['/browse']);
    }

  }
  public getCars(){
    this.http.get<Array<Car>>('https://weblerapi.kovos.net/car')
    .subscribe(t => {
      this.cars = t
      console.log(this.cars);
      this.fullArray();
      
    });
  }
  public removeCar(id: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':
       `Bearer ${localStorage.getItem('cartoken')}`
    });
    this.http.delete('https://weblerapi.kovos.net/car/'+ id, 
    {headers:headers})
    .subscribe(t =>  this.getCars());
  }

  public createCar(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':
       `Bearer ${localStorage.getItem('cartoken')}`
    })
    this.http.post('https://weblerapi.kovos.net/car', this.currentCar,
    {headers:headers})
    .subscribe(t => this.router.navigate(['/browse'])),  this.getCars();
  }
  
  public isMySelf(username: string): boolean{
    if(this.isLoggedIn()){
      let currentUser = localStorage.getItem('username');
      return username == currentUser;
    }
    return false;
    }



    
    public fullArray(){       
      this.allCars.allCarClass = this.cars.length 
    }
}      