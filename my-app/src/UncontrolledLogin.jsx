const UncontrolledLogin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const remember = event.target.elements.namedItem("remember").checked;

    const data = {
      username,
      password,
      remember,
    };

    console.log(data);
  };

  return (
    <>
      <h2>Sign In</h2>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="username" />
        <br></br>
        <br></br>
        <input name="password" placeholder="password" />
        <br></br>
        <br></br>
        <button>Login</button>
        <button type="reset">RESET</button>
        <hr></hr>
        <input type="checkbox" name="remember" />
        <label htmlFor="remember">Remember me!</label>
      </form>
    </>
  );
};

export default UncontrolledLogin;
