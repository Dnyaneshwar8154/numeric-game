import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() numberFired = new EventEmitter<number>()
  randomNumber : any;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.randomNumber = setInterval(()=>{
      this.numberFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }

  onStopGame(){
    clearInterval(this.randomNumber)
  }
}
