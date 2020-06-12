import { Component, OnInit, Inject, ViewEncapsulation, Renderer2,HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

    showFlag: boolean = true;
    activeShowFlag: boolean = false;

    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor( private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
    ngOnInit() {
        this.showFlag = true;
        this.activeShowFlag = false;
        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }else{
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();

            this.renderer.listen('window', 'scroll', (event) => {
                const number = window.scrollY;
                console.log('this is number', number);
                var _location = this.location.path();
                _location = _location.split('/')[2];
                    console.log('this is number', number);
                if (number > 500 || window.pageYOffset > 500) {
                    this.showFlag = false;
                }else{
                    this.showFlag = true;
                }

                if (number > 600 || window.pageYOffset > 600) {
                    this.activeShowFlag = true;
                }else{
                    this.activeShowFlag = false;
                }

                if (number > 150 || window.pageYOffset > 150) {
                    // navbar.classList.remove('navbar-transparent');
                } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                    // remove logic
                    // navbar.classList.add('navbar-transparent');
                }
            });
        });
    }
    // @HostListener("window:scroll", ['$event'])
    // onScroll($event) {

    //    let parent = document.getElementById ("welcome");
    //    console.log('this is parent', parent.scrollTop);
    // }
}
