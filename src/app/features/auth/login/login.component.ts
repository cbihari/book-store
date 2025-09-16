import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 hide = true;
 loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(){
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  }


  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // call login API here
    }
  }
}