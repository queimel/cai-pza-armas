import { Component, OnInit } from '@angular/core';
import { TerapiaService } from './../../services/terapia.service';
import { Terapia } from '../../models/terapia';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-terapias',
  templateUrl: './terapias.component.html',
  styleUrls: ['./terapias.component.scss'],
  providers: [TerapiaService]
})
export class TerapiasComponent implements OnInit {

  public terapias: Terapia[];
  public numeroTerapias: number;
  constructor(
    private terapiaService: TerapiaService
  ) { }

  ngOnInit() {
    this.terapiaService.getTerapiaItem().subscribe(
      result =>{
        this.terapias = result['acf'].terapia_o_tratamiento;
        this.numeroTerapias = this.terapias.length;
      },

      error => {
        console.log(<any>error);
      }
    )
  }

}
