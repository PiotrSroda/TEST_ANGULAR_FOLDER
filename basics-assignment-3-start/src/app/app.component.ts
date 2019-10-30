import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsDisplayed = false;
  clicks = []

  onDisplayClick() {    
    this.clicks.push(new Date())
    this.detailsDisplayed = !this.detailsDisplayed
  }

  changeBckColor(x) {
    if (x>= 4) {
      return 'blue'
    }
    else {
      return 'transparent'
    }
  }
}


