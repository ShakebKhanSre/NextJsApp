const UserPage = (props) => {
  return (
    <div>
      <h1>Server Side Rendered</h1>
      <div style={{ padding: 50 }}>
        {props.data.users.map((user) => (
          <li>{user.firstName}</li>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};

export default UserPage;
