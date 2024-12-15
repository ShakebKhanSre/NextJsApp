import { useRouter } from "next/router";
import React from "react";

const settings = () => {
  const route = useRouter();
  return <div>This is settings page for {route?.query?.userName}</div>;
};

export default settings;
