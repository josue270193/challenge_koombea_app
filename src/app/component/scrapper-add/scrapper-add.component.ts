import {Component} from '@angular/core';
import {ScrapperAddRequest} from "../../domain/scrapper-add-request.domain";
import {ScrapperService} from "../../service/scrapper.service";

@Component({
  selector: 'scrapper-add',
  templateUrl: './scrapper-add.component.html',
  styleUrls: ['./scrapper-add.component.css']
})
export class ScrapperAddComponent {

  scrap: ScrapperAddRequest = new ScrapperAddRequest();

  constructor(private scrapperService: ScrapperService) {

  }

  onAdd() {
    this.scrapperService.add(this.scrap)
        .subscribe();
  }
}
