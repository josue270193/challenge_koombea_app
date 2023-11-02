import {ScrapperItemSearchResponse} from "./scrapper-item-search-response.domain";

export class ScrapperSearchResponse {
  count: number;
  content: ScrapperItemSearchResponse[];

  constructor() {
    this.count = 0;
    this.content = [];
  }

}
