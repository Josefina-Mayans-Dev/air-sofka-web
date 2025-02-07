import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoadingComponent } from 'shared';

@Component({
  selector: 'lib-admin-layout',
  imports: [RouterOutlet, RouterLink, LoadingComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
