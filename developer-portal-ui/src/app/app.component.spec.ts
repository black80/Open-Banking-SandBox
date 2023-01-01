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

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { HttpLoaderFactory, LanguageService } from './services/language.service';
import { DataService } from './services/data.service';
import { CustomizeService } from './services/customize.service';
import { NavComponent } from './components/common/nav/nav.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { of } from 'rxjs';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const DataServiceStub = {
    setRouterUrl: () => {},
    getRouterUrl: () => '',
  };

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

  const LanguageServiceStub = {
    language: 'en',
    currentLanguage: of('en'),
    initializeTranslation: () => {},
    getLang: () => LanguageServiceStub.language,
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
        declarations: [AppComponent, TranslatePipe, NavComponent, FooterComponent, SanitizeHtmlPipe],
        imports: [
          MarkdownModule.forRoot(),
          RouterTestingModule,
          HttpClientTestingModule,
          TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient],
            },
          }),
          NgHttpLoaderModule.forRoot(),
        ],
        providers: [
          MarkdownService,
          TranslateService,
          { provide: DataService, useValue: DataServiceStub },
          { provide: CustomizeService, useValue: CustomizeServiceStub },
          { provide: LanguageService, useValue: LanguageServiceStub },
        ],
      }).compileComponents();
    })
  );

  beforeEach(
    waitForAsync(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
    })
  );

  it(
    'should create',
    waitForAsync(() => {
      expect(comp).toBeTruthy();
    })
  );
});
