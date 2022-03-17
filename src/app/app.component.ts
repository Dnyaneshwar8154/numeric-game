import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-odd-even';

  oddNumber: number[] = [];
  evenNumber: number[] = []
  onIntervalNumber(firedNumber:number){
    if(firedNumber % 2 === 0){
      this.evenNumber.push(firedNumber);
    }else{
      this.oddNumber.push(firedNumber);
    }
  }
}
