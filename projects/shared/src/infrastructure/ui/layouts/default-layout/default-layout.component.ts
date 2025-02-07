import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "../../containers/login/login.component";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'lib-default-layout',
  imports: [HeaderComponent, RouterOutlet, LoginComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}