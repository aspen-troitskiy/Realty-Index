import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationTabsComponent } from './navigation/navigation-tabs/navigation-tabs.component';
import {ServerCommunicationService} from "./server-communication.service";
import { RealtyListComponent } from './realty-list/realty-list.component';
import { RealtyItemComponent } from './realty-list/realty-item/realty-item.component';
import {realtyReducer} from "./realty-list/store/realty.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ParamsRealtyEffect} from "./realty-list/store/realty.effects";
import { RealtyDetailComponent } from './realty-detail/realty-detail.component';
import { KeysPipe } from './keys.pipe';
import {AgmCoreModule} from "@agm/core";
import {googleMapKey} from "../../googleMapKey";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationTabsComponent,
    RealtyListComponent,
    RealtyItemComponent,
    RealtyDetailComponent,
    KeysPipe
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    // DropdownDirective,
    // NoRecipeSelectedComponent,
    // RecipeEditComponent,
    // ReversePipe,
    // SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([ParamsRealtyEffect]),
    StoreModule.forRoot({ realtyReducer: realtyReducer }),
    AgmCoreModule.forRoot({
      apiKey: googleMapKey
    })
    // RoutingModule,
    // ReactiveFormsModule
  ],
  providers: [ServerCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
