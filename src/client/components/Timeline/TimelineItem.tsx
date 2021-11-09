import React, { Component } from 'react';

type TimelineItemProps = {
	/** Set the position of the time-node */
	nodePosition?: number;
	/** Set an item to activate by default */
	defaultActive?: string | boolean | undefined;
	/** Specifies the path to the image */
	url?: string | undefined;
	/** Specifies a title for each item */
	title?: React.ReactNode | undefined;
	/** Specifies a content for each item */
	content?: React.ReactNode | undefined;
	/** Specifies a time-node for each item */
	node?: React.ReactNode | undefined;
	/** Handling events for collapsing item */
	clickEv?: React.MouseEventHandler<HTMLElement>;
	
};
type TimelineItemState = false;


export default class TimelineItem extends Component<TimelineItemProps, TimelineItemState> {

	constructor(props) {
		super(props);
	}

	render() {

		const {
			nodePosition,
			defaultActive,
			url,
			title,
			content,
			node,
			clickEv
		} = this.props;

		const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' is-active' : '';

		return (
			<>

				<div className={"poemkit-timeline__item" + activedClassName}>
					<div className="poemkit-timeline__item__img poemkit-border--circle poemkit-border--circle-only-img" onClick={clickEv}>
						<img src={url} alt="" />
						{nodePosition === 1 ? <span className="poemkit-timeline__item__date">{node || null}</span> : null}
					</div>

					<div className="poemkit-timeline__item__info">
						{title && title !== '' && typeof(title) !== 'undefined' ? <h3>{title}</h3> : null}
						{content && content !== '' && typeof(content) !== 'undefined' ? <div>{content}</div> : null}

						{nodePosition === 0 ? <span className="poemkit-timeline__item__date">{node || null}</span> : null}
					</div>

					<div className="poemkit-timeline__line"></div>

				</div>

			</>
		)
	}
}
