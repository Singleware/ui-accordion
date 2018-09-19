/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';

/**
 * Accordion template class.
 */
@Class.Describe()
export class Template extends Control.Component<Properties> {
  /**
   * Header slot.
   */
  @Class.Private()
  private captionSlot = <slot name="caption" class="caption" /> as HTMLSlotElement;

  /**
   * Arrow slot.
   */
  @Class.Private()
  private arrowSlot = <slot name="arrow" class="arrow" /> as HTMLSlotElement;

  /**
   * Content slot.
   */
  @Class.Private()
  private contentSlot = <slot name="content" class="content" /> as HTMLSlotElement;

  /**
   * Header element.
   */
  @Class.Private()
  private header = (
    <div class="header">
      {this.captionSlot}
      {this.arrowSlot}
    </div>
  ) as HTMLDivElement;

  /**
   * Accordion element.
   */
  @Class.Private()
  private accordion = (
    <label class="accordion">
      {this.header}
      {this.contentSlot}
    </label>
  ) as HTMLLabelElement;

  /**
   * Accordion styles.
   */
  @Class.Private()
  private styles = (
    <style>
      {`:host > .accordion {
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
}`}
    </style>
  ) as HTMLStyleElement;

  /**
   * Accordion skeleton.
   */
  @Class.Private()
  private skeleton = (
    <div slot={this.properties.slot} class={this.properties.class}>
      {this.children}
    </div>
  ) as Element;

  /**
   * Bind event handlers to update the custom element.
   */
  @Class.Private()
  private bindHandlers(): void {
    this.header.addEventListener('click', this.toggle.bind(this));
  }

  /**
   * Bind exposed properties to the custom element.
   */
  @Class.Private()
  private bindProperties(): void {
    Object.defineProperties(this.skeleton, {
      open: super.bindDescriptor(this, Template.prototype, 'open'),
      close: super.bindDescriptor(this, Template.prototype, 'close'),
      toggle: super.bindDescriptor(this, Template.prototype, 'toggle')
    });
  }

  /**
   * Default constructor.
   * @param properties Accordion properties.
   * @param children Accordion children.
   */
  constructor(properties?: Properties, children?: any[]) {
    super(properties, children);
    DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.accordion);
    this.bindHandlers();
    this.bindProperties();
  }

  /**
   * Accordion element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Opens the content panel.
   */
  @Class.Public()
  public open(): void {
    this.skeleton.dataset.open = 'on';
    DOM.append(this.accordion, this.contentSlot);
  }

  /**
   * Closes the content panel.
   */
  @Class.Public()
  public close(): void {
    delete this.skeleton.dataset.open;
    this.contentSlot.remove();
  }

  /**
   * Toggles the content panel.
   */
  @Class.Public()
  public toggle(): void {
    if (this.skeleton.dataset.open) {
      this.close();
    } else {
      this.open();
    }
  }
}
