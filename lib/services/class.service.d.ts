import { Renderer2, ElementRef } from '@angular/core';
export declare class ClassService {
    private elementRef;
    private renderer2;
    private currentClasses;
    constructor(elementRef: ElementRef, renderer2: Renderer2);
    applyClasses(cssClasses: string | string[]): void;
}
