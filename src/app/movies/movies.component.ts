import { Component, OnInit } from '@angular/core';

// Import class Movies here
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  // you can create object Movies here
  movies : Movies = {
    id : 1,
    name : 'Hoai Nam',
    releaseYear : 1962
  }

  constructor() { }

  ngOnInit() {
    // This function is called after "contructor"
  }

}
