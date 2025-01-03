import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  nom = "Imana Raoui"
  couleur = "orange"
  ajoutDesactive = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutDesactive = false;
    }, 200
    )
  }
  assignments = [
    {
      nom: "TP R de mr PASQUIER !",
      DateDeRendu: "2020-10-25",
      rendu: true

    }, {
      nom: "TP Angular de mr BUFFA!",
      DateDeRendu: "2022-01-23",
      rendu: true

    }, {
      nom: "Devoir MongoDb de mr MOPOLO!",
      DateDeRendu: "2022-03-23",
      rendu: false
    }
  ]

  getColor(a: any) {
    if (a.rendu)
      return "green";
    else
      return "red"
  }
  onSubbb(event: any) {
    // les even js s appellent les even du dom
    console.log(event)
  }

}
