import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../services/menu.service';
import { Menu } from './../../models/menu';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  public menu: Menu[];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {

    this.menuService.getMenuItems().subscribe(
      result =>{
        this.menu = result.items;
        console.log(this.menu);
      },

      error => {
        console.log(<any>error);
      }

    )
  }

}
