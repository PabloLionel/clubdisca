import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-story',
  templateUrl: './post-story.component.html',
  styleUrls: ['./post-story.component.scss']
})
export class PostStoryComponent implements OnInit {

  frmPost = this.fb.group({
    post: ['']
  });

  get post(): any {
    return this.frmPost.get('post');
  }

  set post(post: any) {
    this.frmPost.get('post').setValue(post);
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    console.log('ESCUCHANDO SUBMIT');
  }

  textareaAutoSize(event: Event) {
    (event.target as HTMLElement).style.height = '0px';
    (event.target as HTMLElement).style.height = ((event.target as HTMLElement).scrollHeight) + 'px';
  }

}
