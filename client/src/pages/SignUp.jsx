import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-yellow-200 rounded-xl text-blue-600">
              Avenue
            </span>
            The Blog App
          </Link>
          <p className="mt-5 text-sm">
            Welcome to Avenue! Your companion in the blogging. Start you journey
            by continuing with your email and password or with Google login.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button
              gradientDuoTone="tealToLime"
              className="bg-gradient-to-r  hover:from-teal-500 hover:to-lime-500 rounded"
              type="submit"
            >
              SignUp
            </Button>
          </form>
          <div className="flex gap-2 mt-2 text-sm">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-600">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
