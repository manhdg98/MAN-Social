import Router, { useRouter } from "next/router";
import "antd/dist/antd.css";
import "../public/styles/styles.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { store } from "../redux/store";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("MAN-Social-Token");
    if (!token) {
      router.push("/");
    } else {
      if (router.pathname === "/") {
        router.push("/profile");
      }
    }
  }, []);
  return <Component {...pageProps} />;
}

export default store.withRedux(MyApp);
