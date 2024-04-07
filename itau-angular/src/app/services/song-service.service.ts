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
import { BASE_URL } from 'src/api-url';
@Injectable({
  providedIn: 'root',
})
export class SongServiceService {
  constructor(private httpClient: HttpClient) {}

  getSongs() {
    return this.httpClient.get<IMusic[]>(BASE_URL);
  }

  postSongs(body: IPostSongBody) {
    return this.httpClient.post<IApiResponse<IPostSongResponseData>>(
      BASE_URL,
      body
    );
  }

  putSong(body: IPutSongBody) {
    return this.httpClient.put<IApiResponse<IPutSongResponseData>>(
      BASE_URL,
      body
    );
  }

  patchSong(id: number, body: Partial<IMusic>) {
    return this.httpClient.patch<IApiResponse<IMusic>>(
      `${BASE_URL}/${id}`,
      body
    );
  }

  deleteSong({ id }: IDeleteSongPathParams) {
    return this.httpClient.delete<IApiResponse<IDeleteSongResponseData>>(
      `${BASE_URL}/${id}`
    );
  }

  getDownloadPDFFavoritos(queryParams: any) {
    return this.httpClient.get<string>(
      `${BASE_URL}/exportarPDFavoritos`
    );
  }
}
