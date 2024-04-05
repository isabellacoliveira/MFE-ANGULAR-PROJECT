import { Injectable } from '@angular/core';
import { IGetMusicQueryParams } from '../interfaces/Music/IGetMusicQueryParams';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IMusic } from '../interfaces/Music';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  private readonly baseURL = '/Songs';
  constructor(private httpClient: HttpClient) {}

  getEquipamentos(queryParams: IGetMusicQueryParams) {
    return this.httpClient.get<IMusic>(
      this.baseURL,
      // {
      //   params: new HttpParams({ fromObject: queryParams })
      // }
    );
  }
  getHistoricoChamados(numSerie?: string) {
    return this.httpClient.get<IMusic[]>(
      `${this.baseURL}/HistoricoOS/${numSerie}`
    );
  }
  getDownloadPDFFechamento(queryParams: IGetMusicQueryParams) {
    return this.httpClient.get<string>(
      this.baseURL + '/exportarPDFEquipamento',
      // {
      //   params: new HttpParams({ fromObject: queryParams })
      // }
    );
  }
  getDownloadCSVFechamento(queryParams: IGetMusicQueryParams) {
    return this.httpClient.get<string>(
      this.baseURL + '/exportarCSVEquipamento',
      // {
      //   params: new HttpParams({ fromObject: queryParams })
      // }
    );
  }
}
