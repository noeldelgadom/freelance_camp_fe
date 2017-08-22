import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "My first doc",
      description: "some description",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "https://i.pinimg.com/736x/5f/45/64/5f4564f571798e4dfd78312cdab3b85e--surf-board-surfs.jpg"
    },
    {
      title: "My second doc",
      description: "some description",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "https://i.pinimg.com/736x/5f/45/64/5f4564f571798e4dfd78312cdab3b85e--surf-board-surfs.jpg"
    },
    {
      title: "My last doc",
      description: "some description",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "https://i.pinimg.com/736x/5f/45/64/5f4564f571798e4dfd78312cdab3b85e--surf-board-surfs.jpg"
    },
  ]
}
