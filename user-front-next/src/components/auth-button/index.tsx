import { Button } from "@/components/ui";
import { signOut } from "next-auth/react";

export const AuthButton = async () => {
  // const session = await getSession();

  return (
    <div>
      {/* {session ? ( */}
      <Button onClick={() => signOut()}>Log out</Button>
      {/* ) : ( */}
      <span>
        <Button>Login</Button>
        <Button>Register</Button>
      </span>
      {/* )} */}
    </div>
  );
};
