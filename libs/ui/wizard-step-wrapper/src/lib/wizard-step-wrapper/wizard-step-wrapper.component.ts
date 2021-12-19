import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

/**
 * A expansion panel wizard step wrapper component to show/hide content
 *
 * @example
 * <ts-wizard-step-wrapper
 *               [stepHeader]="stepHeader"
 *               [stepHeaderAdditions]="stepHeaderAdditions"
 *               [stepFooter]="stepFooter"
 *               [isExpanded]="true"
 *               [isDisabled]="true"
 *               [transparentMode]="false"
 *               (expandedToggled)="onExpansionToggle($event)">
 *
 *              <div>
 *                <span>Step Content</span>
 *              </div>
 * </ts-wizard-step-wrapper>
 *
 * <ng-template #stepHeader>
 *   <span>Header</span>
 * </ng-template>
 *
 * <ng-template #headerAdditions>
 *   <span>Additions</span>
 * </ng-template>
 *
 * <ng-template #stepFooter>
 *   <span>Footer</span>
 * </ng-template>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-structure-wizard-step-wrapper</example-url>
 */
@Component({
  selector: 'ts-wizard-step-wrapper',
  templateUrl: './wizard-step-wrapper.component.html',
  styleUrls: ['./wizard-step-wrapper.component.scss'],
  host: { class: 'ts-wizard-step-wrapper' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsWizardStepWrapper',
})
export class TsWizardStepWrapperComponent {
  /**
   * Allow a custom step header to be added
   */
  @Input()
  public stepHeader: TemplateRef<ElementRef | undefined>;

  /**
   * Allow a custom step header additions to be added
   */
  @Input()
  public stepHeaderAdditions: TemplateRef<ElementRef | undefined>;

  /**
   * Allow a custom step footer to be added
   */
  @Input()
  public stepFooter: TemplateRef<ElementRef | undefined>;

  /**
   * Define if the panel should be open
   */
  @Input()
  public isExpanded = false;

  /**
   * Define if the panel should be disabled
   */
  @Input()
  public isDisabled = false;

  /**
   * Define if the panel should be transparent
   */
  @Input()
  public transparentMode = false;

  /**
   * An event emitted when the expanded panel is toggled
   */
  @Output()
  public readonly expandedToggled = new EventEmitter<boolean>();

  /**
   * When expanded change action dispatched, emit expandedToggled eventEmitter.
   *
   * @param expanded - The expanded change event
   */
  public panelStateChanged(expanded: boolean): void {
    this.expandedToggled.emit(expanded);
  }
}
