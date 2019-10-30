import { Component } from "@angular/core";

@Component({
    selector: 'warning-alert',
    templateUrl:'./warningalert.component.html',
    styleUrls: ['./warningalert.component.css']
})
export class WarningAlertComponent {

    constructor() { }

    ngOnInit() {
      console.log('im alive !')
    }

}