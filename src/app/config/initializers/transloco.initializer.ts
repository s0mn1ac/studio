import { APP_INITIALIZER, Provider } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';

export function initTransloco(appService: AppService): () => Promise<void> {

    return () => new Promise(async (resolve) => {
        const navigatorLanguage = navigator.language;
        let lang: string;
        if (navigatorLanguage.startsWith('es')) { lang = 'es';
        } else { lang = 'en'; }
        appService.translocoService.setActiveLang(lang);
        await appService.translocoService.load(lang).toPromise();
        resolve();
    });
}

export const TranslocoInitializer: Provider = {
    provide: APP_INITIALIZER,
    useFactory: initTransloco,
    deps: [AppService],
    multi: true
};
