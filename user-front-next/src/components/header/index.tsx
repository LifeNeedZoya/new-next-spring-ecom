"use client";

import { AuthButton, ModeToggle, Search } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CategoryDropdown } from "./dropdown";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex my-2 w-screen items-center border-b mx-auto top-0 fixed visible lg:px-40 md:px-20  justify-between">
      <span className="flex justify-center items-center flex-grow">
        <Link href={"/"}>
          <Image
            src={"/ebay-logo.png"}
            width={"130"}
            height={"60"}
            priority
            alt="Logo"
          />
        </Link>
        <CategoryDropdown isOpen={isOpen} toggleDropDown={toggleDropDown} />
        <Search />
      </span>
      <span className="flex justify-center items-center gap-2 mx-2">
        <AuthButton />
        <ModeToggle />
      </span>
    </div>
  );
};
