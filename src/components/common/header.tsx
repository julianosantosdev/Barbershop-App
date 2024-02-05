import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header>
      <Card className={"px-5 py-8 justify-between flex flex-row items-center"}>
        <Image src="/logo.png" alt="BarberShop" width={130} height={22} />
        <Button variant={"outline"} size={"icon"}>
          <MenuIcon />
        </Button>
      </Card>
    </header>
  );
};

export default Header;
