import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  itensMenu = [
    { label: 'Início', link: '/' },
    { label: 'Clientes', link: '/clientes' },
    { label: 'Contas', link: '/contas' },
    { label: 'Sobre', link: '/sobre' }
  ];

}