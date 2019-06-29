import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LogisticAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [LogisticAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [LogisticAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogisticAppSharedModule {
  static forRoot() {
    return {
      ngModule: LogisticAppSharedModule
    };
  }
}
