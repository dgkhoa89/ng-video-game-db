import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes : Routes = [
    // {
    //     path:''
    // }
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[]
})
export class AppRoutingModule{

}