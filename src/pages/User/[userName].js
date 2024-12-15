import { useRouter } from "next/router";
import React from "react";

const DynamicPage = () => {
  const route = useRouter();
  return <div>This Page belongs to {route?.query?.userName}</div>;
};

export default DynamicPage;
