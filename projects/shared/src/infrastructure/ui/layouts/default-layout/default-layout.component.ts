import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from "../../components/modal/modal.component";
import { LoginComponent } from "../../forms/login/login.component";

@Component({
  selector: 'lib-default-layout',
  imports: [HeaderComponent, RouterOutlet, ModalComponent, LoginComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
