import { Component } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent {
  showMore: boolean = false;
  showMore2: boolean = false;
  showMore2Button: boolean = false;
  hide: boolean = false;

  showHideMore(): void {
    this.showMore = !this.showMore;
    this.showMore2Button = !this.showMore2Button;
    this.hide = true;
  }
  showHideMore2(): void {
    this.showMore2 = !this.showMore2;
    this.showMore2Button = !this.showMore2Button;
  }
  hideAll(): void {
    this.showMore = false;
    this.showMore2 = false;
    this.showMore2Button = false;
    this.hide = false;
  }

}
