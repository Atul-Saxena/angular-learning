import { Component } from '@angular/core';
import { PostServicesService } from '../../services/post-services.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Post {
  id: number,
  title: string,
  content: string,
  authorId: number,
  createdAt: string,
}

@Component({
  selector: 'app-post-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  posts: Post[] | null = [];
  constructor(private postService: PostServicesService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
