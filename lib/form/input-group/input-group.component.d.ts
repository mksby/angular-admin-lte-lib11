import { AfterContentInit, OnDestroy } from '@angular/core';
import { InputGroupAddonLeftDirective, InputGroupAddonRightDirective, InputGroupContentDirective, InputGroupLabelDirective } from './input-group.directive';
import { InputTextDirective } from '../input-text/input-text.directive';
export declare class InputGroupComponent implements AfterContentInit, OnDestroy {
    addonLeft?: string;
    addonRight?: string;
    inputColor: string;
    inputFontColor?: string;
    inputErrorColor: string;
    inputErrorFontColor?: string;
    inputValidColor: string;
    inputValidFontColor?: string;
    label?: string;
    wrapperClasses: string;
    inputGroupLabelDirective?: InputGroupLabelDirective;
    inputGroupAddonLeftDirective?: InputGroupAddonLeftDirective;
    inputGroupAddonRightDirective?: InputGroupAddonRightDirective;
    inputGroupContentDirective?: InputGroupContentDirective;
    inputTextDirective?: InputTextDirective;
    private subscriptions;
    currentColor?: string;
    currentFontColor?: string;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
