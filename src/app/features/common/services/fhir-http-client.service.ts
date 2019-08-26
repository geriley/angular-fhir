import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export const baseFhirUrl = new InjectionToken('FHIR API Url');

export abstract class FhirHttpClient {
  public abstract get<T>(resourceType: string, id: string): Observable<T>;
  public abstract search<T>(resourceType: string, queryParams: HttpParams): Observable<T>;
  public abstract create(resourceType: string, body: any): Observable<any>;
  public abstract update(resourceType: string, id: string, body: any): Observable<any>;
  public abstract patch(resourceType: string, id: string, body: any): Observable<any>;
}

@Injectable()
export class FhirHttpClientService extends FhirHttpClient {
  constructor(private httpClient: HttpClient, @Inject(baseFhirUrl)private apiUrl: string) {
    super();
  }

  public get<T>(resourceType: string, id: string): Observable<T> {
    const url = this.formatBaseUrl(resourceType, id);
    return this.httpClient.get<T>(url);
  }

  public search<T>(resourceType: string, queryParams: HttpParams): Observable<T> {
    const url = this.formatBaseUrl(resourceType);
    return this.httpClient.get<T>(url, { params: queryParams });
  }

  public create<T>(resourceType: string, body: T): Observable<T> {
    console.log('create in fhir');
    const url = this.formatBaseUrl(resourceType);
    return this.httpClient.post<T>(url, body);
  }

  public update(resourceType: string, id: string, body: any): Observable<any> {
    const url = this.formatBaseUrl(resourceType, id);
    return this.httpClient.put(url, body);
  }

  public patch(resourceType: string, id: string, body: any): Observable<any> {
    const url = this.formatBaseUrl(resourceType, id);
    return this.httpClient.patch(url, body);
  }

  private formatBaseUrl(resourceType: string, id?: string): string {
    let api = this.apiUrl + '/' + resourceType;
    if (id) api += id;
    return api;
  }

}