import { Input } from "@/components/ui";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <span className="flex items-center ring-1 ring-primary rounded-full w-full px-1">
      <SearchIcon spacing={1} className="m-1" />
      <Input
        type={"search"}
        className={cn(
          "rounded-full border-none shadow-none focus-visible:ring-0"
        )}
        placeholder="Search your need"
      />
    </span>
  );
};
