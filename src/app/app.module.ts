import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { MatToolbarModule,MatTabsModule,MatInputModule,MatOptionModule, MatSelectModule, MatCheckbox, MatDatepickerModule, MatCheckboxModule, DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule, MatSliderModule, MatCardModule} from '@angular/material';
import { AddUserComponent } from './project-manager/adduser/add-user/add-user.component';
import { AddProjectComponent } from './project-manager/add-project/add-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectManagerComponent,
    AddUserComponent,
    AddProjectComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
