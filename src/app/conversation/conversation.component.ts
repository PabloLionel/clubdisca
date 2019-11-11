import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  contact: any;
  constructor(
    private contactServise: ContactService,
    private routerActivated: ActivatedRoute
  ) {
    this.contact = this.contactServise.find(
      {
        uid: this.routerActivated.snapshot.params.uid
      }
    )[0];
  }

  ngOnInit() {
  }

}
