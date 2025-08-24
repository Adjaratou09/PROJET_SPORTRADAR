import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-programmes',
  imports: [RouterLink],
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.scss'] // ✅ correction ici
})
export class ProgrammesComponent {}
