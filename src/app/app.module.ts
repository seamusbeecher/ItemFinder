import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Sending Form

//Routing imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { OnlineComponent } from './online/online.component';
import { FinderComponent } from './finder/finder.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { GridComponent } from './grid/grid.component';
import { ProductsService } from './Services/products.service';

//Material
import { MatTableModule } from '@angular/material';
import { GridFinderComponent } from './grid-finder/grid-finder.component';
import { GridOnlineComponent } from './grid-online/grid-online.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  
  MatInputModule, 
  MatSortModule, 
  MatDialogModule, 
  MatButtonModule 
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    OnlineComponent,
    FinderComponent,
    GridComponent,
    GridFinderComponent,
    GridOnlineComponent,
    NavBarComponent,
    SignInComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSortModule, 
    MatDialogModule, 
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'AngularFrontEnd'),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
