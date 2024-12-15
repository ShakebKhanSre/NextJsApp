import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserList = () => {
  const route = useRouter();
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const data = await fetch("https://dummyjson.com/users");
    setUsers(await data.json());
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users?.users?.length &&
        users.users.map((user) => (
          <Link href={`/UserList/${user?.id}`}>
            <div>{user.lastName}</div>
          </Link>
        ))}
    </div>
  );
};

export default UserList;
