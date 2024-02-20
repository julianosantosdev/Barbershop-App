import { ChevronLeftIcon, MenuIcon, MapPinIcon, StarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Barbershop } from '@prisma/client';
import Link from 'next/link';

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  return (
    <div>
      <div className='relative h-[250px] w-full'>
        <Button
          size={'icon'}
          variant={'outline'}
          className='absolute left-2 top-2 z-50'
        >
          <Link href={`/`}>
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size={'icon'}
          variant={'outline'}
          className='absolute right-2 top-2 z-50'
        >
          <MenuIcon />
        </Button>

        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          style={{ objectFit: 'cover' }}
          className='opacity-70'
          priority={true}
        />
      </div>
      <div className='border-b border-solid border-secondary px-5 pb-6 pt-3'>
        <h1 className='text-xl font-bold '>{barbershop.name}</h1>

        <div className='mt-2 flex items-center gap-1'>
          <MapPinIcon className='text-primary' size={18} />
          <p className='text-sm'>{barbershop.address}</p>
        </div>

        <div className='mt-2 flex items-center gap-1'>
          <StarIcon className='text-primary' size={18} />
          <p className='text-sm'>5,0 (90 avaliações)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
