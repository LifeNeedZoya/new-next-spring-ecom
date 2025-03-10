"use client";

import { ISignupForm } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@/components/ui";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z, ZodType } from "zod";

const SignupSchema: ZodType = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<ISignupForm>({
    resolver: zodResolver(SignupSchema),
  });

  const handleSignup: SubmitHandler<ISignupForm> = async ({
    name,
    password,
    email,
  }) => {
    setIsLoading(true);

    try {
      const data = await axios.post("/api/auth/signup", {
        name,
        password,
        email,
      });
      console.log("data", data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[500px] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Sign up
          </CardTitle>
          <CardDescription className="text-center">
            Create an account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true })}
                required
              />
              {errors.name && errors.name.message}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                required
              />
              {errors.email && errors.email.message}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                {...register("password", { required: true })}
                required
              />
              {errors.password && errors.password.message}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-primary font-medium hover:underline"
            >
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
