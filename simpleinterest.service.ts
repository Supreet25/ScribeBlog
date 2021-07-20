import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleinterestService {

  calculateSI(p: number, r: number, t:number){
    return p*r*t/(100*12);
  }

  constructor() { }
}
