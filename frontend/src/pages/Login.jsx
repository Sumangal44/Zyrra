import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContextConfig";
import axios from 'axios'
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState==='Sign Up') {
        const response = await axios.post(backendUrl+'/api/user/register',{name,email,password})
        // console.log(response.data)
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      }
      else{
        const response = await axios.post(backendUrl+'/api/user/login',{email,password})
        // console.log(response.data)
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)

        }else{
          toast.error(response.data.message)
        }

      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    // console.log("Form submitted!");
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/api/user/forgot-password", { email: forgotEmail });
      if (response.data.success) {
        toast.success(response.data.message);
        setShowForgot(false);
        setForgotEmail("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error sending reset link:", error);
      toast.error("Something went wrong!");
    }
  };

  useEffect(()=>{
if (token) {
  navigate('/')
  
}
  },[token, navigate])
  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Name"
            required
          />
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Password"
          required
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => setShowForgot(true)}
          >
            Forgot your password?
          </p>
          {currentState === "Login" ? (
            <p
              className="cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create an account
            </p>
          ) : (
            <p
              className="cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Already have an account?
            </p>
          )}
        </div>
        <button
          className=" bg-zinc-900 text-white px-8 py-2 font-light mt-4 cursor-pointer"
          type="submit"
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>

      {/* Forgot Password Modal */}
      {showForgot && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg w-[90%] max-w-sm">
            <h2 className="text-xl font-bold mb-4 text-zinc-800">Forgot Password</h2>
            <form onSubmit={handleForgotPassword} className="flex flex-col gap-4">
              <input
                type="email"
                className="border px-3 py-2 rounded"
                placeholder="Enter your email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-zinc-900 text-white px-4 py-2 rounded"
                >
                  Send Reset Link
                </button>
                <button
                  type="button"
                  className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded"
                  onClick={() => setShowForgot(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
