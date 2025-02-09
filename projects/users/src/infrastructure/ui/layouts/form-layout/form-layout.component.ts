import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, LoginFormComponent } from 'shared';

@Component({
  selector: 'lib-form-layout',
  imports: [RouterOutlet,HeaderComponent,LoginFormComponent],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.scss'
})
export class FormLayoutComponent {

}
