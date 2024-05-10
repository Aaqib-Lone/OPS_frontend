import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
    apiUrl="http://localhost:5000"
    getUserData(data:any): Observable<any> {
        return this.http.post<any>(this.apiUrl+"/register",data);
    }

    login(data:any):Observable<any>{
      return this.http.post<any>(this.apiUrl+"/login",data)
    }
}
