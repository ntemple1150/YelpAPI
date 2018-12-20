import { Component, OnInit } from '@angular/core';
import { YelpServiceService } from "../services/yelp-service.service";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchPrice = [{view: "Price", value: "price"}]
  apiSearch : FormGroup
  public _result: any[] = []

  constructor(private _fb: FormBuilder, private _yelpUrl: YelpServiceService) { }

  ngOnInit() {
    this.apiSearch = this._fb.group({
      searchPrice : new FormControl(),
      searchWord : new FormControl()
    })
  }

  onGet(apiSearch): void {
      this._yelpUrl.getLocation(apiSearch.value).subscribe((res: any) => {this._result = res.businesses[0], console.log(res)})
  }

}
