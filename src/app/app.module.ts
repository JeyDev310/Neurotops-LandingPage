import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ActiveHeaderComponent } from './shared/active-header/active-header.component';
import { SocialService } from './service/social.service';
import { NgbdModalBasic } from './main/components/modal/modal.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        WelcomeComponent,
        FooterComponent,
        ActiveHeaderComponent,
        NgbdModalBasic
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpModule,
        HttpClientModule
    ],
    providers: [
        SocialService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
