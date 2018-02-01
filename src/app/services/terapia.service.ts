import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Terapia } from '../models/terapia';
import { GLOBAL } from './global';

@Injectable()
export class TerapiaService {
    public id: number;
    public url: string;
    public title: string;
    public slug: string;

    constructor(
        public _http: Http
    ){
        this.url = GLOBAL.url;
        this.id = 19;
    }

    getTerapiaItem(){
        return this._http.get(this.url+'pages/'+this.id).map(res => res.json());
    }
}