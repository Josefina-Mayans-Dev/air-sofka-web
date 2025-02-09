import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, LoginComponent } from 'shared';

@Component({
  selector: 'lib-form-layout',
  imports: [RouterOutlet,HeaderComponent,LoginComponent],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.scss'
})
export class FormLayoutComponent {

}
