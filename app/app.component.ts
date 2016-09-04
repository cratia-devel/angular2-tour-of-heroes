import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
	{ id:11, name: 'Mr. Nice' },
	{ id:12, name: 'Narco' },
	{ id:13, name: 'Bombasto' },
	{ id:14, name: 'Celeritas' },
	{ id:15, name: 'Magenta' },
	{ id:16, name: 'A' },
	{ id:17, name: 'B' },
	{ id:18, name: 'C' },
	{ id:19, name: 'D' },
	{ id:20, name: 'G' }
];

@Component({
    selector: 'my-app',
    template:`
    	<h1>{{title}}</h1>
	<h2>Mis Heroes</h2>
	<ul>
		<li *ngFor="let hero of heroes"
    		(click)="onSelect(hero)">
			<span>{{hero.id}}</span> {{hero.name}}
    		</li>
	</ul>
	<my-hero-detail [hero]="selectedHero"></my-hero-detail>
	`
})
export class AppComponent{
	title =	'Tour of Heroes';
	heroes = HEROES;
	selectedHero: Hero;
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}
