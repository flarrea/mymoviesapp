import { FilmService, SearchType } from './../../services/film.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 
  /**
   * Constructor of our first page
   * @param filmService The movie Service to get data
   */
  constructor(private filmService: FilmService) { }
 
  ngOnInit() { }
 
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.filmService.searchData(this.searchTerm, this.type);
  }
}
