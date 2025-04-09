import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Output() pageChange = new EventEmitter<string>();

  setPage(page:string){
    this.pageChange.emit(page)
  }
  logout(){
    this.setPage("out")
  }

}
