
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
styles:[`
h1{
  color: red;
/* styles can be definded here in the app.component.ts file inline but only if you do not need that many. If more are needed define them in theapp.component .css file. */
}
`]
})
export class AppComponent {

}
