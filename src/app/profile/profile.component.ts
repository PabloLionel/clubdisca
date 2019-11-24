import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pathUrl = 'url(/assets/images/avatar-main-1024x576.png)';
  input = document.createElement('input');
  reader = new FileReader();
  navLinks = [
    { path: 'publications', label: 'Mis historias' },
    { path: 'editprofile', label: 'Mi Perfil' },
  ];

  constructor() { }

  ngOnInit() {
    this.reader.onload = () => {
      const IMG_URL = this.reader.result;
      this.pathUrl = `url(${IMG_URL})`;
      // send(IMG_URL.split('base64,')[1]); <-- ejemplo de envio en base64
    };
    this.input.addEventListener('change', (e: Event) => {
      Array.from(this.input.files)
        .forEach((file: File) => {
          const mimeType = file.type;
          if (mimeType.match(/image\/*/) == null) {
              // this.message = 'Only images are supported.'; // cambiar: mostrar error al usuario
              return;
          }
          this.reader.readAsDataURL(file);
        });
    });
  }

  changeProfileHeader() {
    this.input.type = 'file';
    this.input.click();
  }
}
