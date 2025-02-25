const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <div className="container mx-auto mt-24 min-h-screen">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 w-2/5 mx-auto form ">
          <label className=" ">Name</label>
          <input type="text" placeholder="enter your Name" name="name" />
          <label>Email</label>
          <input type="email" placeholder="enter your email" name="email" />
          <label>Password</label>
          <input
            type="text"
            className=" password"
            name="password"
            placeholder="password"
          />

          <button
            type="submit"
            className="border-orange-400 border font-bold mt-4 text-orange-400  w-fit mx-auto px-6 py-1 hover:text-orange-500 rounded-full "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
