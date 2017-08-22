import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  propsalOne: Proposal = new Proposal( 15, 'ABC Company', 'http://portfolio.jordanhudgens.com',
    'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
  propsalTwo: Proposal = new Proposal( 99, 'XYZ Company', 'http://portfolio.jordanhudgens.com',
    'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
  propsalThree: Proposal = new Proposal( 300, 'Something Company', 'http://portfolio.jordanhudgens.com',
    'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')

  proposals: Proposal[] = [
    this.propsalOne,
    this.propsalTwo,
    this.propsalThree,
  ]
}
