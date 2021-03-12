import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  myName = "Claudio";
  myAge = 36;
  btnDisabled = true;
  surname = "Poli";
  showMySurname = true;
  products: {name: string, qty: number}[] = [
    {name: 'p1', qty: 2},
    {name: 'p2', qty: 3},
    {name: 'p3', qty: 1}
  ];

  constructor() {
    setTimeout(
      () => this.btnDisabled = false,
      3000
    )
  }

  ngOnInit(): void {
  }

  getMyName() {
    return this.myName;
  }

  makeMeYounger() {
    this.myAge = 20;
  }

  changeMyName(event) {
    this.myName = event.target.value;
  }

  getColor() {
    return this.myAge > 20 ? 'red' : 'green';
  }

}
