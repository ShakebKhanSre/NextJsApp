import Link from "next/link";
import styles from "../../../styles/user.module.css";

const UserPage = (props) => {
  return (
    <div>
      <h1>Static Side Rendered : Next Js Principle</h1>
      <div style={{ padding: 50 }}>
        {props.data.users.map((user) => (
          <Link href={`/Static/user/${user.id}`}>
            <div className={styles.background}>{user.firstName}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};

export default UserPage;
