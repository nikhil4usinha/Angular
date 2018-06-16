import { Component } from "@angular/core";

@Component({
    selector:'app-greeter',
    templateUrl:'greeter.component.html'
})
export class GreeterComponent{
message : string = 'Dummy message';
onGreetClick(userName:string){
this.message = `Hi ${userName}, new Greet message`;

}
}