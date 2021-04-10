import { Component, OnInit } from '@angular/core';
import { IMission } from "../models/mission";
import { SpacexService } from "../network/spacexapi.service";

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {

  missions: IMission[]
  yearsList: number[]
  page: number
  pageSize: number
   closeResult = '';
  constructor(private spaceApi: SpacexService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getMissions();
    console.log(this.missions)
    this.page =1
    this.pageSize =6
  }
 getMissions() : void {
    this.spaceApi.getMissions()
    .subscribe(missions => {
      this.missions = missions
      this.yearsList = [...new Set(missions.map(data=>(data.launch_year)))]
      console.log(this.yearsList)
    })
  }
  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
