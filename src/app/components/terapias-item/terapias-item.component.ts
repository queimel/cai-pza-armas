import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-terapias-item',
  templateUrl: './terapias-item.component.html',
  styleUrls: ['./terapias-item.component.scss']
})
export class TerapiasItemComponent implements OnInit {
  @Input() titulo: string;
  @Input() imagen: string;
  @Input() texto: string;

  constructor() { }
  
  ngOnInit() {


  }

}
