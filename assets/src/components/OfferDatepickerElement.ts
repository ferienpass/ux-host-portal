import {controller, target} from '@github/catalyst'
// @ts-ignore
import Litepicker from 'litepicker/dist/nocss/litepicker.umd.js';

require('./litepicker.css')

@controller
class OfferDatepickerElement extends HTMLElement {
    picker: Litepicker;

    @target begin: HTMLInputElement
    @target end: HTMLInputElement

    connectedCallback() {
        this.picker = new Litepicker({
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
            tooltipText: {one: "Tag (klicken zum Bestätigen)", other: "Tage (klicken zum Bestätigen)"},
            singleMode: false,
            splitView: false,
            setup: (picker: any) => {
                picker.on('before:show', () => {
                    this.begin.hidden = true;
                    this.end.hidden = true;
                });
            },
        });
    }
}
