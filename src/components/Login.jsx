import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../features/AuthSlice";

const Login = ({ settoggle }) => {
const dispatch = useDispatch();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    console.log("Login Data:", data);

 dispatch(setUser(data));
    const { email, password } = JSON.parse(localStorage.getItem("CurrentUser"));

    if (email === data.email && password === data.password) {
      navigate("/home");
      alert("User logged in successfully!");
    } else {
      alert("User not found!");
    }
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-slate-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md px-8 py-10 bg-black/40 backdrop-blur-md border border-gray-700 rounded-2xl"
      >
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-white mb-1">Welcome back</h2>
        <p className="text-gray-400 mb-8">Sign in to continue</p>

        {/* Email */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-600 text-white py-2 outline-none focus:border-white transition"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-b border-gray-600 text-white py-2 outline-none focus:border-white transition"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between mb-8">
          <label className="flex items-center gap-2 text-gray-400 text-sm">
            <input
              type="checkbox"
              className="accent-white"
              {...register("remember")}
            />
            Remember me
          </label>

          <span className="text-sm text-gray-400 cursor-pointer hover:text-white transition">
            Forgot password?
          </span>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Sign In
        </button>

        {/* Footer */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => settoggle((prev) => !prev)}
            className="text-white cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
