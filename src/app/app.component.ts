import { Component } from '@angular/core';
import{FormBuilder, FormGroup ,Validators} from  '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'naber';
  rform:FormGroup;
  post:any;
  description:string;
  name:string='';

  constructor(private fb:FormBuilder){

    this.rform = fb.group({

      'name': [null, Validators.required],
      'description':[null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(500)])],
       'validate':''

       //iste bukadar
   
    })

  }
   addPost(post){
     this.description=post.description();
     this.name=post.name();
   }
}
