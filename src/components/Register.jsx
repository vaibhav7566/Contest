import { useForm } from "react-hook-form";


const Register = ({settoggle}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register Data:", data);
   

    reset()
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-slate-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md px-8 py-10 bg-black/40 backdrop-blur-md border border-gray-700 rounded-2xl"
      >
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-white mb-1">
          Create account
        </h2>
        <p className="text-gray-400 mb-8">
          Sign up to get started
        </p>

        {/* Full Name */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent border-b border-gray-600 text-white py-2 outline-none focus:border-white transition"
            {...register("name", {
              required: "Full name is required",
            })}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-600 text-white py-2 outline-none focus:border-white transition"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-transparent border-b border-gray-600 text-white py-2 outline-none focus:border-white transition"
            {...register("phone", {
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Enter valid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-8">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-b border-gray-600 text-white py-2 outline-none focus:border-white transition"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters required",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Sign Up
        </button>

        {/* Footer */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <span onClick={() => settoggle(prev => !prev)} className="text-white cursor-pointer hover:underline">
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
