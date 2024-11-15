import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';
import { UserService } from './user.service';

// Define the routes here
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'products/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'edit-product/:id', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatPaginatorModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes) // Import the routes here
  ],
  providers: [AuthGuard, AuthService, ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
