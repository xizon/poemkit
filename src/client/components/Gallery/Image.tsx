import React, { Component } from 'react';

type ImageProps = {
	/** Specifies the path to the image */
	url?: string | undefined;
	/** Specifies an alternate and title text for the image */
	title?: string | boolean | undefined;
};
type ImageState = false;


export default class Image extends Component<ImageProps, ImageState> {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const { 
			url,
			title
		} = this.props;
		
	
		return (
		  <>

			<li className="poemkit-gallery__item">
				<figure>
					<img src={url} alt={title as string}/>		
					{title && (title as string).length > 0 && typeof(title) !== 'undefined' ? <><figcaption>{title}</figcaption></> : ''}
				</figure>                                
			</li>
 
		
		  </>
		)
	}
}
