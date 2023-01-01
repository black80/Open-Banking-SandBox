/*
 * Copyright 2019-2023 OFIN
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or (at
 * your option) any later version. This program is distributed in the hope that
 * it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/.
 *
 * This project is also available under a separate commercial license. You can
 * contact us at info@ofin.co.
 */

/* import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestCasesComponent } from './test-cases.component';
import { Pipe, PipeTransform } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MarkdownModule } from 'ngx-markdown';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory, LanguageService } from '../../services/language.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CustomizeService } from '../../services/customize.service';
import { PopUpComponent } from './components/play-with-data/pop-up/pop-up.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('TestCasesComponent', () => {
  let component: TestCasesComponent;
  let fixture: ComponentFixture<TestCasesComponent>;

  const CustomizeServiceStub = {
    custom: () => false,
    currentTheme: of({
      globalSettings: {
        logo: '../assets/content/Logo_XS2ASandbox.png',
        footerLogo: '../assets/content/Logo_XS2ASandbox.png',
        cssVariables: {
          colorPrimary: '#054f72',
          colorSecondary: '#eed52f',
          fontFamily: 'Arial, sans-serif',
          headerBG: '#ffffff',
          headerFontColor: '#000000',
          footerBG: '#054f72',
          footerFontColor: '#ffffff',
        },
        facebook: 'https://www.facebook.com/ofin-ksa/',
        linkedIn: 'https://www.linkedin.com/company/ofin-ksa/',
      },
      contactInfo: {
        img: 'Rene.png',
        name: 'René Pongratz',
        position: 'Software Architect & Expert for API Management',
        email: 'psd2@ofin.co',
      },
      officesInfo: [
        {
          city: 'Nürnberg',
          company: 'OFIN KSA',
          addressFirstLine: 'Fürther Str. 246a, Gebäude 32 im 4.OG',
          addressSecondLine: '90429 Nürnberg',
          phone: '+49(0)911 360698-0',
          email: 'psd2@ofin.co',
        },
        {
          city: 'Frankfurt',
          company: 'OFIN KSA',
          addressFirstLine: 'Frankfurter Straße 63 - 69',
          addressSecondLine: '65760 Eschborn',
          email: 'frankfurt@ofin.co',
          facebook: 'https://www.facebook.com/ofin-ksa/',
          linkedIn: 'https://www.linkedin.com/company/ofin-ksa/',
        },
      ],
      tppSettings: {
        tppDefaultNokRedirectUrl: 'https://www.google.com',
        tppDefaultRedirectUrl: 'https://ofin.co/solutions/xs2a-sandbox/',
      },
      supportedLanguages: ['en', 'ua', 'de', 'es'],
      pagesSettings: {
        contactPageSettings: {
          showContactCard: true,
          showQuestionsComponent: true,
        },
        homePageSettings: {
          showQuestionsComponent: true,
          showProductHistory: true,
          showSlider: true,
        },
        navigationBarSettings: {
          allowedNavigationSize: 3,
        },
      },
    }),
    setStyling: () => {},
    normalizeLanguages: () => {
      return CustomizeServiceStub.currentTheme.toPromise();
    },
  };

  const DataServiceStub = {
    setRouterUrl: () => {},
    getRouterUrl: () => '',
  };

  @Pipe({ name: 'translate' })
  class TranslatePipe implements PipeTransform {
    transform(value) {
      const tmp = value.split('.');
      return tmp[1];
    }
  }

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestCasesComponent, PopUpComponent, TranslatePipe],
        imports: [
          RouterTestingModule,
          FormsModule,
          BrowserModule,
          MarkdownModule.forRoot(),
          HttpClientTestingModule,
          TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient],
            },
          }),
        ],
        providers: [
          LanguageService,
          TranslateService,
          {
            provide: DataService,
            useValue: DataServiceStub,
          },
          {
            provide: CustomizeService,
            useValue: CustomizeServiceStub,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should collapse', () => {
    let colHigh = document.getElementById('redirect-content').style.maxHeight;
    component.collapseThis('redirect');
    expect(document.getElementById('redirect-content').style.maxHeight).not.toBe(colHigh);
    component.collapseThis('redirect');
    expect(document.getElementById('redirect-content').style.maxHeight).toBe(colHigh);

    colHigh = document.getElementById('embedded-content').style.maxHeight;
    component.collapseThis('embedded');
    expect(document.getElementById('embedded-content').style.maxHeight).not.toBe(colHigh);
    component.collapseThis('embedded');
    expect(document.getElementById('embedded-content').style.maxHeight).toBe(colHigh);

    colHigh = document.getElementById('account-content').style.maxHeight;
    component.collapseThis('account');
    expect(document.getElementById('account-content').style.maxHeight).not.toBe(colHigh);
    component.collapseThis('account');
    expect(document.getElementById('account-content').style.maxHeight).toBe(colHigh);
  });
});
 */
