import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Hero} 	from '../model/hero';
@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Promise<Hero[]> {
	  //users: User[] = []; // if it's a class member
	  var heroes: Hero[] = []; // if it's a local variable
      let hero1: Hero = { id: 0,  name: 'Zero' };
      let hero2 = new Hero(-1, '');
      hero2.id = 11;
      hero2.name = 'Mr. Nice';
      let hero3 = new Hero(12, 'Narco');
      let hero4: Hero = { id: 13, name: 'Bombasto' };
      let hero5: Hero = { id: 14, name: 'Celeritas' };
      let hero6: Hero = { id: 15, name: 'Magneta' };
      let hero7: Hero = { id: 16, name: 'RubberMan' };
      let hero8: Hero = { id: 17, name: 'Dynama' };
      let hero9: Hero = { id: 18, name: 'Dr IQ' };
      let hero10: Hero = { id: 19, name: 'Magma' }
      let hero11: Hero = { id: 20, name: 'Tornado' };
      heroes.push(hero1);
      heroes.push(hero2);
      heroes.push(hero3);
      heroes.push(hero4);
      heroes.push(hero5);
      heroes.push(hero6);
      heroes.push(hero7);
      heroes.push(hero8);
      heroes.push(hero9);
      heroes.push(hero10);
      heroes.push(hero11);
      // console.log(heroes);
      return Promise.resolve(heroes);
  }

}
