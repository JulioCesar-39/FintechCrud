import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Menu } from './shared/menu/menu';
import { FooterComponent } from './shared/footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Menu,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent  {

}