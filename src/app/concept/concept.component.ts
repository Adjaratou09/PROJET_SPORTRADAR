import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
imports:[RouterModule],
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const leftBtn = document.querySelector('.carousel-arrow.left');
    const rightBtn = document.querySelector('.carousel-arrow.right');
    const track = document.querySelector('.carousel-track');

    if (leftBtn && rightBtn && track) {
      leftBtn.addEventListener('click', () => {
        track.scrollBy({ left: -200, behavior: 'smooth' });
      });

      rightBtn.addEventListener('click', () => {
        track.scrollBy({ left: 200, behavior: 'smooth' });
      });
    }
  }
}
