import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * The panel animations for {@link TsSidenavComponent}
 */
export const tsSidenavPanelAnimations: {
  readonly transformPanel: AnimationTriggerMetadata;
  readonly transformDrawer: AnimationTriggerMetadata;
} = {
  /**
   * Panel popout animation
   */
  transformPanel: trigger('transformPanel', [
    state('void', style({
      transform: 'scaleY(0.8)',
      minWidth: '100%',
      opacity: 0,
    })),
    state('showing', style({
      opacity: 1,
      transform: 'scaleY(1)',
    })),
    transition('void => *', animate('120ms cubic-bezier(0, 0, 0.2, 1)')),
    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 }))),
  ]),

  /**
   * Panel drawer animation
   *
   * Using the cdk directives, it seems we cannot dynamically change the void state so we just define an entirely separate animation.
   */
  transformDrawer: trigger('transformDrawer', [
    state('void', style({
      opacity: 0,
      transform: 'translateX(-100%)',
    })),
    state('showing',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
    transition('* => showing', animate('120ms cubic-bezier(0, 0, .2, 1)')),
    transition('showing => *', animate('100ms 25ms linear')),
  ]),
};
