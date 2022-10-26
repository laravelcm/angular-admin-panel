import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-root',
  template: `
    <router-outlet></router-outlet>
    <network-status></network-status>
  `,
})
export class AppComponent implements OnInit {
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', this.updateTheme());

    new MutationObserver(([{ oldValue }]) => {
      let newValue = document.documentElement.getAttribute('data-theme')!;
      if (newValue !== oldValue) {
        try {
          window.localStorage.setItem('theme', newValue);
        } catch {}
        this.updateThemeWithoutTransitions(newValue);
      }
    }).observe(document.documentElement, {
      attributeFilter: ['data-theme'],
      attributeOldValue: true,
    });
  }

  updateTheme(savedTheme: string | null = null): string {
    let theme = 'system';
    try {
      if (!savedTheme) {
        savedTheme = window.localStorage.getItem('theme');
      }
      if (savedTheme === 'dark') {
        theme = 'dark';
        document.documentElement.classList.add('dark');
      } else if (savedTheme === 'light') {
        theme = 'light';
        document.documentElement.classList.remove('dark');
      } else if (this.mediaQuery.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {
      theme = 'light';
      document.documentElement.classList.remove('dark');
    }
    return theme;
  }

  updateThemeWithoutTransitions(savedTheme: string | null = null): void {
    this.updateTheme(savedTheme);
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }
}
