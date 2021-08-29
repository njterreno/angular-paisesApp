import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";

import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  
  constructor(private activatedRout: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.activatedRout.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorAlpha(id))
      )
      .subscribe(pais => this.pais = pais);

      // this.activatedRout.params
      // .subscribe(({id}) => {
      //   console.log(id)

      //   this.paisService.getPaisPorAlpha(id)
      //   .suscribe(pais => {
      //     console.log(pais);
      //   })
      // });
  }
}
