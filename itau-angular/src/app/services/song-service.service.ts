import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMusic } from '../interfaces/Music';
import { IPostSongBody } from '../interfaces/Music/IPostSongBody';
import { IPostSongResponseData } from '../interfaces/Music/IPostSongResponseData';
import { IPutSongBody } from '../interfaces/Music/IPutSongBody';
import { IPutSongResponseData } from '../interfaces/Music/IPutSongResponseData';
import { IDeleteSongPathParams } from '../interfaces/Music/IDeleteSongPathParams';
import { IDeleteSongResponseData } from '../interfaces/Music/IDeleteSongResponseData';
import { IApiResponse } from '../types/IApiResponse';
@Injectable({
  providedIn: 'root',
})
export class SongServiceService {
  private readonly baseUrl = 'http://localhost:8080/api/songs';

  constructor(private httpClient: HttpClient) {}

  getSongs() {
    return this.httpClient.get<IMusic[]>(this.baseUrl);
  }

  postSongs(body: IPostSongBody) {
    return this.httpClient.post<IApiResponse<IPostSongResponseData>>(
      this.baseUrl,
      body
    );
  }

  putSong(id: number, body: IPutSongBody) {
    return this.httpClient.put<IApiResponse<IPutSongResponseData>>(
      this.baseUrl,
      body
    );
  }

  patchSong(id: number, body: Partial<IMusic>) {
    return this.httpClient.patch<IApiResponse<IMusic>>(
      `${this.baseUrl}/${id}`,
      body
    );
  }

  deleteSong({ id }: IDeleteSongPathParams) {
    return this.httpClient.delete<IApiResponse<IDeleteSongResponseData>>(
      `${this.baseUrl}/${id}`
    );
  }
}
