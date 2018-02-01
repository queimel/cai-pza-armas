import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
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
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    OwlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBC_FEea99_jCDDk6CL0uU1Rpm8z4UKA2A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
