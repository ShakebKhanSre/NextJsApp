import { useRouter } from "next/router";
import React, { useEffect } from "react";

const useUser = () => ({ user: null, loading: false });

const Dynamic = () => {
  const route = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user.user == null) {
      // route.replace("/");
    }
  }, [route, user.user]);

  return (
    <div>
      <h1>This page belongs to {route?.query?.userName}</h1>
      <button
        onClick={(e) =>
          route.push({
            pathname: "/User1/[userName]/settings",
            query: { userName: route?.query?.userName },
          })
        }
      >
        Open settings Page
      </button>
      <button onClick={(e) => route.replace("/")}>Go Home</button>
      <button onClick={() => route.reload()}>Reload</button>
    </div>
  );
};

export default Dynamic;
