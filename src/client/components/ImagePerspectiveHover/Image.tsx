import React, { Component } from 'react';

type ImageProps = {
	/** Specifies the path to the image */
	url?: string | undefined;
	/** Specifies an alternate and title text for the image */
	title?: string | boolean | undefined;
	/** Specify a width */
	width?: number | string | undefined;
};
type ImageState = false;


export default class Image extends Component<ImageProps, ImageState> {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const { 
			url,
			title,
			width
		} = this.props;
		
	
		return (
		  <>

			<img src={url} alt={title as string} width={isNaN(width as any) ? parseFloat(width as string) : width}/>		
			
		  </>
		)
	}
}
