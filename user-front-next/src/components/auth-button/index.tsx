"use client";

import { Button } from "@/components/ui";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const AuthButton = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return session ? (
    <Button onClick={() => signOut()}>Log out</Button>
  ) : (
    <Button
      variant={"secondary"}
      onClick={() => router.push("/login")}
      className="border-none"
    >
      Login
    </Button>
  );
};
