"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let DocumentsComponent = class DocumentsComponent {
    constructor() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
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
        ];
    }
};
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    }), 
    __metadata('design:paramtypes', [])
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map