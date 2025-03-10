"use client";

import { Button, Input } from "@/components";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type LoginFormType = {
  email: string;
  password: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const OnSubmit: SubmitHandler<LoginFormType> = async ({
    password,
    email,
  }) => {
    setLoading(true);

    try {
      await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error) {
      toast("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error === "CredentialsSignin") {
      toast("Email or password is incorrect");
    }
  }, [error]);

  return (
    <div className="max-w-md mx-auto mt-16 p-8 border rounded-lg shadow-lg ">
      <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit(OnSubmit)} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          required
          defaultValue={"testing@gmail.com"}
          className="w-full"
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="w-full"
          defaultValue={"pass1234"}
        />
        <Button
          type="submit"
          className="w-full py-2  transition duration-200"
          disabled={loading}
        >
          {loading ? "Loading.." : "Login"}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <a
          href="/forgot-password"
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default Page;
