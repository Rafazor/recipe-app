import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {shoppingListReducer} from './shopping-list/store/shopping-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    SharedModule,
    CoreModule,
    CommonModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
