import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postMessages: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.postMessages = this.dataService.getPost();
  }

}
