"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const catalyst_1 = require("@github/catalyst");
// @ts-ignore
const litepicker_umd_js_1 = require("litepicker/dist/nocss/litepicker.umd.js");
let OfferDatepickerElement = class OfferDatepickerElement extends HTMLElement {
    connectedCallback() {
        this.picker = new litepicker_umd_js_1.default({
            element: this.begin,
            elementEnd: this.end,
            inlineMode: true,
            format: 'DD.MM.YYYY',
            autoRefresh: true,
            lang: 'de',
            numberOfColumns: 2,
            numberOfMonths: 2,
            showWeekNumbers: true,
            selectForward: true,
            tooltipText: { one: "Tag (klicken zum Bestätigen)", other: "Tage (klicken zum Bestätigen)" },
            singleMode: false,
            splitView: false,
            setup: (picker) => {
                picker.on('before:show', () => {
                    this.begin.hidden = true;
                    this.end.hidden = true;
                });
            },
        });
    }
};
__decorate([
    catalyst_1.target
], OfferDatepickerElement.prototype, "begin", void 0);
__decorate([
    catalyst_1.target
], OfferDatepickerElement.prototype, "end", void 0);
OfferDatepickerElement = __decorate([
    catalyst_1.controller
], OfferDatepickerElement);
