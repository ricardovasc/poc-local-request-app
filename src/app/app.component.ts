// src/app/app.component.ts
import { Component } from '@angular/core';
import { UniqueIdService } from './unique-id.service'; // <-- Importe o serviço

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UUID Generator';
  uniqueId: string | null = null; // Para armazenar o UUID recebido
  errorMessage: string | null = null; // Para exibir mensagens de erro

  constructor(private uniqueIdService: UniqueIdService) { } // Injeta o serviço

  getNewUniqueId(): void {
    this.uniqueId = null; // Limpa o UUID anterior
    this.errorMessage = null; // Limpa qualquer mensagem de erro anterior

    this.uniqueIdService.getUniqueId().subscribe({
      next: (uuid: string) => {
        this.uniqueId = uuid; // Atribui o UUID recebido
        console.log('UUID recebido:', uuid);
      },
      error: (error) => {
        console.error('Erro ao buscar UUID:', error);
        this.errorMessage = 'Erro ao conectar com o servidor. Verifique se o backend está rodando em localhost:8080.';
      }
    });
  }
}