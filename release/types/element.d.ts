/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Accordion element interface.
 */
export interface Element extends HTMLDivElement {
  /**
   * Opens the content panel.
   */
  open: () => void;
  /**
   * Closes the content panel.
   */
  close: () => void;
  /**
   * Toggles the content panel.
   */
  toggle: () => void;
}
