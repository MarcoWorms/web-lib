import	React, {ReactElement}			from	'react';
import	{Card, Banner, AlertTypes}	from	'@yearn/web-lib/components';
import	VariantSelectors				from	'components/documentation/VariantSelectors';
import	ComponentAPI					from	'components/documentation/ComponentAPI';
import	Highlight						from	'components/documentation/Highlight';

const code = `
import	React			from	'react';
import	{Banner}	from	'@yearn/web-lib/components';

export default function	App(): React.ReactElement {
	return (
		<Banner
			id={'someID'}
			title={'Spend your time wisely'}
			maxHeight={'max-h-[600px] md:max-h-[300px]'}>
			<div>
				<p>{'Yearn Vaults are a way to use technology to help manage your holdings. You choose the strategy that best suits you, deposit into that vault, and Yearn tech helps maximize yield through shifting capital, auto-compounding, and rebalancing.'}</p>
				<p className={'block mt-4'}>{'Custody, and responsibility, for your holdings remains yours.'}</p>
				<p className={'block mt-4'}>{'You can withdraw anytime.'}</p>
			</div>
		</Banner>
	);
}`.trim();

export function	BannerComponent(): ReactElement {
	const	[refresher, set_refresher] = React.useState(0);
	const	resetStorage = (): void => {
		window.localStorage.setItem('someID-info', JSON.stringify(true));
		setTimeout((): void => set_refresher(refresher + 1), 100);
	};
	return (
		<div className={'relative w-full flex-center'}>
			<div className={'z-10'}>
				<Banner
					key={`someID-info${refresher}`}
					id={'someID-info'}
					title={'Welcome to banner'}
					content={`This is a banner component. It can appear on different pages to inform users about anything. There can be multiple banners on a single page. Banners should be shown one by one. This component has controls. There is a cross mark in the top right corner to close one banner. There are arrows in the bottom right corner to switch between banners.
					Also the banner can have CTA as one or two buttons to provide some usefull links.
					The component’s height could be changed to fit text length. Please, be sure you have 24px gaps between outer borders and the whole content inside. And 16px between text and CTA buttons if there are some.
					
					Have a nice day.`}
					maxHeight={'max-h-[600px] md:max-h-[300px] banner--wrapper'}>
					{/* <div>
						<p>{'Yearn Vaults are a way to use technology to help manage your holdings.'}</p>
					</div> */}
				</Banner>
			</div>
			<div className={'absolute z-0'}>
				<div onClick={resetStorage} className={'flex px-2 h-8 font-bold rounded-lg transition-colors cursor-pointer bg-surface flex-center hover:bg-surface-variant'}>{'Reset'}</div>
			</div>
		</div>
	);
}

type variants = 'default' | 'image' | 'split' | 'background';

function	VariantLevel(): ReactElement {
	const	[variant, set_variant] = React.useState(0);
	const	[refresher, set_refresher] = React.useState(0);
	const	variantType = ['default', 'image', 'split', 'background'];
	const	resetStorage = (): void => {
		window.localStorage.setItem(`someID-${variantType[variant]}`, JSON.stringify(true));
		setTimeout((): void => set_refresher(refresher + 1), 100);
	};

	function	renderBanner(): ReactElement {
		return (
			<Banner
				key={`someID-${variantType[variant]}${refresher}`}
				id={`someID-${variantType[variant]}`}
				title={`Spend your time wisely (${variantType[variant]})`}
				variant={variantType[variant] as variants}
				maxHeight={'max-h-[600px] md:max-h-[300px] banner--wrapper'}>
				<div>
					<p>{'Yearn Vaults are a way to use technology to help manage your holdings. You choose the strategy that best suits you, deposit into that vault, and Yearn tech helps maximize yield through shifting capital, auto-compounding, and rebalancing.'}</p>
					<p className={'block mt-4'}>{'Custody, and responsibility, for your holdings remains yours.'}</p>
					<p className={'block mt-4'}>{'You can withdraw anytime.'}</p>
				</div>
			</Banner>
		);
	}

	return (
		<div className={'box-gradient-default'}>
			<div className={'w-3/4'}>
				{renderBanner()}
			</div>
			<VariantSelectors
				selected={variantType[variant]}
				variants={variantType}
				onChange={(n: number): void => set_variant(n)} />
			<div className={'absolute right-4 bottom-4'}>
				<div onClick={resetStorage} className={'flex px-2 h-8 font-bold rounded-lg transition-colors cursor-pointer bg-surface flex-center hover:bg-surface-variant'}>{'Reset'}</div>
			</div>
		</div>
	);
}

function	DocumentationBanner(): ReactElement {
	return (
		<section aria-label={'some default section'}>
			<Card>
				<h1 className={'mb-2 text-3xl text-typo-primary'}>{'Banner'}</h1>
				<section aria-label={'code-part'}>
					<VariantLevel />
					<Highlight code={code} />
				</section>

				<section aria-label={'description-part'} className={'mt-6'}>
					<h4 className={'mb-1'}>{'Description'}</h4>
					<p className={'mb-2'}>{'The Alert Banner component is used to display some notice. A few levels are available, info, warning, error and critical and multiple pages could be used.'}</p>
					<p className={'mb-4'}>{'Note: the component uses the localStorage to save the user choice, aka once dismissed, the alert with the provided id will no longer be displayed.'}</p>

					<ComponentAPI
						elements={[{
							title: 'id',
							type: 'string',
							description: 'Unique string to identify the banner in the local storage'
						},
						{
							title: 'variant',
							type: 'default | image | split | background',
							description: 'Indicate the type of banner to display'
						},
						{
							title: 'title?',
							type: 'string',
							description: 'Title displayed on the top of the banner. Not used with image variant'
						},
						{
							title: 'content?',
							type: 'string',
							description: 'Text displayed. Not used with image variant.'
						},
						{
							title: 'primaryButton?',
							type: 'ReactElement',
							description: 'Button to display as primary action. Not used with image variant.'
						},
						{
							title: 'secondaryButton?',
							type: 'ReactElement',
							description: 'Button to display as secondary action. Not used with image variant.'
						},
						{
							title: 'onClick?',
							type: 'string',
							description: 'Action to trigger when clicked and using the image variant.'
						},
						{
							title: 'maxHeight?',
							type: 'string',
							description: 'Special variable to use as className. In pure CSS, it is impossible to correctly animate height, we need to animate max-height. This allow us to customize the max-height and have a correct transition on banner close.'
						},
						{
							title: 'canClose?',
							type: 'boolean',
							description: 'Can the banner be closed? Default is set to true. If false, the banner will always render and the cross will be hidden.'
						},
						{
							title: 'onClose?',
							type: 'function',
							description: 'Action to perform onClose. By default, this is handled by the component itself.'
						},
						{
							title: 'children',
							type: 'ReactElement | ReactElement[]',
							description: 'Worth a mention: can be a single ReactElement or an array of ReactElement. If it is an array, this will enable the multi-page banner.'
						}]} />
				</section>
			</Card>
		</section>
	);
}

export default DocumentationBanner;
