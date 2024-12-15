import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SpecificUser = () => {
  const route = useRouter();
  const { data, error } = useSWR(
    `https://dummyjson.com/users/${route.query.id}`,
    fetcher
  );
  if (error) {
    return <h1>Error </h1>;
  }
  if (!data) {
    return <h1>loading</h1>;
  }

  return <div>{data?.firstName}</div>;
};

export default SpecificUser;
