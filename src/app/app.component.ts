import { Component } from '@angular/core';
import { StringLenPipe } from './string-len.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app pipe check';
}
