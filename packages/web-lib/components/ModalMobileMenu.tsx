import	React, {ReactElement, ReactNode}	from	'react';
import	toast								from	'react-hot-toast';
import	{Dialog, Transition}				from	'@headlessui/react';
import	{useWeb3}							from	'../contexts/useWeb3';
import	{truncateHex}						from	'../utils/utils';
import	chains								from	'../utils/chains';
import	IconWalletMetamask					from	'../icons/IconWalletMetamask';
import	IconWalletWalletConnect				from	'../icons/IconWalletWalletConnect';
import	IconWalletCoinbase					from	'../icons/IconWalletCoinbase';
import	type {TModalMobileMenu}				from	'./ModalMobileMenu.d';

function	Modal({isOpen, onClose, className = '', children}: any): ReactElement {
	const	ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;

	return (
		<Transition.Root show={isOpen} as={React.Fragment}>
			<Dialog
				as={'div'}
				className={'fixed inset-0 overflow-y-auto'}
				style={{zIndex: 9999}}
				initialFocus={ref}
				onClose={onClose}>
				<div className={`${className} flex min-h-screen items-end justify-end px-0 pt-4 pb-0 text-center sm:block sm:p-0`}>
					<Transition.Child
						as={React.Fragment}
						enter={'ease-out duration-300'} enterFrom={'opacity-0'} enterTo={'opacity-100'}
						leave={'ease-in duration-200'} leaveFrom={'opacity-100'} leaveTo={'opacity-0'}>
						<Dialog.Overlay className={`${className} yearn--modal-overlay`} />
					</Transition.Child>

					<span className={'hidden sm:inline-block sm:h-screen sm:align-bottom'} aria-hidden={'true'}>
						&#8203;
					</span>
					<Transition.Child
						as={React.Fragment}
						enter={'ease-out duration-200'}
						enterFrom={'opacity-0 translate-y-full'}
						enterTo={'opacity-100 translate-y-0'}
						leave={'ease-in duration-200'}
						leaveFrom={'opacity-100 translate-y-0'}
						leaveTo={'opacity-0 translate-y-full'}>
						<div ref={ref} className={`${className} yearn--modal`}>
							{children}
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

function	ModalMobileMenu({
	isOpen,
	onClose,
	shouldUseWallets = true,
	shouldUseNetworks = true,
	children
}: TModalMobileMenu): ReactElement {
	const	{chainID, onSwitchChain, isActive, address, ens, onDesactivate, onConnect, options} = useWeb3();
	const	[walletIdentity, set_walletIdentity] = React.useState('Connect a wallet');
	const	[optionsForSelect, set_optionsForSelect] = React.useState<number[]>([]);

	React.useEffect((): void => {
		if (!isActive && address) {
			if (ens) {
				set_walletIdentity(ens);
			} else {
				set_walletIdentity(truncateHex(address, 4));
			}
		} else if (ens) {
			set_walletIdentity(ens);
		} else if (address) {
			set_walletIdentity(truncateHex(address, 4));
		} else {
			set_walletIdentity('Connect a wallet');
		}
	}, [ens, address, isActive]);

	function	renderNotActive(): ReactNode {
		if (shouldUseWallets && !isActive && !address) {
			return (
				<div className={'grid grid-cols-3 gap-2 p-2'}>
					<div
						onClick={(): void => {
							onConnect(
								0,
								(): string => toast.error('Unsupported network. Please use Ethereum mainnet.'),
								(): void => undefined
							);
						}}
						className={'yearn--modalMobileMenu-walletCard'}>
						<IconWalletMetamask style={{width: 40, height: 40}} />
						<b className={'mt-4 text-sm text-neutral-500'}>{'Metamask'}</b>
					</div>
					<div
						onClick={(): void => {
							onConnect(
								1,
								(): string => toast.error('Unsupported network. Please use Ethereum mainnet.'),
								(): void => undefined
							);
						}}
						className={'yearn--modalMobileMenu-walletCard'}>
						<IconWalletWalletConnect style={{width: 40, height: 40}} />
						<b className={'mt-4 text-sm text-neutral-500'}>{'Wallet Connect'}</b>
					</div>
					<div
						onClick={(): void => {
							onConnect(
								4,
								(): string => toast.error('Unsupported network. Please use Ethereum mainnet.'),
								(): void => undefined
							);
						}}
						className={'yearn--modalMobileMenu-walletCard'}>
						<IconWalletCoinbase style={{width: 40, height: 40}} />
						<b className={'mt-4 text-sm text-neutral-500'}>{'Coinbase'}</b>
					</div>
				</div>
			);
		}
		return null;
	}

	React.useEffect((): void => {
		const	allChainsID = (options?.supportedChainID || [1]).filter((id: number): boolean => ![1337, 31337].includes(id))
		const	noDuplicates = [...new Set(allChainsID)];
		set_optionsForSelect(noDuplicates);
	}, [options]);

	return (
		<Modal
			isOpen={isOpen}
			onClose={(): void => onClose()}>
			<div className={'yearn--modalMobileMenu-content'}>
				{shouldUseWallets ? <h4 className={'yearn--modalMobileMenu-title'}>
					{walletIdentity === 'Connect a wallet' ? walletIdentity : `Hello ${walletIdentity}`}
				</h4> : null}
				{shouldUseNetworks ? <div className={'yearn--modalMobileMenu-networkIndicator'}>
					<span>
						{'You are connected to'}
						<label
							htmlFor={'network'}
							className={'yearn--modalMobileMenu-select'}>
							<select
								name={'network'}
								id={'network'}
								onChange={(e): void => onSwitchChain(Number(e?.target?.value), true)}
								className={'yearn--select-no-arrow yearn--select-reset !pr-6 text-sm'}>
								{optionsForSelect.map((id: number): ReactElement => (
									<option key={id} selected={chainID === id} value={id}>
										{chains[id as keyof typeof chains]?.displayName || `Unknown chain (${id})`}
									</option>
								))}
							</select>
							<div className={'yearn--modalMobileMenu-chevron'}>
								<svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 448 512'}>
									<path d={'M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z'} fill={'currentcolor'} />
								</svg>
							</div>
						</label>
					</span>
				</div> : null}
				{!shouldUseWallets || walletIdentity === 'Connect a wallet' ? null : <div className={'yearn--modalMobileMenu-logout'}>
					<svg
						onClick={onDesactivate}
						xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'}>
						<path d={'M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256V32C224 14.33 238.3 0 256 0C273.7 0 288 14.33 288 32V256zM80 256C80 353.2 158.8 432 256 432C353.2 432 432 353.2 432 256C432 201.6 407.3 152.9 368.5 120.6C354.9 109.3 353 89.13 364.3 75.54C375.6 61.95 395.8 60.1 409.4 71.4C462.2 115.4 496 181.8 496 255.1C496 388.5 388.5 496 256 496C123.5 496 16 388.5 16 255.1C16 181.8 49.75 115.4 102.6 71.4C116.2 60.1 136.4 61.95 147.7 75.54C158.1 89.13 157.1 109.3 143.5 120.6C104.7 152.9 80 201.6 80 256z'} fill={'currentcolor'} />
					</svg>
				</div>}
			</div>
			<div>
				{renderNotActive()}
			</div>
			{children ? (
				<>
					{shouldUseNetworks || shouldUseWallets ? <div className={'yearn--modalMobileMenu-separatorWrapper'}>
						<div className={'yearn--modalMobileMenu-separator'} />
					</div> : null}
					<div className={'yearn--modalMobileMenu-childrenWrapper'}>
						{children}
					</div>
				</>
			) : <div className={'yearn--modalMobileMenu-childrenWrapper'} />}
		</Modal>
	);
}

export {ModalMobileMenu};