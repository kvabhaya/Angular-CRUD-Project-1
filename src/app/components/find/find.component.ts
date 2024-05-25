import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {
  searchID='';
  list:Array<any>=[];

  constructor(private postService:PostService) { }


  loadData() {
    this.postService.find(this.searchID)
      .subscribe(response=>{
        console.log(response);
        this.list=response;
        console.log(this.list);
      })
  }
}
