
import	React, {ReactElement}	from	'react';
import	{Menu, Transition}		from	'@headlessui/react';
import	IconChevron				from	'../icons/IconChevron';

export type TDropdownOption = {
	icon?: ReactElement;
	value: string | number;
	label: string;
}
  
export type TDropdownProps = {
	options: TDropdownOption[];
	defaultOption: TDropdownOption;
	selected: TDropdownOption;
	onSelect: React.Dispatch<React.SetStateAction<TDropdownOption>> | ((option: TDropdownOption) => void);
}

function Dropdown({options, defaultOption, selected, onSelect}: TDropdownProps): ReactElement {
	return (
		<div>
			<Menu as={'menu'} className={'inline-block relative text-left'}>
				{({open}): ReactElement => (
					<>
						<Menu.Button className={'flex justify-between items-center button-light'}>
							<div className={'flex flex-row items-center'}>
								{selected?.icon ? React.cloneElement(selected.icon, {className: 'w-5 h-5 mr-2 min-w-[24px]'}) : null}
								<p className={'font-normal font-roboto text-primary'}>{selected?.label || defaultOption.label}</p>
							</div>
							<IconChevron className={`ml-3 w-4 h-4 transition-transform transform ${open ? '-rotate-90' : '-rotate-180'}`} />
						</Menu.Button>
						<Transition
							as={React.Fragment}
							show={open}
							enter={'transition duration-100 ease-out'}
							enterFrom={'transform scale-95 opacity-0'}
							enterTo={'transform scale-100 opacity-100'}
							leave={'transition duration-75 ease-out'}
							leaveFrom={'transform scale-100 opacity-100'}
							leaveTo={'transform scale-95 opacity-0'}>
							<Menu.Items className={'flex overflow-y-scroll absolute left-0 flex-col mt-1 w-full min-w-fit max-h-60 rounded-lg border-0 bg-background-variant'}>
								{options.map((option): ReactElement => (
									<Menu.Item key={option.value} onClick={(): void => onSelect(option)}>
										{({active}): ReactElement => (
											<div className={`flex flex-row items-center text-primary cursor-pointer py-1 pr-4 pl-3 transition-colors ${active ? 'bg-secondary-variant' : ''}`}>
												{option.icon ? React.cloneElement(option.icon, {className: 'w-5 h-5 mr-2 min-w-[24px]'}) : null}
												<p>{option.label}</p>
											</div>
										)}
									</Menu.Item>
								))}
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		</div>
	);
}

export {Dropdown};