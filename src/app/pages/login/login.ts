import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  login: string = '';

  senha: string = '';

  botaoDesabilitado: boolean = true;

  validarFormulario(): void {

    if (
      this.login.trim() !== '' &&
      this.senha.trim() !== ''
    ) {

      this.botaoDesabilitado = false;

    } else {

      this.botaoDesabilitado = true;

    }

  }

  fazerLogin(): void {

    if (
      this.login === 'admin' &&
      this.senha === '123'
    ) {

      alert(`Bem-vindo ${this.login}!`);

    } else {

      alert('Dados inválidos');

    }

  }

  teclaDigitada(event: KeyboardEvent): void {

    console.log(`O usuário digitou: ${event.key}`);

  }

}