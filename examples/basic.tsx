/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic accordion element.
 */
import * as Accordion from '../source';
import * as DOM from '@singleware/jsx';

const element = (
  <Accordion.Template>
    <div slot="caption" />
    <div slot="arrow" />
    <div slot="content" />
  </Accordion.Template>
) as Accordion.Element;
