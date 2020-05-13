import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { CustomBannerModuleModule } from './components/custom-banner/custom-banner-module.module';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import { gbLayoutConfig } from './layoutConfig';
import { CustomBannerComponent } from './components/custom-banner/custom-banner.component';

@NgModule({
  declarations: [
    AppComponent, CustomBannerComponent
  ],
  imports: [
    BrowserModule,
    ConfigModule.withConfig(gbLayoutConfig),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://api.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com',
          prefix: '/rest/v2/'
        }
      },
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent
        }
      },
      context: {
        baseSite: ['electronics-spa'],
        currency: ['USD']
      },
    })
  ],
  providers: [],
  entryComponents: [CustomBannerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
