import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

	private apiUrl = 'http://localhost/vivero/prueba/apiLogin.php'; 

	constructor(private http: HttpClient) { }

	login(credentials:LoginRequest):Observable<any>{
		//aqui deberia hacerse la peticion http
		return this.http.get<any>(`${this.apiUrl}?tabla=usuarios`);
	}

}
