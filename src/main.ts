import 'zone.js/dist/zone';
import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{message()}}</h1>
    <button (click)="name.set('WORLD')">
        Change text to WORLD
    </button>
    <br/>
    <button (click)="greeting.set('Bonjour')">
        Change greeting to Bonjour
    </button>
    <button (click)="greeting.set('Welcome')">
        Change greeting to Welcome
    </button>
  `,
})
export class App {
  greeting = signal('Hellox');
  name = signal('Angular');

  message = computed(() => `${this.greeting()} ${this.name()}!`);

  constructor() {
    effect(() => console.log('Message changed to ' + this.message()));
  }
}

bootstrapApplication(App);
