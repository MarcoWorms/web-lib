/* eslint-disable @typescript-eslint/explicit-function-return-type */

const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const {colors, paddings} = require('./tailwind.theme.cjs');

function withOpacityValue(variable) {
	return ({opacityValue}) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`;
		}
		return `rgb(var(${variable}) / ${opacityValue})`;
	};
}

module.exports = {
	corePlugins: {
		ringColor: false,
		ring: false
	},
	theme: {
		fontFamily: {
			roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
			mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono]
		},
		colors: {
			'white': '#FFFFFF',
			'transparent': 'transparent',
			'inherit': 'inherit',

			'background': withOpacityValue('--color-background'),
			'background-variant': withOpacityValue('--color-background-variant'),
			'surface': withOpacityValue('--color-surface'),
			'surface-variant': withOpacityValue('--color-surface-variant'),
			'primary': withOpacityValue('--color-primary'),
			'primary-variant': withOpacityValue('--color-primary-variant'),
			'secondary': withOpacityValue('--color-secondary'),
			'secondary-variant': withOpacityValue('--color-secondary-variant'),
			'disabled': withOpacityValue('--color-disabled'),
			'dark': withOpacityValue('--color-dark'),
		
			'alert-warning-primary': withOpacityValue('--color-alert-warning-primary'),
			'alert-warning-secondary': withOpacityValue('--color-alert-warning-secondary'),
			'alert-warning-secondary-variant': withOpacityValue('--color-alert-warning-secondary-variant'),
			'alert-error-primary': withOpacityValue('--color-alert-error-primary'),
			'alert-error-secondary': withOpacityValue('--color-alert-error-secondary'),
			'alert-critical-primary': withOpacityValue('--color-alert-critical-primary'),
			'alert-critical-secondary': withOpacityValue('--color-alert-critical-secondary'),
		
			'icons-primary': withOpacityValue('--color-icons-primary'),
			'icons-variant': withOpacityValue('--color-icons-variant'),
		
			'logo-background': withOpacityValue('--color-logo-background'),
			'logo-fill': withOpacityValue('--color-logo-fill'),
		
			'typo-primary': withOpacityValue('--color-typo-primary'),
			'typo-primary-variant': withOpacityValue('--color-typo-primary-variant'),
			'typo-secondary': withOpacityValue('--color-typo-secondary'),
			'typo-secondary-variant': withOpacityValue('--color-typo-secondary-variant'),
			'typo-off': withOpacityValue('--color-typo-off'),
		
			'button-filled-primary': withOpacityValue('--color-button-filled-primary'),
			'button-filled-variant': withOpacityValue('--color-button-filled-variant'),
			'button-filled-text': withOpacityValue('--color-button-filled-text'),
			'button-outlined-primary': withOpacityValue('--color-button-outlined-primary'),
			'button-outlined-variant': withOpacityValue('--color-button-outlined-variant'),
			'button-outlined-text': withOpacityValue('--color-button-outlined-text'),
			'button-disabled-primary': withOpacityValue('--color-button-disabled-primary'),
			'button-disabled-text': withOpacityValue('--color-button-disabled-text')
		},
		extend: {
			gridTemplateColumns: {
				'22': 'repeat(22, minmax(0, 1fr))'
			},
			spacing: {
				'none': 'var(--padding-none)',
				'narrow': 'var(--padding-narrow)',
				'wide': 'var(--padding-wide)'
			},
			width: {
				30: '7.5rem',
				33: '8.25rem',
				38: '9.5rem',
				42: '10.5rem',
				50: '12.5rem',
				55: '13.75rem'
			},
			height: {
				22: '5.5rem',
				30: '7.5rem'
			},
			maxWidth: {
				'xl': '552px',
				'4xl': '904px',
				'6xl': '1200px'
			},
			fontSize: {
				'xs': ['12px', '16px'],
				'sm': ['14px', '20px'],
				'base': ['16px', '24px'],
				'lg': ['20px', '32px'],
				'xl': ['24px', '32px'],
				'4xl': ['40px', '56px']
			},
			transitionProperty: {
				'max-height': 'max-height'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		plugin(function ({addBase, addComponents, addUtilities, theme}) {
			addBase({
				':root': {
					...colors,
					...paddings
				},
				'html': {
					marginLeft: 'calc(100vw - 100%)'
				},
				'h1': {
					fontSize: theme('fontSize.xl'),
					fontWeight: theme('fontWeight.bold'),
					color: theme('colors.primary')
				},
				'h4': {
					fontSize: theme('fontSize.lg'),
					fontWeight: theme('fontWeight.bold'),
					color: theme('colors.typo-primary')
				},
				'button': {
					cursor: theme('cursor.pointer'),
					paddingLeft: theme('spacing.3'),
					paddingRight: theme('spacing.3'),
					height: theme('height.8'),
					borderRadius: theme('borderRadius.lg'),
					fontSize: theme('fontSize.base'),
					lineHeight: theme('lineHeight.base'),
					transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
					transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
					transitionDuration: '150ms',
					'&:disabled': {
						cursor: theme('cursor.not-allowed')
					}
				},
				'input': {
					'&::placeholder': {
						color: theme('colors.typo-off')
					}
				},
				'textarea': {
					'&::placeholder': {
						color: theme('colors.typo-off')
					}
				}
			});
			addComponents({
				'#__next': {
					width: theme('width.full'),
					height: theme('width.full')
				},
				'.inline-dl': {
					display: 'flex',
					flexDirection: 'column',
					padding: theme('spacing.6'),
					boxShadow: theme('boxShadow.xl')
				},
				'.link': {
					color: theme('colors.primary'),
					textDecoration: 'underline',
					cursor: theme('cursor.pointer'),
					transitionProperty: 'color',
					transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
					transitionDuration: '150ms',
					'&:hover': {
						color: theme('colors.primary-variant')
					}
				},
				'.button': {
					cursor: theme('cursor.pointer'),
					paddingLeft: theme('spacing.3'),
					paddingRight: theme('spacing.3'),
					height: theme('height.8'),
					borderRadius: theme('borderRadius.lg'),
					fontSize: theme('fontSize.base'),
					lineHeight: theme('lineHeight.base'),
					transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
					transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
					transitionDuration: '150ms',
					'&:disabled': {
						cursor: theme('cursor.not-allowed')
					}
				},
				'.button-filled': {
					color: theme('colors.button-filled-text'),
					backgroundColor: theme('colors.primary'),
					fontWeight: theme('font.bold'),
					'&:hover': {
						backgroundColor: theme('colors.primary-variant')
					},
					'&:disabled': {
						backgroundColor: theme('colors.button-disabled-primary'),
						color: theme('colors.button-disabled-text')
					}
				},
				'.button-light': {
					color: theme('colors.primary'),
					backgroundColor: theme('colors.button-outlined-variant'),
					'&:hover': {
						backgroundColor: theme('colors.secondary-variant')
					}
				},
				'.button-outline': {
					color: theme('colors.primary'),
					borderWidth: 1,
					borderColor: theme('colors.primary'),
					backgroundColor: 'transparent',
					'&:hover': {
						backgroundColor: theme('colors.button-outlined-variant')
					},
					'&:disabled': {
						color: theme('colors.button-disabled-text'),
						backgroundColor: theme('colors.button-disabled-text')
					}
				}
			});
			addUtilities({
				'.flex-center': {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				},
				'.flex-row': {
					display: 'flex',
					flexDirection: 'row'
				},
				'.flex-col': {
					display: 'flex',
					flexDirection: 'col'
				},
				'.cell-end': {
					justifyContent: 'flex-end',
					textAlign: 'right',
					color: theme('colors.typo-primary')
				},
				'.cell-start': {
					justifyContent: 'flex-start',
					textAlign: 'left',
					color: theme('colors.typo-primary')
				},
				'.scrollbar-none': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
					'&::-webkit-scrollbar': {
						display: 'none'
					}
				}
			});
		})
	]
};