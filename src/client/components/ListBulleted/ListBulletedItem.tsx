import React, { Component } from 'react';

type ListBulletedItemProps = {
	/** Sets the marker (such as a disc, character, or custom counter style) of a list item element. */
	type?: string;
	/** Set the display content of the marker, it will change according to different types */
	marker?: React.ReactNode | undefined;
	
};
type ListBulletedItemState = false;


export default class ListBulletedItem extends Component<ListBulletedItemProps, ListBulletedItemState> {

	constructor(props) {
		super(props);
	}

	render() {

		const {
			type,
			marker,
			children
		} = this.props;

		return (
			<>
				<li>
				    {type === 'icon' ? marker : null}
					{type !== 'icon' ? <><strong className="poemkit-typo--h4">{marker}</strong></> : null}
					
					{children}
				</li>
			</>
		)
	}
}
