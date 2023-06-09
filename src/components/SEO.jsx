import Head from 'next/head';
import { globalMeta } from '@/data/globalMeta';
const SEO = ({
	title = globalMeta.siteName,
	description = globalMeta.description,
	canonicalUrl = globalMeta.siteUrl,
	locale = globalMeta.siteLocale,
	ogType = globalMeta.ogType,
	ogImgUrl = globalMeta.siteLogo,
	ogImgW = globalMeta.siteLogoW,
	ogImgH = globalMeta.siteLogoH,
	children,
}) => {
	return (
		<Head>
			{/* Open Graph */}
			<meta property='og:type' content={ogType} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:url' content={canonicalUrl} />
			<meta property='og:image' content={ogImgUrl} />
			<meta property='og:image:width' content={ogImgW} />
			<meta property='og:image:height' content={ogImgH} />
			<meta property='og:site_name' content={title} />
			<meta property='og:locale' content={locale}></meta>
			{/* Default */}
			<title>{title}</title>
			<meta name='keywords' content='' />
			<meta name='description' content={description} />
			<link rel='canonical' href={canonicalUrl} />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link rel='icon' href='/favicon.ico' />
			<meta name='theme-color' content='#5865f2' />
			<link rel='manifest' href='/manifest.webmanifest' />
			{children}
		</Head>
	);
};

export default SEO;
