import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-picture-data',
  templateUrl: './profile-picture-data.component.html',
  styleUrls: ['./profile-picture-data.component.css']
})
export class ProfilePictureDataComponent {
  openGitHubLink() {
    window.open('https://github.com/yagna594', '_blank');
  }
  openLinkedInLink() {
    window.open('https://www.linkedin.com/in/yagna-murthy-ayachitula-444845a3/', '_blank');
  }
  
}


