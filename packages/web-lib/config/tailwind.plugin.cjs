const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const {paddings} = require('./tailwind.theme.cjs');

function withOpacityValue(variable) {
	return ({opacityValue}) => {
		if (opacityValue === undefined) {
			return `hsl(var(${variable}))`;
		}
		return `hsl(var(${variable}) / ${opacityValue})`;
	};
}

module.exports = {
	corePlugins: {
		ringColor: false,
		ring: false
	},
	theme: {
		fontFamily: {
			roboto: ['Aeonik', 'Roboto', ...defaultTheme.fontFamily.sans],
			aeonik: ['Aeonik', 'Roboto', ...defaultTheme.fontFamily.sans],
			mono: ['Aeonik Mono', 'Roboto Mono', ...defaultTheme.fontFamily.mono]
		},
		colors: {
			'black': 'hsl(0, 0%, 0%)',
			'white': 'rgb(255, 255, 255)',
			'transparent': 'transparent',
			'inherit': 'inherit',

			/* 🔵 - Yearn Finance ******************************************************
			** Colors for the legacy Yearn design system
			**************************************************************************/
			'primary-100': withOpacityValue('--color-primary-100'),
			'primary-200': withOpacityValue('--color-primary-200'),
			'primary-500': withOpacityValue('--color-primary-500'),
			'primary-600': withOpacityValue('--color-primary-600'),
			'accent-500': withOpacityValue('--color-accent-500'),
			'accent-600': withOpacityValue('--color-accent-600'),
			'yellow-900': withOpacityValue('--color-yellow-900'),
			'yellow-300': withOpacityValue('--color-yellow-300'),
			'yellow-200': withOpacityValue('--color-yellow-200'),
			'error-900': withOpacityValue('--color-error-900'),
			'error-300': withOpacityValue('--color-error-300'),
			'error-200': withOpacityValue('--color-error-200'),
			'red-900': withOpacityValue('--color-red-900'),
			'red-300': withOpacityValue('--color-red-300'),
			'red-200': withOpacityValue('--color-red-200'),
			

			/* 🔵 - Yearn Finance ******************************************************
			** Colors for the next Yearn design system
			**************************************************************************/
			'primary': withOpacityValue('--color-primary'),

			//New colors
			'neutral-0': withOpacityValue('--color-neutral-0'),
			'neutral-100': withOpacityValue('--color-neutral-100'),
			'neutral-200': withOpacityValue('--color-neutral-200'),
			'neutral-300': withOpacityValue('--color-neutral-300'),
			'neutral-400': withOpacityValue('--color-neutral-400'),
			'neutral-500': withOpacityValue('--color-neutral-500'),
			'neutral-600': withOpacityValue('--color-neutral-600'),
			'neutral-700': withOpacityValue('--color-neutral-700'),
			'neutral-800': withOpacityValue('--color-neutral-800'),
			'neutral-900': withOpacityValue('--color-neutral-900'),

			/* Up Only Green */
			'green-50': withOpacityValue('--color-green-50'),
			'green-100': withOpacityValue('--color-green-100'),
			'green-200': withOpacityValue('--color-green-200'),
			'green-300': withOpacityValue('--color-green-300'),
			'green-400': withOpacityValue('--color-green-400'),
			'green-500': withOpacityValue('--color-green-500'),
			'green-600': withOpacityValue('--color-green-600'),
			'green-700': withOpacityValue('--color-green-600'),
			'green-800': withOpacityValue('--color-green-800'),
			'green-900': withOpacityValue('--color-green-900'),

			/* Tokyo Party */
			'purple-50': withOpacityValue('--color-purple-50'),
			'purple-100': withOpacityValue('--color-purple-100'),
			'purple-200': withOpacityValue('--color-purple-200'),
			'purple-300': withOpacityValue('--color-purple-300'),
			'purple-400': withOpacityValue('--color-purple-400'),
			'purple-500': withOpacityValue('--color-purple-500'),
			'purple-600': withOpacityValue('--color-purple-600'),
			'purple-700': withOpacityValue('--color-purple-600'),
			'purple-800': withOpacityValue('--color-purple-800'),
			'purple-900': withOpacityValue('--color-purple-900'),

			/* Disco Salmon */
			'pink-50': withOpacityValue('--color-pink-50'),
			'pink-100': withOpacityValue('--color-pink-100'),
			'pink-200': withOpacityValue('--color-pink-200'),
			'pink-300': withOpacityValue('--color-pink-300'),
			'pink-400': withOpacityValue('--color-pink-400'),
			'pink-500': withOpacityValue('--color-pink-500'),
			'pink-600': withOpacityValue('--color-pink-600'),
			'pink-700': withOpacityValue('--color-pink-600'),
			'pink-800': withOpacityValue('--color-pink-800'),
			'pink-900': withOpacityValue('--color-pink-900'),

			/* Metaverse Sunset */
			'yellow-50': withOpacityValue('--color-yellow-50'),
			'yellow-100': withOpacityValue('--color-yellow-100'),
			'yellow-200': withOpacityValue('--color-yellow-200'),
			'yellow-300': withOpacityValue('--color-yellow-300'),
			'yellow-400': withOpacityValue('--color-yellow-400'),
			'yellow-500': withOpacityValue('--color-yellow-500'),
			'yellow-600': withOpacityValue('--color-yellow-600'),
			'yellow-700': withOpacityValue('--color-yellow-600'),
			'yellow-800': withOpacityValue('--color-yellow-800'),
			'yellow-900': withOpacityValue('--color-yellow-900')
		},
		extend: {
			gridTemplateColumns: {
				'22': 'repeat(22, minmax(0, 1fr))'
			},
			spacing: {
				'none': 'var(--padding-none)',
				'tightest': 'var(--padding-tightest)',
				'tighter': 'var(--padding-tighter)',
				'tight': 'var(--padding-tight)',
				'normal': 'var(--padding-normal)',
				'wide': 'var(--padding-wide)',
				'wider': 'var(--padding-wider)',
				'widest': 'var(--padding-widest)'
			},
			width: {
				'inherit': 'inherit'
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
				'intermediate': ['18px', '24px'],
				'lg': ['20px', '32px'],
				'xl': ['24px', '32px'],
				'3xl': ['32px', '40px'],
				'4xl': ['40px', '56px'],
				'7xl': ['80px', '96px']
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
		plugin(function ({addBase, addUtilities, theme}) {
			addBase({
				':root': {
					...paddings
				}
			});
			addUtilities({
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