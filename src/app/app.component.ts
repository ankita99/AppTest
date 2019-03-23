import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from './shared/services/theme/theme.service';
import { TranslateService, LangChangeEvent, DefaultLangChangeEvent  } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory-ui';
  darkTheme =  new FormControl(false);


  constructor(private themeService: ThemeService,private _changeDetectorRef: ChangeDetectorRef,private translate: TranslateService) {
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|de|fr/) ? browserLang : 'en');

    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });
  }
}
