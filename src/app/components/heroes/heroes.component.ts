import {Component, OnInit} from '@angular/core';
import {Hero} from '../../models/hero';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
