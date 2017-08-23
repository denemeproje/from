import { Component, OnInit } from '@angular/core';
import  {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  name: string;
  age: number;
  email: string;
  adres: Adres;
  hobi:string[];
  post:posts[];
  isedit:boolean=false;

  constructor(private dataservice:DataService) { 
    console.log('constructor ran...')
  }

  ngOnInit() {
    console.log('ngOnInit ran...')
    this.name="mustafa kartal";
    this.age=22;
    this.email="mustafa@hotmail.com";
    this.adres= {
         street:'istanbul',
         city:'beykoz',
        state:'rüzgarlbahçe mah.' 
    }

    this.hobi=['keyif yapmak','filim izlemek'];
    this.dataservice.getPosts().subscribe((posts)=>{

           //console.log(posts);
           this.post=posts;
    });
    }

 onclick(){

  this.name='abdulmecid kartal';
  this.hobi.push('yeni hobimiz');
  
 }
addhobi(hobimmm){

  this.hobi.unshift(hobimmm);
  return false;
}
deletehobi(hobimmm){
  for(let i=0;i<this.hobi.length;i++)
    {
    if(this.hobi[i]==hobimmm)
      {
      this.hobi.splice(i,1);
        
    }
  }
}
toggleedit(){
  this.isedit = !this.isedit;
}

}

interface Adres
 {
    street:string,
    city:string,
    state:string
}

  interface posts
  {
    id:number,
    title:string,
    body:string,
    userid:number,
  }