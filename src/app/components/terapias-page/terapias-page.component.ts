import { Component, OnInit } from '@angular/core';
import { TerapiaService } from './../../services/terapia.service';
import { Terapia } from '../../models/terapia';

@Component({
  selector: 'app-terapias-page',
  templateUrl: './terapias-page.component.html',
  styleUrls: ['./terapias-page.component.scss']
})
export class TerapiasPageComponent implements OnInit {
  public terapias: Terapia[];

  isLoading = false;

  constructor(
    private terapiaService: TerapiaService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.terapiaService.getTerapiaItem().subscribe(
      result => {
        this.terapias = result['acf'].terapia_o_tratamiento;
        this.isLoading = false;
      });

  }

}
