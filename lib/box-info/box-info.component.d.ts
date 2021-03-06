import { OnInit } from '@angular/core';
import { BoxInfoContentDirective, BoxInfoFooterDirective, BoxInfoHeaderDirective } from './box-info.directive';
export declare class BoxInfoComponent implements OnInit {
    backgroundColor?: string;
    contentStyleClass: string;
    contentColor?: string;
    footer?: string;
    footerColor?: string;
    footerStyleClass: string;
    header?: string;
    headerColor?: string;
    headerStyleClass: string;
    iconBackgroundColor?: string;
    iconColor: string;
    iconStyleClass: string;
    progressWidth?: number;
    styleClass: string;
    boxInfoHeaderDirective?: BoxInfoHeaderDirective;
    boxInfoFooterDirective?: BoxInfoFooterDirective;
    boxInfoContentDirective?: BoxInfoContentDirective;
    progressBarBg?: string;
    ngOnInit(): void;
}
