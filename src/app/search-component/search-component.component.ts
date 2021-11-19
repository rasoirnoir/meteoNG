import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-search-component',
    templateUrl: './search-component.component.html',
    styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

    searchForm = this.formBuilder.group({
        textRecherche: '',
    });


    @Output() ville = '';
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void { }


    onSubmit() {

        window.alert("Coucou je suis à " + this.ville);
    }

}
