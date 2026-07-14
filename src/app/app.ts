import { Component } from '@angular/core';
import { CursorGlow } from './shared/effects/cursor-glow';
import { Lightbox } from './shared/lightbox/lightbox';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    CursorGlow,
    Lightbox,
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Education,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
})
export class App {}
