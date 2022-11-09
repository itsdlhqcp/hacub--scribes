import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  // editorConfig: any;
  title: string;
  // content: string; changed for ngx-editor 5
  content: any;
  @Output('postCreated') postCreated = new EventEmitter();

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
  };

  constructor() {}

  ngOnInit() {}

  createPost() {
    // let contentNode = schema.nodeFromJSON(this.content);
    // let html: DocumentFragment = DOMSerializer.fromSchema(
    //   schema
    // ).serializeFragment(contentNode.content);

    firebase
      .firestore()
      .collection('posts')
      .add({
        title: this.title,
        content: this.content,
        owner: firebase.auth().currentUser.uid,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((data) => {
        console.log(data);
        this.postCreated.emit();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
