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

    // the FormData API is a powerful tool for handling form data in web applications,
    //  especially for basic to moderately complex forms. 
    //  Its advantages include cross-browser compatibility, ease of use, and support for file uploads.
    //   However, it may not be suitable for very complex forms or for cases where you need advanced validation
    //    or integration with specific JavaScript frameworks. In such cases, using a dedicated form-handling 
    //    library or framework might be a better choice.
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
