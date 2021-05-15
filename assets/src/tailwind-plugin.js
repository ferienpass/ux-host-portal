const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({addComponents, theme}) {
    addComponents({
        '.litepicker .container__main': {
            'box-shadow': theme('boxShadow'),
            'border-radius': theme('borderRadius'),
            'overflow': 'hidden',
            'display': 'flex'
        },
        '.litepicker .container__months': {
            'display': 'flex'
        },
        '.litepicker .container__months .month-item:first-child .month-item-header': {
            'border-top-left-radius': theme('borderRadius'),
            'border': '1px solid',
            'border-color': theme('borderColor'),
            'border-right-width': 0
        },
        '.litepicker .container__months .month-item:last-child .month-item-header': {
            'border-top-right-radius': theme('borderRadius'),
            'border': '1px solid',
            'border-color': theme('borderColor'),
            'border-left-width': 0
        },
        '.litepicker .container__months .month-item-header': {
            'display': 'flex',
            'padding': theme('spacing.2'),
            'font-size': theme('fontSize.sm'),
            'border': '1px solid',
            'border-color': theme('colors.red.700'),
            'background-color': theme('colors.red.600'),
            'text-align': 'center',
            'text-transform': 'uppercase',
            'color': 'white',
            'font-weight': theme('fontWeight.medium')
        },
        '.litepicker .container__months .month-item-header div': {
            'flex': '1'
        },
        '.litepicker .container__months .month-item-header div > .month-item-name': {
            'margin-right': theme('spacing.1')
        },
        '.litepicker .container__months .month-item-header div > .month-item-year': {
            'padding': '0'
        },
        '.litepicker .container__months .month-item-header .button-previous-month, .litepicker .container__months .month-item-header .button-next-month': {
            'visibility': 'hidden',
            'text-decoration': 'none',
            'padding': '3px 5px',
            'border-radius': '3px',
            'transition': 'color 0.3s, border 0.3s',
            'cursor': 'default'
        },
        '.litepicker .container__months .month-item-header .button-previous-month *, .litepicker .container__months .month-item-header .button-next-month *': {
            'pointer-events': 'none'
        },
        '.litepicker .container__months .month-item-weekdays-row': {
            'display': 'grid',
            'padding-left': theme('spacing.2'),
            'padding-right': theme('spacing.2'),
            'grid-template-columns': 'repeat(8, 1fr)',
            'color': theme('colors.gray.500'),
        },
        '.litepicker .container__months .month-item-weekdays-row > div': {
            'width': theme('spacing.8'),
            'height': theme('spacing.8'),
            'text-align': 'center',
            'font-size': theme('fontSize.xs'),
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center'
        },
        '.litepicker .container__months .month-item:first-child .button-previous-month': {
            'visibility': 'visible'
        },
        '.litepicker .container__months .month-item:last-child .button-next-month': {
            'visibility': 'visible'
        },
        '.litepicker .container__months .month-item.no-previous-month .button-previous-month': {
            'visibility': 'hidden'
        },
        '.litepicker .container__months .month-item.no-next-month .button-next-month ': {
            'visibility': 'hidden'
        },
        '.litepicker .container__days': {
            'display': 'grid',
            'grid-template-columns': 'repeat(8, 1fr)',
            'padding-left': theme('spacing.2'),
            'padding-right': theme('spacing.2'),
        }
    })
})
