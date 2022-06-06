import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = new Post(1, 'title', 'contenu');

  submitted = false;

  onSubmit() { 
    console.log("Submitted");
    this.submitted = true; 
  }

  newPost() {
    this.model = new Post(42, 'new', 'new');
  }
}
