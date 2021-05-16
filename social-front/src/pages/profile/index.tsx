import React from "react";
import Page from "components/layout/Page";
import { Skeleton } from 'antd';
const Index = () => (
  <Page>
    <Skeleton avatar paragraph={{ rows: 4 }} />
  </Page>
);

export default Index;
