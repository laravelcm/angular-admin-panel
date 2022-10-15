import { Injectable, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

import { meta } from '../helpers/meta-data';

@Injectable({
  providedIn: 'root',
})
export class SeoService implements OnDestroy {
  private subscription = new Subscription();

  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {
    this.subscription.add(
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const url = event.url;
          this.updateTitle(url);
          this.updateMeta(url);
        }
      })
    );
  }

  private updateTitle(url: string): void {
    this.title.setTitle(meta[url].title);
  }

  private updateMeta(url: string): void {
    const oldTagOgTitle = this.meta.getTag('property="og:title"');
    const newTagOgTitle = {
      property: 'og:title',
      content: meta[url].title,
    };
    const oldTagTwitterTitle = this.meta.getTag('name="twitter:title"');
    const newTagTwitterTitle = {
      name: 'twitter:title',
      content: meta[url].title,
    };
    const oldTagDescription = this.meta.getTag('name="description"');
    const newTagDescription = {
      name: 'description',
      content: meta[url].description,
    };
    const oldTagOgDescription = this.meta.getTag('property="og:description"');
    const newTagOgDescription = {
      property: 'og:description',
      content: meta[url].description,
    };
    const oldTagTwitterDescription = this.meta.getTag(
      'property="og:description"'
    );
    const newTagTwitterDescription = {
      property: 'og:description',
      content: meta[url].description,
    };
    const oldTagOgImage = this.meta.getTag('property="og:image"');
    const imageTag =
      meta[url].metaTags?.['image'] ??
      this.meta.getTag('property="og:image"')!.content;
    const newTagOgImage = {
      property: 'og:image',
      content: imageTag,
    };
    const oldTagTwitterImage = this.meta.getTag('name="twitter:image"');
    const newTagTwitterImage = {
      name: 'twitter:image',
      content: imageTag,
    };
    const oldTagOgUrl = this.meta.getTag('property="og:url"');
    const newTagOgUrl = {
      property: 'og:url',
      content: meta[url].metaTags?.['og:url'],
    };
    const oldTagKeywords = this.meta.getTag('name="keywords"');
    const newTagKeywords = {
      name: 'keywords',
      content: meta[url].keywords,
    };

    // Update description
    oldTagDescription
      ? this.meta.updateTag(newTagDescription as MetaDefinition)
      : this.meta.addTag(newTagDescription as MetaDefinition);
    // Update og:description
    oldTagOgDescription
      ? this.meta.updateTag(newTagOgDescription as MetaDefinition)
      : this.meta.addTag(newTagOgDescription as MetaDefinition);
    // Update twitter:description
    oldTagTwitterDescription
      ? this.meta.updateTag(newTagTwitterDescription as MetaDefinition)
      : this.meta.addTag(newTagTwitterDescription as MetaDefinition);
    // Update og:title
    oldTagOgTitle
      ? this.meta.updateTag(newTagOgTitle as MetaDefinition)
      : this.meta.addTag(newTagOgTitle as MetaDefinition);
    // Update twitter:title
    oldTagTwitterTitle
      ? this.meta.updateTag(newTagTwitterTitle as MetaDefinition)
      : this.meta.addTag(newTagTwitterTitle as MetaDefinition);
    // Update og:image
    oldTagOgImage
      ? this.meta.updateTag(newTagOgImage as MetaDefinition)
      : this.meta.addTag(newTagOgImage as MetaDefinition);
    // Update twitter:image
    oldTagTwitterImage
      ? this.meta.updateTag(newTagTwitterImage as MetaDefinition)
      : this.meta.addTag(newTagTwitterImage as MetaDefinition);
    // Update og:url
    oldTagOgUrl
      ? this.meta.updateTag(newTagOgUrl as MetaDefinition)
      : this.meta.addTag(newTagOgUrl as MetaDefinition);
    // Update keywords
    oldTagKeywords
      ? this.meta.updateTag(newTagKeywords as MetaDefinition)
      : this.meta.addTag(newTagKeywords as MetaDefinition);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
