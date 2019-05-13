import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postMessages: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPost()
    .subscribe((posts: any[]) => {
      this.postMessages = posts;
    });
  }

}
