import {Injectable} from '@angular/core';
import {Hero} from '../models/hero';
import {HEROES} from '../models/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() {
  }
}
