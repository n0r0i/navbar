import { SidebarEvents, sendEvents } from "./events.mjs";

import { SidebarElements } from "../sidebar_elements.mjs";

export class SidebarSplittersController {
  constructor({ webPanelsController, sidebarController }) {
    this.webPanelsController = webPanelsController;
    this.sidebarController = sidebarController;
    this.sidebarSplitterUnpinned = SidebarElements.sidebarSplitterUnpinned;
    this.sidebarSplitterPinned = SidebarElements.sidebarSplitterPinned;

    this.#setupListeners();
  }

  #setupListeners() {
    /**@param {number} width */
    const changeWidth = (width) => {
      const webPanelController = this.webPanelsController.getActive();
      sendEvents(SidebarEvents.EDIT_SIDEBAR_WIDTH, {
        uuid: webPanelController.getUUID(),
        width,
      });
      this.webPanelsController.saveSettings();
    };
    this.sidebarSplitterUnpinned.listenWidthChange(() =>
      changeWidth(this.sidebarController.getSidebarWidth()),
    );
    this.sidebarSplitterPinned.listenWidthChange(() =>
      changeWidth(this.sidebarController.getSidebarBoxWidth()),
    );
  }
}
