import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audio?: HTMLAudioElement;

  constructor() { }

  playAudio(filename: string){
    if(this.audio){
      this.audio.pause();
      this.audio.src = '';
    }
    this.audio = new Audio(`./../../../assets/Audios/${filename.toLowerCase()}.mp3`);
    this.audio.play();
  }
}
