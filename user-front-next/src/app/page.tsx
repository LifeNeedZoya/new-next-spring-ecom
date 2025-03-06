import { Header } from "@/components";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return redirect("/signin");
  }
  return (
    <div className="mx-auto justify-between">
      <Header />
      <h1 className="text-primary font-extrabold block">Hello</h1>
    </div>
  );
}
