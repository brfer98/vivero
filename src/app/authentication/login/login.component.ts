import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

        loginForm = this.formBuilder.group({
            email: ['yo@gmail.com', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        })

        constructor(private formBuilder : FormBuilder, private router: Router, private loginService:LoginService){ }

        ngOnInit(): void{

        }

        get email(){
            return this.loginForm.controls.email;
        }
        get password(){
            return this.loginForm.controls.password;
        }
        
        //cuando se presione INICIAR SESION pasara esto
        login(){
            if(this.loginForm.valid){
                //llamar al servicio
                this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
                    //next especifica los datos que vamos a recibir
                    next: (userData) => {
                        //aqui ponemos que hacemos al recibir esos datos
                        console.log(userData);
                    },
                    error: (errorData) => {
                        console.log(errorData);
                    },
                    complete: () => {
                        console.info("login completo");
                    }
                });

                //pasamos al siguiente componente
                this.router.navigateByUrl('/');

                //reseteamos el formulario
                this.loginForm.reset();
            }
            else{
                alert("error al ingresar los datos");
                this.loginForm.markAllAsTouched();
            }
        }

}
