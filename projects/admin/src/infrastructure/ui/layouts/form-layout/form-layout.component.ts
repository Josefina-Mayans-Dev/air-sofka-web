import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from 'shared';

@Component({
  selector: 'lib-form-layout',
  imports: [RouterOutlet, LoadingComponent],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.scss'
})
export class FormLayoutComponent {

}
