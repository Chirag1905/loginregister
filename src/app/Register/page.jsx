'use client'
import Image from "next/image";
import Link from "next/link";
import googlelogo from "../../../public/google-logo.png"
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailResponse = await fetch("http://localhost:8000/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!emailResponse.ok) {
        throw new Error("Failed to fetch user data");
      }
      const users = await emailResponse.json();

      const user = users.find((user) => user.email === email);
      if (user) {
        toast.error("User Already Exists");
        return;
      }

      const registerResponse = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (registerResponse.ok) {
        toast.success("Registration successful")
        setEmail("");
        setPassword("");
      } else {
        throw new Error("Failed to register user");
      }
    } catch (error) {
      toast.error("Registration error");
    }
  };
  return (
    <>
      <ToastContainer draggable />
      {/* <GoogleOAuthProvider clientId="800292796336-o35at56rl6kag22nglo59ol7ab88f2ud.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwtDecode(credentialResponse.credential);
            console.log(details);
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider> */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src={googlelogo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2
                  
                  
                  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="border-b border-eeeef3 w-1/3"></div>
              <span className="mx-4 text-gray-500 font-bold">or</span>
              <div className="border-b border-eeeef3 w-1/3"></div>
            </div>

            <button className="flex w-full items-center justify-center rounded-md bg-white text-gray-800 px-3 py-1.5 KKtext-sm font-semibold hover:bg-red-100 border border-gray-300">
              <Image
                className="h-8 w-8 mr-2"
                src={googlelogo}
                alt="Your Company"
              />
              Continue With Google
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign In
            </Link>
          </p>
        </div>
      </div >
    </>
  )
}
