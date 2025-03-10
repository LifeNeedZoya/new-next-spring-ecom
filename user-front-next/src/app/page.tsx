import { Header } from "@/components";

export default async function Home() {
  return (
    <div className="mx-auto justify-between">
      <Header />
      <h1 className="text-primary font-extrabold block">Hello</h1>
    </div>
  );
}
