import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, throwError} from 'rxjs';
import {UserModel} from './user.model';
import {Router} from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<UserModel>(null);

  constructor(private http: HttpClient, private router: Router) {
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8IkbR4A7oFcOA4JTbXbrMmOQ7NdtzJmg',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8IkbR4A7oFcOA4JTbXbrMmOQ7NdtzJmg',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
      catchError(
        this.handleError),
      tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      }));
    ;
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date(new Date().getTime() + (+expiresIn * 1000)));
    const user = new UserModel(email, userId, token, expirationDate);

    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
    }
    return throwError(errorMessage);
  }
}
