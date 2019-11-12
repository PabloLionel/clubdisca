import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pathUrl = '/assets/images/avatar-main-1024x576.png';

  navLinks = [
    { path: 'publications', label: 'Mis historias' },
    { path: 'editprofile', label: 'Mi Perfil' },
  ];

  constructor() { }

  ngOnInit() {
  }

  changeProfileHeader() {
    const inputFile = document.createElement('input');
    inputFile.type = 'file';
    inputFile.click();
    console.dir(inputFile);
    if (!inputFile.files.length) { return; }
    const reader = new FileReader();
    reader.onload = () => {
        const IMG_URL = reader.result;
        // send(IMG_URL.split('base64,')[1]); <-- ejemplo de envio en base64
    };
    Array.from(inputFile.files).forEach(file => {
      const mimeType = file.type;
      if (mimeType.match(/image\/*/) == null) {
          // this.message = 'Only images are supported.'; // cambiar: mostrar error al usuario
          return;
      }
      reader.readAsDataURL(file);
    });

  }
}
