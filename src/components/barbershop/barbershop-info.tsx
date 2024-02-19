'use client';
import { ChevronLeftIcon, MenuIcon, MapPinIcon, StarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Barbershop } from '@prisma/client';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  return (
    <div>
      <div className='h-[250px] w-full relative'>
        <Button
          size={'icon'}
          variant={'outline'}
          className='z-50 absolute top-2 left-2'
        >
          <Link href={`/`}>
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size={'icon'}
          variant={'outline'}
          className='z-50 absolute top-2 right-2'
        >
          <MenuIcon />
        </Button>

        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          style={{ objectFit: 'cover' }}
          className='opacity-70'
        />
      </div>
      <div className='px-5 pt-3 pb-6 border-b border-solid border-secondary'>
        <h1 className='text-xl font-bold '>{barbershop.name}</h1>

        <div className='flex items-center gap-1 mt-2'>
          <MapPinIcon className='text-primary' size={18} />
          <p className='text-sm'>{barbershop.address}</p>
        </div>

        <div className='flex items-center gap-1 mt-2'>
          <StarIcon className='text-primary' size={18} />
          <p className='text-sm'>5,0 (90 avaliações)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
