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
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magenta' },
    { id: 16, name: 'A' },
    { id: 17, name: 'B' },
    { id: 18, name: 'C' },
    { id: 19, name: 'D' },
    { id: 20, name: 'G' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    \t<h1>{{title}}</h1>\n\t<h2>Mis Heroes</h2>\n\t<ul>\n\t\t<li *ngFor=\"let hero of heroes\"\n\t       \t[class.selected]=\"hero === selectedHero\"\t\n    \t\t(click)=\"onSelect(hero)\">\n\t\t\t<span>{{hero.id}}</span> {{hero.name}}\n    \t\t</li>\n\t</ul>\n\t<div *ngIf=\"selectedHero\">\n\t\t<h2>{{selectedHero.name}} details!</h2>\n\t\t<div>\n\t\t\t<label>id: </label>{{selectedHero.id}}\n\t\t</div>\n\t\t<div>\n\t\t\t<label>name: </label>\n\t\t\t<input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\">\n\t\t</div>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map