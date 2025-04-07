import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: "app-landingPage",
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section>
       <div> <app-navbar></app-navbar></div>
        <h1 class="fontRaleWay">SAKURA RAMEN</h1>
        <h2 class="fontRaleWay">BEST RAMEN IN TOWN</h2>
    </section>`,
    styleUrls: ["./landingPage.component.scss"]
})
export class LandingPageComponent {

}