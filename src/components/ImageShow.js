function ImageShow({ image }) {
	return (
		<img
			src={image.urls.small}
			alt={image.alt_description}
			title={image.alt_description}
		/>
	);
}

export default ImageShow;
