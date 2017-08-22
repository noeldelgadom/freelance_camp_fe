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
const router_1 = require('@angular/router');
const homepage_component_1 = require('./homepage/homepage.component');
const documents_component_1 = require('./documents/documents.component');
const proposal_list_component_1 = require('./proposal/proposal-list.component');
const proposal_new_component_1 = require('./proposal/proposal-new.component');
const proposal_show_component_1 = require('./proposal/proposal-show.component');
const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: homepage_component_1.HomepageComponent },
    { path: 'documents', component: documents_component_1.DocumentsComponent },
    { path: 'proposals', component: proposal_list_component_1.ProposalListComponent },
    { path: 'proposals/new', component: proposal_new_component_1.ProposalNewComponent },
    { path: 'proposal/:id', component: proposal_show_component_1.ProposalShowComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }), 
    __metadata('design:paramtypes', [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map