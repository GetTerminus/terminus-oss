import { addons } from '@storybook/addons';

addons.setConfig({
  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: true,

  /**
   * show story component as full screen
   * @type {Boolean}
   */
  isFullscreen: false,

  /**
   * show/hide tool bar
   * @type {Boolean}
   */
  isToolshown: true,

  /**
   * where to show the addon panel
   * @type {('bottom'|'right')}
   */
  panelPosition: 'right',

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedPanel: undefined,

  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showNav: true,

  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showPanel: true,

  /**
   * display the top-level grouping as a "root" in the sidebar
   * @type {Boolean}
   */
  showRoots: true,

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,

  /**
   * theme storybook, see link below
   */
  theme: undefined,
});
