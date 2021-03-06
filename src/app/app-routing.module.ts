import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./components/details/details.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const appRoutes : Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'search/:game-search',
        component: HomeComponent
    },
    {
        path:'details/:game-id',
        component: DetailsComponent
    },
    { path: '**', component: PageNotFoundComponent },
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}