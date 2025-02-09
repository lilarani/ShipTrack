import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
  const { createNewUser } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    createNewUser(email, password)
      .then(result => {
        console.log(result.user);
        toast.success('Your account has been created successfully! ');
        e.target.reset();
      })
      .catch(error => {
        toast.error('Failed account created!');
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
          <label>Photo-URL</label>
          <input type="text" placeholder="photo-url" name="photo" />
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

export default SignUp;
