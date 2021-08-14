import NextHead from "next/head";
import React from "react";

const defaultDescription = "Full-featured template for next.js applications.";
const defaultOGURL = process.env.appUrl;
const defaultOGImage = defaultOGURL + "/static/og-image.png";
const defaultTitle = process.env.appTitle;

export interface HeadProps {
  description?: string;
  ogImage?: string;
  title?: string;
  url?: string;
}

const Head = (props: HeadProps) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || defaultTitle}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <link rel="stylesheet" href="/assests/css/main.min.css" />
    <link rel="stylesheet" href="/assests/css/weather-icons.min.css" />
    <link rel="stylesheet" href="/assests/css/toast-notification.css" />
    <link rel="stylesheet" href="/assests/css/page-tour.css" />
    <link rel="stylesheet" href="/assests/css/style.css" />
    <link rel="stylesheet" href="/assests/css/color.css" />
    <link rel="stylesheet" href="/assests/css/responsive.css" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>

    <script src="/assests/js/main.min.js"></script>
    {/* <script src="/assests/js/jquery-stories.js"></script> */}
    <script src="/assests/js/toast-notificatons.js"></script>
    <script src="../../../cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8c55_YHLvDHGACkQscgbGLtLRdxBDCfI"></script>
    <script src="/assests/js/locationpicker.jquery.js"></script>
    <script src="/assests/js/map-init.js"></script>
    <script src="/assests/js/page-tourintro.js"></script>
    {/* <script src="/assests/js/page-tour-init.js"></script> */}
    <script src="/assests/js/script.js"></script>
  </NextHead>
);

export default Head;
