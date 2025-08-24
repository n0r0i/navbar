import { TabBrowserWrapper } from "./tab_browser.mjs";

export class WindowWrapper {
  #window;
  #gBrowser;
  /**
   *
   * @param {Window} chromeWindow
   */
  constructor(chromeWindow = null) {
    this.#window = chromeWindow ?? window;
    this.#gBrowser = new TabBrowserWrapper(this.raw.gBrowser);
  }

  /**
   * @returns {Window}
   */
  get raw() {
    return this.#window;
  }

  /**
   * @returns {string}
   */
  get id() {
    return this.raw.__SSi;
  }

  /**
   * @returns {string}
   */
  get name() {
    return this.raw.name;
  }

  /**
   * @returns {TabBrowserWrapper}
   */
  get gBrowser() {
    return this.#gBrowser;
  }

  /**
   * @returns {Document}
   */
  get document() {
    return this.raw.document;
  }

  /**
   * @returns {boolean}
   */
  get fullScreen() {
    return this.raw.fullScreen;
  }

  /**
   * @returns {number}
   */
  get mozInnerScreenX() {
    return this.raw.mozInnerScreenX;
  }

  /**
   *
   * @param {Event} event
   * @returns {boolean}
   */
  dispatchEvent(event) {
    return this.raw.dispatchEvent(event);
  }

  /**
   *
   * @param {string} type
   * @param {function(Event):any} listener
   */
  addEventListener(type, listener) {
    this.raw.addEventListener(type, listener);
  }

  relinkTreeOwner() {
    this.raw.docShell.treeOwner
      .QueryInterface(Ci.nsIInterfaceRequestor)
      .getInterface(Ci.nsIAppWindow).XULBrowserWindow =
      this.raw.XULBrowserWindow;
  }

  /**
   * @param {WindowWrapper} lhs
   * @param {WindowWrapper} rhs
   * @returns {boolean}
   */
  static isEqual(lhs, rhs) {
    return lhs.#window === rhs.#window;
  }
}
