import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularObservables';

  // Creating Observables Using Constructor...

  // myObservables = new Observable((observer) =>{
  //   console.log('Observable Start');
  //   setTimeout(() =>{observer.next("1")}, 1000)
  //   setTimeout(() =>{observer.next("2")}, 2000)
  //   setTimeout(() =>{observer.next("3")}, 3000)
  //   setTimeout(() =>{observer.next("4")}, 4000)
  //   setTimeout(() =>{observer.next("5")}, 5000)

    // Another way to create observables Using Create method.....

    myObservables = Observable.create((observer)=>{
      setTimeout(() =>{observer.next("A")}, 1000)
      setTimeout(() =>{observer.next("B")}, 2000)
      setTimeout(() =>{observer.next("C")}, 3000)
      setTimeout(() =>{observer.next("D")}, 4000)
      setTimeout(() =>{observer.next("E")}, 5000)
    });

    // observer.next("1");
    // observer.next("2");
    // observer.next("3");
    // observer.next("4");
    // observer.next("5");
    
  });

  ngOnInit(){
    this.myObservables.subscribe((val) =>{
      console.log(val);
      
    });
    
  }
}
