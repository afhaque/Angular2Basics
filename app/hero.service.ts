// Loads mock heroes from file
import {HEROES} from './mock-heroes';

// Loads necessary tools for creating injectable services
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
    // getHeroes Method
    getHeroes() {
        return Promise.resolve(HEROES);
    }
}