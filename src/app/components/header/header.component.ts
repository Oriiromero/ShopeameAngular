import { Component } from '@angular/core';
import { ImageI } from 'src/app/shared/interfaces/image.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  image: ImageI = {
    src:"/assets/images/letter-s.png",
    alt: "logo"
  }

}
