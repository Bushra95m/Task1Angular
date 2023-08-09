import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  value: string = '';

  updateValue(event: any) {
    this.value = event.target.value;
  }
}
