import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title = 'Home Page';  

    name: string = '';

    updateValue(event: any) {
      this.name = event.target.name;
    }

}
