export class ScrapperSearchRequest {
  pageNumber: number | null;
  pageSize: number | null;

  constructor(pageNumber: number, pageSize: number) {
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
  }

}
