import { CollapseController } from "./controllers/collapse.mjs";
import { ContextMenuItemsController } from "./controllers/context_menu_items.mjs";
import { SidebarController } from "./controllers/sidebar.mjs";
import { SidebarMainController } from "./controllers/sidebar_main.mjs";
import { SidebarMainSettingsController } from "./controllers/sidebar_main_settings.mjs";
import { SidebarSplittersController } from "./controllers/sidebar_splitters.mjs";
import { WebPanelDeleteController } from "./controllers/web_panel_delete.mjs";
import { WebPanelEditController } from "./controllers/web_panel_edit.mjs";
import { WebPanelMoreController } from "./controllers/web_panel_more.mjs";
import { WebPanelNewController } from "./controllers/web_panel_new.mjs";
import { WebPanelsController } from "./controllers/web_panels.mjs";

export class SidebarControllers {
  static create() {
    console.log("FSS: Creating sidebar controllers...");
    this.sidebarMainController = new SidebarMainController();
    console.log("FSS: sidebarMainController created.");
    this.sidebarMainSettingsController = new SidebarMainSettingsController();
    console.log("FSS: sidebarMainSettingsController created.");
    this.sidebarController = new SidebarController();
    console.log("FSS: sidebarController created.");
    this.sidebarSplittersController = new SidebarSplittersController();
    console.log("FSS: sidebarSplittersController created.");
    this.webPanelsController = new WebPanelsController();
    console.log("FSS: webPanelsController created.");
    this.webPanelNewController = new WebPanelNewController();
    console.log("FSS: webPanelNewController created.");
    this.webPanelEditController = new WebPanelEditController();
    console.log("FSS: webPanelEditController created.");
    this.webPanelMoreController = new WebPanelMoreController();
    console.log("FSS: webPanelMoreController created.");
    this.webPanelDeleteController = new WebPanelDeleteController();
    console.log("FSS: webPanelDeleteController created.");
    this.contextMenuItemsController = new ContextMenuItemsController();
    console.log("FSS: contextMenuItemsController created.");
    this.collapseController = new CollapseController();
    console.log("FSS: collapseController created.");
    console.log("FSS: All sidebar controllers created successfully.");
  }
}
