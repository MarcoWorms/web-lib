import	React, {ReactElement}	from	'react';
import	IconCross				from	'../icons/IconCross';
import	IconChevron				from	'../icons/IconChevron';
import performBatchedUpdates	from	'../utils/performBatchedUpdates';
import type * as AlertTypes		from	'./Alert.d';

function	AlertBanner({
	title,
	children,
	level = 'info',
	maxHeight = 'max-h-[300px]',
	canClose = true,
	isVisible = true,
	onClose
}: AlertTypes.TAlertBanner): ReactElement {
	const	[shouldRender, set_shouldRender] = React.useState(isVisible);
	const	[isLocalVisible, set_isLocalVisible] = React.useState(isVisible);
	const	[currentSlide, set_currentSlide] = React.useState(0);
	const	hasSlide = (children as ReactElement).type === undefined;
	const	infoClassName = 'text-primary-500 bg-primary-100 border-primary-500';
	const	warningClassName = 'text-yellow-900 bg-yellow-300 border-yellow-900';
	const	errorClassName = 'text-pink-900 bg-pink-300 border-pink-900';
	const	criticalClassName = 'text-red-900 bg-red-300 border-red-900';
	const	alertClassName = level === 'critical' ? criticalClassName : level === 'warning' ? warningClassName : level === 'error' ? errorClassName : infoClassName;

	React.useEffect((): void => {
		if (isVisible) {
			performBatchedUpdates((): void => {
				set_isLocalVisible(true);
				set_shouldRender(true);
			});
		} else {
			set_isLocalVisible(false);
			setTimeout((): void => set_shouldRender(false), 650);
		}
	}, [isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

	function	onTryToClose(): void {
		if (onClose) {
			onClose();
		} else {
			set_isLocalVisible(false);
			setTimeout((): void => set_shouldRender(false), 650);
		}
	}

	function	renderPreviousChevron(): ReactElement {
		if (currentSlide === 0)
			return (<IconChevron className={'h-4 w-4 cursor-not-allowed opacity-50'} />);
		return (
			<IconChevron
				className={'h-4 w-4 cursor-pointer'}
				onClick={(): void => set_currentSlide(currentSlide - 1)} />
		);
	}

	function	renderNextChevron(): ReactElement {
		if (currentSlide === (children as ReactElement[]).length - 1)
			return (<IconChevron className={'h-4 w-4 rotate-180 cursor-not-allowed opacity-50'} />);
		return (
			<IconChevron
				className={'h-4 w-4 rotate-180 cursor-pointer'}
				onClick={(): void => set_currentSlide(currentSlide + 1)} />
		);
	}

	if (!shouldRender && canClose) {
		return <div />;
	}
	return (
		<div
			className={`transition-max-height duration-600 overflow-hidden ${isLocalVisible ? maxHeight : 'max-h-0'}`}>
			<div className={`alertBanner--wrapper rounded-default relative flex flex-col border-2 p-6 ${alertClassName} ${hasSlide ? 'pb-8' : 'pb-6'}`}>
				{canClose ? (
					<button onClick={onTryToClose} className={'absolute top-4 right-4'}>
						<IconCross className={'h-6 w-6 cursor-pointer'} />
					</button>
				) : null}
				<h4 className={'mb-6 text-inherit'}>{title}</h4>
				{hasSlide ? (children as ReactElement[])[currentSlide] : children}
				{hasSlide ? <div className={'absolute right-4 bottom-2 flex flex-row items-center space-x-2'}>
					{renderPreviousChevron()}
					<p className={'text-sm tabular-nums'}>{`${currentSlide + 1}/${(children as ReactElement[]).length}`}</p>
					{renderNextChevron()}
				</div> : null}
			</div>
		</div>
	);
}

export {AlertBanner};