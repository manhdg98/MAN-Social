import Router, { useRouter } from "next/router";
import 'antd/dist/antd.css';
import "../styles/styles.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { wrapper } from '../redux/store';
import * as gtag from "lib/gtag";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("MAN-Social-Token");
        if (!token) {
            router.push("/");
        } else {
            if(router.pathname === '/') {
                router.push("/profile");
            }
        }
    }, []);
    return <Component {...pageProps} />
}

Router.events.on("routeChangeComplete", url => gtag.pageview(url));

export default wrapper.withRedux(MyApp);