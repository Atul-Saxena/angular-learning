import { Injectable } from '@angular/core';

interface Post {
  id: number,
  title: string,
  content: string,
  authorId: number,
  createdAt: string,
}

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {
  posts = [
    {
      id: 1,
      title: 'Welcome Post',
      content: 'This is the first post',
      authorId: 1,
      createdAt: '2024-06-01T10:00:00Z',
    },
    {
      id: 2,
      title: 'Angular Tips',
      content: 'Useful tips for Angular',
      authorId: 2,
      createdAt: '2024-06-02T14:30:00Z',
    },
  ];

  getPosts() {
    return this.posts;
  }
  getPostById(id: number) {
    return this.posts.find(post => post.id === id) || null;
  }

  createPost(post: Post) {
    const newPost = {
      ...post,
      id: this.posts.length + 1,
      createdAt: new Date().toISOString(),
    };
    this.posts.push(newPost);
    return newPost;
  }
  constructor() { }
}
