import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  list:Array<any>=[];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.findAll()
      .subscribe(response=>{
        console.log(response);
        this.list=response;
        console.log(response);
      })
  }
  delete(id: any) {
    if (confirm('Are you sure you want to delete id: ' + id + '?')) {
      this.postService.delete(id)
        .subscribe({
          next: response => {
            alert("Deleted");
            for (let i = 0; i < this.list.length; i++) {
              if (this.list[i].id == id) {
                this.list.splice(i, 1);
                return;
              }
            }
          }
        });
    }
  }
}
