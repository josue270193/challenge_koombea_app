import {ScrapperLinkSearchResponse} from "./scrapper-link-search-response.domain";

export class ScrapperItemSearchResponse {
  id: string | null;
  url: string | null;
  linksFound: ScrapperLinkSearchResponse[] | null;
  isDone: boolean | null;
  isError: boolean | null;
  error: string | null;

  constructor() {
    this.id = null;
    this.url = null;
    this.linksFound = null;
    this.isDone = null;
    this.isError = null;
    this.error = null;
  }

}
