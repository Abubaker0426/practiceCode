// import { Helmet } from 'react-helmet-async';
// import PropTypes from 'prop-types';

// /**
//  * A reusable component for managing SEO meta tags across your website
//  * 
//  * @param {Object} props - Component props
//  * @param {string} props.title - Page title
//  * @param {string} [props.description] - Page description
//  * @param {string} [props.keywords] - Comma-separated keywords
//  * @param {string} [props.ogTitle] - Custom Open Graph title (falls back to title if not provided)
//  * @param {string} [props.ogDescription] - Custom Open Graph description (falls back to description if not provided)
//  * @param {string} [props.ogImage] - URL to the Open Graph image
//  * @param {string} [props.ogType] - Open Graph type (default: website)
//  * @param {string} [props.twitterCard] - Twitter card type (default: summary_large_image)
//  * @param {string} [props.twitterTitle] - Custom Twitter title
//  * @param {string} [props.twitterDescription] - Custom Twitter description
//  * @param {string} [props.twitterImage] - URL to the Twitter image
//  * @param {string} [props.canonicalUrl] - Canonical URL for this page
//  * @param {string} [props.lang] - Language code (default: en)
//  * @param {string} [props.author] - Content author
//  * @param {string} [props.themeColor] - Theme color for mobile browsers
//  * @param {Object} [props.structuredData] - Structured data for rich results (JSON-LD)
//  * @param {string} [props.robots] - Robots meta tag content
//  * @returns {JSX.Element} - The Helmet component with all specified meta tags
//  */
// function SEOMetaTags({
//   title,
//   description,
//   keywords,
//   ogTitle,
//   ogDescription,
//   ogImage,
//   ogType = 'website',
//   twitterCard = 'summary_large_image',
//   twitterTitle,
//   twitterDescription,
//   twitterImage,
//   canonicalUrl,
//   lang = 'en',
//   author,
//   themeColor,
//   structuredData,
//   robots,
//   children
// }) {
//   // Website name - move to constants or environment variables in a real app
//   const siteName = 'Your Website Name';
  
//   // Format the full title with site name
//   const fullTitle = title ? `${title} | ${siteName}` : siteName;
  
//   // Use provided custom values or fallback to standard ones
//   const finalOgTitle = ogTitle || title || siteName;
//   const finalOgDescription = ogDescription || description;
//   const finalTwitterTitle = twitterTitle || finalOgTitle;
//   const finalTwitterDescription = twitterDescription || finalOgDescription;
//   const finalTwitterImage = twitterImage || ogImage;

//   return (
//     <Helmet>
//       {/* Basic Meta Tags */}
//       <html lang={lang} />
//       <title>{fullTitle}</title>
//       {description && <meta name="description" content={description} />}
//       {keywords && <meta name="keywords" content={keywords} />}
//       {author && <meta name="author" content={author} />}
//       {robots && <meta name="robots" content={robots} />}
//       {themeColor && <meta name="theme-color" content={themeColor} />}
      
//       {/* Open Graph / Facebook */}
//       <meta property="og:site_name" content={siteName} />
//       <meta property="og:type" content={ogType} />
//       <meta property="og:title" content={finalOgTitle} />
//       {finalOgDescription && <meta property="og:description" content={finalOgDescription} />}
//       {ogImage && <meta property="og:image" content={ogImage} />}
//       {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
//       {/* Twitter */}
//       <meta name="twitter:card" content={twitterCard} />
//       <meta name="twitter:title" content={finalTwitterTitle} />
//       {finalTwitterDescription && <meta name="twitter:description" content={finalTwitterDescription} />}
//       {finalTwitterImage && <meta name="twitter:image" content={finalTwitterImage} />}
      
//       {/* Canonical URL */}
//       {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
//       {/* JSON-LD Structured Data */}
//       {structuredData && (
//         <script type="application/ld+json">
//           {JSON.stringify(structuredData)}
//         </script>
//       )}
      
//       {/* Additional custom tags */}
//       {children}
//     </Helmet>
//   );
// }

// // PropTypes for documentation and validation
// SEOMetaTags.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   keywords: PropTypes.string,
//   ogTitle: PropTypes.string,
//   ogDescription: PropTypes.string,
//   ogImage: PropTypes.string,
//   ogType: PropTypes.string,
//   twitterCard: PropTypes.string,
//   twitterTitle: PropTypes.string,
//   twitterDescription: PropTypes.string,
//   twitterImage: PropTypes.string,
//   canonicalUrl: PropTypes.string,
//   lang: PropTypes.string,
//   author: PropTypes.string,
//   themeColor: PropTypes.string,
//   structuredData: PropTypes.object,
//   robots: PropTypes.string,
//   children: PropTypes.node
// };


// export default SEOMetaTags;


// this code above is very good and correct but now i done have much detail about the company/web-sit


import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * SEO Meta Tags component for LaundryFYZ website
 */
function SEOMetaTags({
  title,
  description,
  keywords,
  ogImage = '/images/laundryfyz-og-image.jpg', // Default image path - update with your actual image
  canonicalUrl,
  structuredData,
  children
}) {
  // Website name
  const siteName = 'LaundryFYZ';
  
  // Format the full title with site name
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="LaundryFYZ" />
      
      {/* Location Meta Tags */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.2048;55.2708" /> {/* Approximate Dubai coordinates */}
      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional custom tags */}
      {children}
    </Helmet>
  );
}

// PropTypes for documentation and validation
SEOMetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  canonicalUrl: PropTypes.string,
  structuredData: PropTypes.object,
  children: PropTypes.node
};

export default SEOMetaTags;



// very improtent topic and the code 
