export class Brew {
  public done: boolean = false;
  constructor(public name: string, public brand: string, public details: string, public price: number, public ibu: number, public abv: number, public pints: number) { }
}
