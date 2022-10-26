import { environment } from 'environments/environment';

export const siteTitle = environment.appName;

export interface SeoInterface {
  [key: string]: {
    title: string;
    description?: string;
    keywords?: string;
    metaTags?: {
      [key: string]: string;
    };
  };
}

export const meta: SeoInterface = {
  '/auth/login': {
    title: $localize`Connexion | ${siteTitle}`,
    description: $localize`Connexion à votre compte`,
    keywords: $localize`connexion, compte, admin, cpanel`,
    metaTags: {
      'og:url': `${environment.baseUrl}/auth/login`,
    },
  },
  '/auth/forgot-password': {
    title: $localize`Mot de passe oublié | ${siteTitle}`,
    description: $localize`Réinitialisez votre mot de passe`,
    keywords: $localize`mot de passe, oublié, admin, cpanel`,
    metaTags: {
      'og:url': `${environment.baseUrl}/auth/forgot-password`,
    },
  },
  '/dashboard': {
    title: $localize`Tableau de bord | ${siteTitle}`,
    description: $localize`Tableau de bord`,
    keywords: $localize`tableau de bord, admin, cpanel`,
    metaTags: {
      'og:url': `${environment.baseUrl}/dashboard`,
    },
  },
};
