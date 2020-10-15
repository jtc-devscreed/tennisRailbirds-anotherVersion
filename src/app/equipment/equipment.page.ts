import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.page.html',
  styleUrls: ['./equipment.page.scss'],
})
export class EquipmentPage implements OnInit {

  articles = [
    {
      "id": 1,
      "title": "Seek the best Equipments!",
      "desc1": "A tennis match can be played by either one player on each side – a singles match – or two players on each side – a doubles match. The rectangular shaped court has a base line (at the back), service areas (two spaces just over the net in which a successful serve must land in) and two tram lines down either side. A singles match will mean you use the inner side tram line and a doubles match will mean you use the outer tram line.",
      "desc2": "A court can be played on four main surfaces including grass, clay, hard surface and carpet. Each tournament will choose one surface type and stick without throughout. All that is required in terms of equipment is a stringed racket each and a tennis ball.",
      "owner": "Lluis Aragones",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
