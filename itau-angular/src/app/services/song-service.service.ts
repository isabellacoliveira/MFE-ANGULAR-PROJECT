import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMusic } from '../interfaces/Music';
import { IApiResponse } from '../types/IApiResponse';
import { IMusicResponse } from '../interfaces/Music/IMusicResponse';
import { IPostSongBody } from '../interfaces/Music/IPostSongBody';
import { IPostSongResponseData } from '../interfaces/Music/IPostSongResponseData';
import { IPutSongBody } from '../interfaces/Music/IPutSongBody';
import { IPutSongResponseData } from '../interfaces/Music/IPutSongResponseData';
import { IDeleteSongPathParams } from '../interfaces/Music/IDeleteSongPathParams';
import { IDeleteSongResponseData } from '../interfaces/Music/IDeleteSongResponseData';

@Injectable({
  providedIn: 'root',
})
export class SongServiceService {
  private readonly BASE_URL = 'http://localhost:3003/musicas'; // Altere para sua URL base

  constructor(private httpClient: HttpClient) {}

  getSongs() {
    return this.httpClient.get<IMusic[]>(this.BASE_URL);
  }

  postSongs(body: IPostSongBody) {
    return this.httpClient.post<IApiResponse<IPostSongResponseData>>(
      this.BASE_URL,
      body
    );
  }

  putSong(body: IPutSongBody) {
    return this.httpClient.put<IApiResponse<IPutSongResponseData>>(
      this.BASE_URL,
      body
    );
  }

  deleteSong({ id }: IDeleteSongPathParams) {
    return this.httpClient.delete<IApiResponse<IDeleteSongResponseData>>(
      `${this.BASE_URL}/${id}`
    );
  }

  getDownloadPDFFechamento(queryParams: any) {
    // Você precisa verificar como enviar os queryParams para sua API
    return this.httpClient.get<string>(
      `${this.BASE_URL}/exportarPDFEquipamento`
    );
  }

  getDownloadCSVFechamento(queryParams: any) {
    // Você precisa verificar como enviar os queryParams para sua API
    return this.httpClient.get<string>(
      `${this.BASE_URL}/exportarCSVEquipamento`
    );
  }
}
