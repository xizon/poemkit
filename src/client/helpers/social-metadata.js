
const socialMetadata = (props) => {

  const { ogTitle, ogDesc, ogUrl, ogImage } = props;

  return `
        <meta property="og:title" content=${ogTitle} key="ogtitle" />
        <meta property="og:description" content=${ogDesc} key="ogdesc" />
        <meta property="og:url" content=${ogUrl} key="ogurl" />
        ${ogImage === '' ? '' : `<meta property="og:image" content=${ogImage} key="ogimage" />`}
    `;
};

export default socialMetadata;