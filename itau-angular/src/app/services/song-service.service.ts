import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMusic } from '../interfaces/Music';
import { IApiResponse } from '../types/IApiResponse';
import { IMusicResponse } from '../interfaces/Music/IMusicResponse';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  private readonly BASE_URL = 'http://localhost:3003/musicas'; // Altere para sua URL base

  constructor(private httpClient: HttpClient) {}

  getSongs() {
    return this.httpClient.get<IMusic[]>(this.BASE_URL);
}

  getHistoricoChamados(numSerie?: string) {
    return this.httpClient.get<IMusic[]>(`${this.BASE_URL}/HistoricoOS/${numSerie}`);
  }

  getDownloadPDFFechamento(queryParams: any) {
    // Você precisa verificar como enviar os queryParams para sua API
    return this.httpClient.get<string>(`${this.BASE_URL}/exportarPDFEquipamento`);
  }

  getDownloadCSVFechamento(queryParams: any) {
    // Você precisa verificar como enviar os queryParams para sua API
    return this.httpClient.get<string>(`${this.BASE_URL}/exportarCSVEquipamento`);
  }
}
