import { Component } from '@angular/core';

@Component({
    selector: 'success-alert',
    templateUrl: './successalert.component.html',
    styleUrls:['./successalert.component.css']
})

export class SuccessAlertComponent {
    constructor() { }

    ngOnInit() {
      console.log('im alive !')
    }
}

