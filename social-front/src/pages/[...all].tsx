import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import Page from "components/layout/Page";
import PageLogin from "components/authen/PageLogin";

const DefaultPageUnAuthen = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, []);
  return (
    <Page>
      <PageLogin />
    </Page>
  );
};

export default DefaultPageUnAuthen;
