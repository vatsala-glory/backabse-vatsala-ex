import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private fb: FormBuilder, private searchService: SearchService, private route: Router) { }
  searchForm = this.fb.group({
    search: ['', Validators.required]
  })

  ngOnInit() {}

  /**
   * Search based on the field entered in the search field.and redirects to details page
   */
  searchCity() {
    this.searchService.getDetailsbyCityName(this.searchForm.value.search).subscribe(res => {
      this.route.navigate(['/details/' + res.id])
    },(err) => {
      this.searchForm.get('search').setErrors({invalid: true})
    });
  }
/**
 * Reset the error when changed
 */
  onSearchChange(){
    this.searchForm.get('search').setErrors(null);
  }

}
