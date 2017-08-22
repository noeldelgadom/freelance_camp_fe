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
const proposal_1 = require('./proposal');
let ProposalListComponent = class ProposalListComponent {
    constructor() {
        this.propsalOne = new proposal_1.Proposal(15, 'ABC Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com');
        this.propsalTwo = new proposal_1.Proposal(99, 'XYZ Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com');
        this.propsalThree = new proposal_1.Proposal(300, 'Something Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com');
        this.proposals = [
            this.propsalOne,
            this.propsalTwo,
            this.propsalThree,
        ];
    }
};
ProposalListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proposal-list',
        templateUrl: 'proposal-list.component.html',
        styleUrls: ['proposal-list.component.css']
    }), 
    __metadata('design:paramtypes', [])
], ProposalListComponent);
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map