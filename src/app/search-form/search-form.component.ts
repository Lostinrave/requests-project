import { Component, OnInit, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  public searchString : string = '';
  @Output() onFormSubmit : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  searchFormSubmit(){
    this.onFormSubmit.emit(this.searchString)
  }

}
