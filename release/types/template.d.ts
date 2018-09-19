import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Accordion template class.
 */
export declare class Template extends Control.Component<Properties> {
    /**
     * Header slot.
     */
    private captionSlot;
    /**
     * Arrow slot.
     */
    private arrowSlot;
    /**
     * Content slot.
     */
    private contentSlot;
    /**
     * Header element.
     */
    private header;
    /**
     * Accordion element.
     */
    private accordion;
    /**
     * Accordion styles.
     */
    private styles;
    /**
     * Accordion skeleton.
     */
    private skeleton;
    /**
     * Bind event handlers to update the custom element.
     */
    private bindHandlers;
    /**
     * Bind exposed properties to the custom element.
     */
    private bindProperties;
    /**
     * Default constructor.
     * @param properties Accordion properties.
     * @param children Accordion children.
     */
    constructor(properties?: Properties, children?: any[]);
    /**
     * Accordion element.
     */
    readonly element: Element;
    /**
     * Opens the content panel.
     */
    open(): void;
    /**
     * Closes the content panel.
     */
    close(): void;
    /**
     * Toggles the content panel.
     */
    toggle(): void;
}
