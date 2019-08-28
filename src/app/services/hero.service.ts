import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import {Hero} from '../models/hero';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
