import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostServicesService } from '../../services/post-services.service';

interface Post {
  id: number,
  title: string,
  content: string,
  authorId: number,
  createdAt: string,
}

@Component({
  selector: 'app-post-details',
  imports: [CommonModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  postId:string | null = null;
  post:Post | null = null;

  constructor(private route:ActivatedRoute,private postService:PostServicesService) {
    this.postId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.post = this.postService.getPostById(Number(this.postId));
    if (!this.post) {
      this.post=null;
    }
  }
}
