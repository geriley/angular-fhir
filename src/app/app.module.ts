import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FhirHttpClient, FhirHttpClientService, baseFhirUrl } from './features/common';
import { VitalSignsIntakeFeatureModule } from './features/observation/vital-signs/intake-feature';
import { ClinicalContextModule } from './features/clinical-context';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    MatSidenavModule,
    MatToolbarModule,
    VitalSignsIntakeFeatureModule,
    ClinicalContextModule,
  ],
  declarations: [AppComponent, HelloComponent],
  providers: [
    { provide: baseFhirUrl, useValue: 'https://r4.smarthealthit.org' },
    { provide: FhirHttpClient, useClass: FhirHttpClientService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
