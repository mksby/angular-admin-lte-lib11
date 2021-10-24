import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColorModule } from '../../color/color.module';
import { InputGroupComponent } from './input-group.component';
import { InputGroupAddonLeftDirective, InputGroupAddonRightDirective, InputGroupContentDirective, InputGroupLabelDirective } from './input-group.directive';
export { InputGroupComponent } from './input-group.component';
export { InputGroupAddonLeftDirective, InputGroupAddonRightDirective, InputGroupContentDirective, InputGroupLabelDirective } from './input-group.directive';
export class InputGroupModule {
}
InputGroupModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ColorModule,
                    FormsModule
                ],
                exports: [InputGroupComponent, InputGroupLabelDirective, InputGroupAddonLeftDirective,
                    InputGroupAddonRightDirective, InputGroupContentDirective],
                declarations: [InputGroupComponent, InputGroupLabelDirective, InputGroupAddonLeftDirective,
                    InputGroupAddonRightDirective, InputGroupContentDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9hbmd1bGFyLWFkbWluLWx0ZS9zcmMvbGliL2Zvcm0vaW5wdXQtZ3JvdXAvaW5wdXQtZ3JvdXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUNMLDRCQUE0QixFQUM1Qiw2QkFBNkIsRUFDN0IsMEJBQTBCLEVBQzFCLHdCQUF3QixFQUN6QixNQUFNLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFDTCw0QkFBNEIsRUFDNUIsNkJBQTZCLEVBQzdCLDBCQUEwQixFQUMxQix3QkFBd0IsRUFDekIsTUFBTSx5QkFBeUIsQ0FBQztBQWFqQyxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFYNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsV0FBVztpQkFDWjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx3QkFBd0IsRUFBRSw0QkFBNEI7b0JBQ25GLDZCQUE2QixFQUFFLDBCQUEwQixDQUFDO2dCQUM1RCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx3QkFBd0IsRUFBRSw0QkFBNEI7b0JBQ3hGLDZCQUE2QixFQUFFLDBCQUEwQixDQUFDO2FBQzdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtDb2xvck1vZHVsZX0gZnJvbSAnLi4vLi4vY29sb3IvY29sb3IubW9kdWxlJztcbmltcG9ydCB7SW5wdXRHcm91cENvbXBvbmVudH0gZnJvbSAnLi9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgSW5wdXRHcm91cEFkZG9uTGVmdERpcmVjdGl2ZSxcbiAgSW5wdXRHcm91cEFkZG9uUmlnaHREaXJlY3RpdmUsXG4gIElucHV0R3JvdXBDb250ZW50RGlyZWN0aXZlLFxuICBJbnB1dEdyb3VwTGFiZWxEaXJlY3RpdmVcbn0gZnJvbSAnLi9pbnB1dC1ncm91cC5kaXJlY3RpdmUnO1xuXG5leHBvcnQge0lucHV0R3JvdXBDb21wb25lbnR9IGZyb20gJy4vaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcbmV4cG9ydCB7XG4gIElucHV0R3JvdXBBZGRvbkxlZnREaXJlY3RpdmUsXG4gIElucHV0R3JvdXBBZGRvblJpZ2h0RGlyZWN0aXZlLFxuICBJbnB1dEdyb3VwQ29udGVudERpcmVjdGl2ZSxcbiAgSW5wdXRHcm91cExhYmVsRGlyZWN0aXZlXG59IGZyb20gJy4vaW5wdXQtZ3JvdXAuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb2xvck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbSW5wdXRHcm91cENvbXBvbmVudCwgSW5wdXRHcm91cExhYmVsRGlyZWN0aXZlLCBJbnB1dEdyb3VwQWRkb25MZWZ0RGlyZWN0aXZlLFxuICAgIElucHV0R3JvdXBBZGRvblJpZ2h0RGlyZWN0aXZlLCBJbnB1dEdyb3VwQ29udGVudERpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW0lucHV0R3JvdXBDb21wb25lbnQsIElucHV0R3JvdXBMYWJlbERpcmVjdGl2ZSwgSW5wdXRHcm91cEFkZG9uTGVmdERpcmVjdGl2ZSxcbiAgICBJbnB1dEdyb3VwQWRkb25SaWdodERpcmVjdGl2ZSwgSW5wdXRHcm91cENvbnRlbnREaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0R3JvdXBNb2R1bGUge31cbiJdfQ==