import React, { Component } from 'react';

type GalleryImageProps = {
	/** Specifies the path to the image */
	url?: string | undefined;
	/** Specifies an alternate and title text for the image */
	title?: string | boolean | undefined;
};
type GalleryImageState = false;


export default class GalleryImage extends Component<GalleryImageProps, GalleryImageState> {
	
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
