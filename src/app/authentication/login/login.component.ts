import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
    
    public myForm!:FormGroup;

    constructor(private fb:FormBuilder){}

    ngOnInit(): void {
        this.myForm = this.createMyForm();
    }

    private createMyForm():FormGroup{
        return this.fb.group({
            usuario: [],
            password: []
        });
    }

    public submitFormulario(){
        if(this.myForm.invalid){
            return
        }

        alert("se va a envair el fomrulario");
        console.log(this.myForm.value);
    }


}
