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
      "title": "Freestyle!",
      "desc1": "Freestyle Stroke also called front call by many is the most used stroke by the swimmers and triathletes. To swim freestyle, your arms should make alternate movements, one arm moves backward from the head, the other arm comes out of the water from the hips towards the head.",
      "desc2": "During the arm movement, the legs do the flutter kick making upward and downward movements with a pointed toe. This is a result-oriented kicking exercise to strengthen the ligament. Make sure the head is in line with the trunk looking straight down, extended arm with your palms turned downward.",
      "owner": "Lluis Aragones",
      "image": ""
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
