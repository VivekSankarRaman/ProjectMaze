import { Component, Input, OnChanges, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  template: `<p [innerHTML]="svgIcon"></p>`,
  styleUrls: ['./svg-icon.component.css'],
})
export class SvgIconComponent implements OnChanges {

  @Input() public name?: string;

  public svgIcon: any;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    ) {
  }

  public ngOnChanges(): void {
    if (!this.name) {
      this.svgIcon = '';
      return;
    }
    this.httpClient
      .get(`assets/Icons/${this.name}.svg`, { responseType: 'text' })
      .subscribe(value => {
        const sanitizedcode = this.sanitizer.sanitize(SecurityContext.NONE, value);

        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(sanitizedcode || '');
        console.log('value...', this.svgIcon);
      });
  }

}