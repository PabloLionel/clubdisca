import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../shared/services/contact.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  frmMsg = this.fb.group({
    message: null
  });

  contact: any;
  constructor(
    private contactServise: ContactService,
    private routerActivated: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.contact = this.contactServise.find(
      {
        uid: this.routerActivated.snapshot.params.uid
      }
    )[0];
  }

  ngOnInit() {
  }
  onSubmit() {
    alert('Enviado! :D');
  }

}
