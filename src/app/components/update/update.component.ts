import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  searchID='';

  constructor(private postService:PostService) { }

  form = new FormGroup({
    id: new FormControl('',[Validators.required,Validators.maxLength(3)]),
    userId: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    body: new FormControl('',Validators.required)
  });
  updateData() {
    this.postService.update(
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

  loadData() {
    this.postService.find(this.searchID)
      .subscribe(response=>{
        this.form.patchValue({
          id:response[0].id,
          userId: response[0].userId,
          title: response[0].title,
          body: response[0].body
        })
      })
  }

}
