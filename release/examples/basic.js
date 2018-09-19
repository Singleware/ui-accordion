"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic accordion element.
 */
const Accordion = require("../source");
const DOM = require("@singleware/jsx");
const element = (DOM.create(Accordion.Template, null,
    DOM.create("div", { slot: "caption" }),
    DOM.create("div", { slot: "arrow" }),
    DOM.create("div", { slot: "content" })));
