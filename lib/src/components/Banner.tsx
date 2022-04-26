import	React, {ReactElement}	from	'react';
import	IconCross				from	'../icons/IconCross';
import	IconChevron				from	'../icons/IconChevron';
import	useLocalStorage			from	'../hooks/useLocalStorage';


type TBanner = {
	id: string,
	title?: string,
	content?: string,
	primaryButton?: ReactElement,
	secondaryButton?: ReactElement,
	children: ReactElement | ReactElement[],
	canClose?: boolean,
	onClose?: () => void,
	onClick?: () => void,
	maxHeight?: string,
	variant?: 'default' | 'image' | 'split' | 'background'
}


function	Banner({
	id,
	title,
	content,
	children,
	variant = 'default',
	maxHeight = 'max-h-[300px]',
	canClose = true,
	onClose
}: TBanner): ReactElement {
	const	[shouldRender, set_shouldRender] = useLocalStorage(id, true) as [boolean, (b: boolean) => void];
	const	[isVisible, set_isVisible] = React.useState(true);
	const	[currentSlide, set_currentSlide] = React.useState(0);
	const	hasSlide = (children as ReactElement).type === undefined;
	const	defaultClassName = 'text-primary bg-secondary border-primary';
	const	imageClassName = 'text-alert-warning-primary bg-alert-warning-secondary border-alert-warning-primary';
	const	splitClassName = 'text-alert-error-primary bg-alert-error-secondary border-alert-error-primary';
	const	backgroundClassName = 'text-alert-critical-primary bg-alert-critical-secondary border-alert-critical-primary';
	const	bannerClassName = variant === 'image' ? imageClassName : variant === 'split' ? splitClassName : variant === 'background' ? backgroundClassName : defaultClassName;

	React.useEffect((): void => {
		if (!isVisible) {
			setTimeout((): void => set_shouldRender(false), 650);
		}
	}, [isVisible]);

	function	onTryToClose(): void {
		if (onClose) {
			onClose();
		} else {
			set_isVisible(false);
		}
	}

	function	renderPreviousChevron(): ReactElement {
		if (currentSlide === 0)
			return (<IconChevron className={'w-4 h-4 opacity-50 cursor-not-allowed'} />);
		return (
			<IconChevron
				className={'w-4 h-4 cursor-pointer'}
				onClick={(): void => set_currentSlide(currentSlide - 1)} />
		);
	}

	function	renderNextChevron(): ReactElement {
		if (currentSlide === (children as ReactElement[]).length - 1)
			return (<IconChevron className={'w-4 h-4 opacity-50 rotate-180 cursor-not-allowed'} />);
		return (
			<IconChevron
				className={'w-4 h-4 rotate-180 cursor-pointer'}
				onClick={(): void => set_currentSlide(currentSlide + 1)} />
		);
	}

	if (!shouldRender && canClose) {
		return <div />;
	}
	return (
		<div
			className={`transition-max-height overflow-hidden duration-600 ${isVisible ? maxHeight : 'max-h-0'}`}>
			<div className={`Banner--wrapper flex relative flex-col p-6 rounded-lg border-2 ${bannerClassName} ${hasSlide ? 'pb-8' : 'pb-6'}`}>
				{canClose ? (
					<button onClick={onTryToClose} className={'absolute top-4 right-4'}>
						<IconCross className={'w-6 h-6 cursor-pointer'} />
					</button>
				) : null}
				<h4 className={'mb-6 text-inherit'}>{title}</h4>
				{hasSlide ? (children as ReactElement[])[currentSlide] : children}
				{hasSlide ? <div className={'flex absolute right-4 bottom-2 flex-row items-center space-x-2'}>
					{renderPreviousChevron()}
					<p className={'text-sm tabular-nums'}>{`${currentSlide + 1}/${(children as ReactElement[]).length}`}</p>
					{renderNextChevron()}
				</div> : null}
			</div>
		</div>
	);
}

export {Banner};