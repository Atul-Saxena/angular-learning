import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  selector: 'app-add-post-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-post-form.component.html',
  styleUrl: './add-post-form.component.css'
})
export class AddPostFormComponent {
  createPostForm;

  newPost: Post | null = null

  constructor(private formBuilder: FormBuilder,private postService: PostServicesService) {
    this.createPostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      authorId: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.createPostForm.valid) {
      const { title, content, authorId } = this.createPostForm.value;
      this.newPost = {
        id: 0,
        title: title as string,
        content: content as string,
        authorId: Number(authorId),
        createdAt: new Date().toISOString(),
      };
      console.log('Post created:', this.newPost);
      this.postService.createPost(this.newPost);
    } else {
      console.log('Form is invalid');
    }
  }

}
