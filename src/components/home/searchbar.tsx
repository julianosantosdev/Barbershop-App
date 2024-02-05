import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <>
      <div className="flex item-center">
        <Input placeholder="Procurar uma barbearia..." />
        <Button variant={"default"} size={"icon"}>
          <SearchIcon size={18} />
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
