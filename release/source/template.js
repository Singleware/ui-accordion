"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Template_1;
"use strict";
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const DOM = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Accordion template class.
 */
let Template = Template_1 = class Template extends Control.Component {
    /**
     * Default constructor.
     * @param properties Accordion properties.
     * @param children Accordion children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Header slot.
         */
        this.captionSlot = DOM.create("slot", { name: "caption", class: "caption" });
        /**
         * Arrow slot.
         */
        this.arrowSlot = DOM.create("slot", { name: "arrow", class: "arrow" });
        /**
         * Content slot.
         */
        this.contentSlot = DOM.create("slot", { name: "content", class: "content" });
        /**
         * Header element.
         */
        this.header = (DOM.create("div", { class: "header" },
            this.captionSlot,
            this.arrowSlot));
        /**
         * Accordion element.
         */
        this.accordion = (DOM.create("label", { class: "accordion" },
            this.header,
            this.contentSlot));
        /**
         * Accordion styles.
         */
        this.styles = (DOM.create("style", null, `:host > .accordion {
  display: flex;
  flex-direction: column;
  position: relative;
  height: inherit;
  width: inherit;
}
:host > .accordion > .header > .caption::slotted(*) {
  cursor: default;
  text-align: left;
  width: 100%;
}
:host > .accordion > .header > .arrow {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}
:host > .accordion > .header > .arrow::slotted(*) {
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 0.75rem;
  width: 0;
  height: 0;
}
:host:not([data-open]) > .accordion > .header > .arrow::slotted(*) {
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-right: 0.5rem solid black;
}
:host[data-open] > .accordion > .header > .arrow::slotted(*) {
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-top: 0.5rem solid black;
}
:host > .accordion > .content::slotted(*) {
  display: block;
  border: 0.0625rem solid black;
  top: 100%;
  width: 100%;
  z-index: 1;
}`));
        /**
         * Accordion skeleton.
         */
        this.skeleton = (DOM.create("div", { slot: this.properties.slot, class: this.properties.class }, this.children));
        DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.accordion);
        this.bindHandlers();
        this.bindProperties();
    }
    /**
     * Bind event handlers to update the custom element.
     */
    bindHandlers() {
        this.header.addEventListener('click', this.toggle.bind(this));
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        Object.defineProperties(this.skeleton, {
            open: super.bindDescriptor(this, Template_1.prototype, 'open'),
            close: super.bindDescriptor(this, Template_1.prototype, 'close'),
            toggle: super.bindDescriptor(this, Template_1.prototype, 'toggle')
        });
    }
    /**
     * Accordion element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Opens the content panel.
     */
    open() {
        this.skeleton.dataset.open = 'on';
        DOM.append(this.accordion, this.contentSlot);
    }
    /**
     * Closes the content panel.
     */
    close() {
        delete this.skeleton.dataset.open;
        this.contentSlot.remove();
    }
    /**
     * Toggles the content panel.
     */
    toggle() {
        if (this.skeleton.dataset.open) {
            this.close();
        }
        else {
            this.open();
        }
    }
};
__decorate([
    Class.Private()
], Template.prototype, "captionSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "arrowSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "contentSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "header", void 0);
__decorate([
    Class.Private()
], Template.prototype, "accordion", void 0);
__decorate([
    Class.Private()
], Template.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Template.prototype, "bindHandlers", null);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
__decorate([
    Class.Public()
], Template.prototype, "open", null);
__decorate([
    Class.Public()
], Template.prototype, "close", null);
__decorate([
    Class.Public()
], Template.prototype, "toggle", null);
Template = Template_1 = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;
