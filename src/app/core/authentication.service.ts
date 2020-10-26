import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
//import { CurrentUser } from '../account/login/current-user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  signOut() {
    throw new Error('Method not implemented.');
  }
//   private currentUserSubject: BehaviorSubject<CurrentUser>;
//   public currentUser: Observable<CurrentUser>;
//   endpoint = "authentication";

//   constructor(@Inject("BASE_API_URL") private baseUrl: string,
//     private httpClient: HttpClient) {
//     this.currentUserSubject = new BehaviorSubject<CurrentUser>(JSON.parse(localStorage.getItem('currentUser')));
//     this.currentUser = this.currentUserSubject.asObservable();
//   }

//   public get currentUserValue(): CurrentUser {
//     return this.currentUserSubject.value;
//   }

//   login<T>(login: any): Observable<void> {
//     return this.httpClient.post<CurrentUser>(`${this.baseUrl}${this.endpoint}/login`, login)
//       .pipe(map(currentUser => {
//         localStorage.setItem('currentUser', JSON.stringify(currentUser));
//         this.currentUserSubject.next(currentUser);
//       }));
//   }

//   signOut() {
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
//   }
}
