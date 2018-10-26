import { Component, OnInit } from "@angular/core";
import { Result } from "../result";
import { SearchService } from "../search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  results: Result[];
  displayResults: string;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  search(api: string, term: string): void {
    this.searchService.search(api, term).subscribe(data => {
      this.results = data.results;
      this.displayResults = JSON.stringify(this.results);
      console.log(this.displayResults);
    });
  }
}
