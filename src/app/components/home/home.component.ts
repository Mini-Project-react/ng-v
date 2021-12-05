import { Component, OnInit,Input} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @Input() text:string | undefined
  

class="rounded-sm  px-2 py-1  border-red-500 links"  
constructor() { 
    
    
  }

  ngOnInit(): void {
  }

}
