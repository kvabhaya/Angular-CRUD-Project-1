import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent{

  constructor(private postService:PostService) { }

  form = new FormGroup({
    id: new FormControl('',[Validators.required,Validators.maxLength(3)]),
    userId: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    body: new FormControl('',Validators.required)
    });
  createData() {
    this.postService.create(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('title')?.value,
      this.form.get('body')?.value,
    )
      .subscribe(response=>{
        if(response){
          alert('Saved');
        }
      });
  }
}
