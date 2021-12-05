import { Component, OnInit ,Input} from '@angular/core';
import { Project } from 'projectI';
import { FetchService } from 'src/app/service/fetch.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() protitle:string | undefined
  data:Project[]
  constructor(private service:FetchService) { 
    console.log(this.service.getProjectsFinished());
    this.data = this.service.getProjectsFinished()
  }

  ngOnInit(): void {
  }

}
