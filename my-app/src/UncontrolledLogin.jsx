const UncontrolledLogin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    //these are the ways  can access the current value of the username and password inputs

    //first
    // const username = event.target.elements.namedItem("username").value;
    // const password = event.target.elements.namedItem("password").value;
    // const remember = event.target.elements.namedItem("remember").checked;

    //second
    // const username = event.target.elements.username.value;
    // const password = event.target.elements.password.value;
    // const remember = event.target.elements.remember.checked;

    //third
    // const username = event.target.username.value;
    // const password = event.target.password.value;
    // const remember = event.target.remember.checked;

    //4th
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };
    console.log(data);

    //What is the standard API for accessing form data in the DOM?
    //The standard API for accessing form data in the DOM is the FormData object.

    //Are there non-standard APIs that can be used to access the form data?
    //there are no widely recognized non-standard APIs for accessing form data
    //it's best practice to use the standard FormData API for accessing form data when working with web forms.
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
