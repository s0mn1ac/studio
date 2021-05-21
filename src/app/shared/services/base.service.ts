import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterItem } from '../models/filter-item.model';
import { ImageItem } from '../models/image-item.model';

interface ServiceParams {
  url: string;
  params?: any;
  callback: any;
  loading?: boolean;
  error?: boolean;
  headers?: HttpHeaders;
  responseType?: any;
  result: any;
}

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private filtersUrl = 'https://magink.es/custom_media/data/menu-item-filters.json';
  private imagesUrl = 'https://magink.es/custom_media/data/images.json';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public async getAllFilters(): Promise<FilterItem[]> {
    return this.serviceGet({ url: this.filtersUrl, headers: this.httpHeaders, callback: (response: any) => response?.body, result: null });
  }

  public async getAllImages(): Promise<ImageItem[]> {
    return this.serviceGet({ url: this.imagesUrl, headers: this.httpHeaders, callback: (response: any) => response?.body, result: null });
  }

  private serviceGet(serviceParams: ServiceParams): any {
    return this.http.get(serviceParams.url, this.getOptions(serviceParams)).toPromise().then((apiResponse) => serviceParams.callback(apiResponse));
  }

  private getOptions(serviceParams: ServiceParams): any {
    return {
      headers: serviceParams.headers,
      responseType: serviceParams.responseType,
      observe: 'response',
      withCredentials : false
    };
  }

}
