import Image from 'next/image';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';

const Header = () => {
  return (
    <header>
      <Card className={'flex flex-row items-center justify-between px-5 py-8'}>
        <Image src='/logo.png' alt='BarberShop' width={130} height={22} />
        <Button variant={'outline'} size={'icon'}>
          <MenuIcon />
        </Button>
      </Card>
    </header>
  );
};

export default Header;
