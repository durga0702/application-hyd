import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
/**
 * service file
 */
export class Service {
 
  /**
   * @constructor
   */
  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * get details
   */
  public getPhotos(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos');
  }
}
