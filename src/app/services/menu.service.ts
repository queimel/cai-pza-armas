import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Menu } from '../models/menu';
import { GLOBAL } from './global';

@Injectable()
export class MenuService {
    public url: string;
    public title: string;
    public slug: string;

    constructor(
        public _http: Http
    ){
        this.url = GLOBAL.urlMenu;
    }

    getMenuItems(){
        return this._http.get(this.url ).map(res => res.json());
    }
}