import { TerapiaService } from './services/terapia.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { PreHeaderComponent } from './components/pre-header/pre-header.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderComponent } from './components/slider/slider.component';


import { OwlModule } from 'ngx-owl-carousel';
import { TerapiasComponent } from './components/terapias/terapias.component';
import { TerapiasItemComponent } from './components/terapias-item/terapias-item.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { AgmCoreModule } from '@agm/core';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { IndexComponent } from './components/index/index.component';
import { TerapiasPageComponent } from './components/terapias-page/terapias-page.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    PreHeaderComponent,
    HeaderComponent,
    MenuComponent,
    SliderComponent,
    TerapiasComponent,
    TerapiasItemComponent,
    UbicacionComponent,
    BasicInfoComponent,
    TruncatePipe,
    SafeHtmlPipe,
    IndexComponent,
    TerapiasPageComponent,
    TabsComponent,
    TabComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OwlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBC_FEea99_jCDDk6CL0uU1Rpm8z4UKA2A'
    }),
    routing,
    MatProgressSpinnerModule
  ],
  providers: [appRoutingProviders, TerapiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
