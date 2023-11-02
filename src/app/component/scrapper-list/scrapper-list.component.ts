import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ScrapperItemSearchResponse} from "../../domain/scrapper-item-search-response.domain";
import {ScrapperService} from "../../service/scrapper.service";
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {ScrapperSearchRequest} from "../../domain/scrapper-search-request.domain";
import {ScrapperLinkSearchResponse} from "../../domain/scrapper-link-search-response.domain";

@Component({
  selector: 'scrapper-list',
  templateUrl: './scrapper-list.component.html',
  styleUrls: ['./scrapper-list.component.css']
})
export class ScrapperListComponent implements AfterViewInit {

  displayedColumns: string[] = ['url', 'links', 'status'];
  data: ScrapperItemSearchResponse[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  itemSelected: ScrapperLinkSearchResponse[] | null = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | null;

  constructor(private scrapperService: ScrapperService) {
    this.paginator = null;
  }

  ngAfterViewInit() {
    this.reloadData()
  }

  getStatus(element: ScrapperItemSearchResponse) {
    if (element.isDone) {
      if (element.isError) {
        return `Error: ${element.error}`;
      } else {
        return "Done";
      }
    }  else {
      return "Loading";
    }
  }

  onClick(item: ScrapperItemSearchResponse) {
    this.itemSelected = item.linksFound;
  }

  private reloadData() {
    // @ts-ignore
    merge(this.paginator.page)
        .pipe(
            startWith({}),
            switchMap(() => {
              this.isLoadingResults = true;
              const page = new ScrapperSearchRequest(
                  this.paginator?.pageIndex ?? 0,
                  this.paginator?.pageSize ?? 10
              );
              return this.scrapperService.search(page)
                  .pipe(catchError(() => observableOf(null)));
            }),
            map(data => {
              this.isLoadingResults = false;

              if (data === null) {
                return [];
              }

              this.resultsLength = data.count;
              return data.content;
            }),
        )
        .subscribe(data => (this.data = data));
  }
}
