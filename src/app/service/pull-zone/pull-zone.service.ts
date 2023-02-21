import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {PullZone} from "../../models/pull-zone.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PullZoneService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPullZones(): Observable<PullZone[]> {
    return this.http.get<PullZone[]>(`${this.baseUrl}/pullzone`);
  }

  createPullZone(pullZone: PullZone): Observable<PullZone> {
    return this.http.post<PullZone>(`${this.baseUrl}/pullzone`, pullZone);
  }

  getPullZone(id: number): Observable<PullZone> {
    return this.http.get<PullZone>(`${this.baseUrl}/pullzone/${id}`);
  }

}
