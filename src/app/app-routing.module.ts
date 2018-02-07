import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TerapiasPageComponent } from './components/terapias-page/terapias-page.component';
import { IndexComponent } from './components/index/index.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: IndexComponent },
  { path: 'terapias', component: TerapiasPageComponent },
  { path: 'faq', component: FaqComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

