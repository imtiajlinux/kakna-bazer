const handelChange = (users, setusers, e) => {
  const name = e.target.name;
  const value = e.target.value;
  return setusers({ ...users, [name]: value });
};
export default handelChange;
