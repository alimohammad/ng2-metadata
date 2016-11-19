// Generated by dts-bundle v0.6.1
// Dependencies for this module:
//   ../@angular/platform-browser
//   ../@angular/router
//   ../@angular/core

declare module 'ng2-metadata' {
    export * from 'ng2-metadata/dist/models/page-title-positioning';
    export * from 'ng2-metadata/dist/models/metadata-settings';
    export * from 'ng2-metadata/dist/metadata.service';
    export * from 'ng2-metadata/dist/metadata.module';
}

declare module 'ng2-metadata/dist/models/page-title-positioning' {
    export enum PageTitlePositioning {
        AppendPageTitle = 0,
        PrependPageTitle = 10,
    }
}

declare module 'ng2-metadata/dist/models/metadata-settings' {
    import { PageTitlePositioning } from 'ng2-metadata/dist/models/page-title-positioning';
    export interface MetadataSettings {
        pageTitlePositioning: PageTitlePositioning;
        pageTitleSeparator?: string;
        applicationName?: string;
        applicationUrl?: string;
        defaults?: {
            title?: string;
            description?: string;
            keywords?: string;
            [key: string]: string;
        };
    }
}

declare module 'ng2-metadata/dist/metadata.service' {
    import { Title } from '@angular/platform-browser';
    import { Router, ActivatedRoute } from '@angular/router';
    import 'rxjs/add/operator/filter';
    import 'rxjs/add/operator/map';
    import { MetadataSettings } from 'ng2-metadata/dist/models/metadata-settings';
    export abstract class MetadataLoader {
        abstract getSettings(): MetadataSettings;
    }
    export class MetadataStaticLoader implements MetadataLoader {
        constructor(metadataSettings: MetadataSettings);
        getSettings(): MetadataSettings;
    }
    export class MetadataService {
        constructor(router: Router, document: any, titleService: Title, activatedRoute: ActivatedRoute, loader: MetadataLoader);
        setTitle(title: string, override?: boolean): void;
        setTag(tag: string, value: string): void;
    }
}

declare module 'ng2-metadata/dist/metadata.module' {
    import { ModuleWithProviders } from '@angular/core';
    import { MetadataStaticLoader } from 'ng2-metadata/dist/metadata.service';
    export function metadataLoaderFactory(): MetadataStaticLoader;
    export class MetadataModule {
        static forRoot(providedLoader?: any): ModuleWithProviders;
    }
}

