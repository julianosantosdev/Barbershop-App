import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Barbershop } from '@prisma/client';
import { Badge } from '../ui/badge';
import { StarIcon } from 'lucide-react';
import Link from 'next/link';

interface barbershopData {
  barbershopData: Barbershop;
}

const BarbershopCard = ({ barbershopData }: barbershopData) => {
  return (
    <>
      <Card className='min-w-[167px] max-w-[167px] rounded-2xl'>
        <CardContent className='px-1 pb-2 pt-1'>
          <div className='relative h-[159px] w-full'>
            <div className='absolute left-1 top-2 z-10'>
              <Badge variant='secondary' className='flex items-center gap-2'>
                <StarIcon size={12} className='fill-primary text-primary' />
                <span className='text-gray-300'>5,0</span>
              </Badge>
            </div>
            <Image
              src={barbershopData.imageUrl}
              fill
              alt={barbershopData.name}
              className='w-full rounded-xl'
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className='px-2'>
            <h2 className='mt-2 overflow-hidden text-ellipsis text-nowrap font-bold'>
              {barbershopData.name}
            </h2>
            <p className='overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400'>
              {barbershopData.address}
            </p>
          </div>

          {/* TODO: If all works, delete button */}
          {/* <Button variant="secondary" className="w-full mt-3" onClick={() => { handleBookingClick() }}>
            Reservar
          </Button> */}

          <div className='mt-3 flex'>
            <Link
              className='flex w-full justify-center rounded bg-gray-800 p-2 text-gray-400 hover:bg-primary hover:text-gray-950'
              href={`/barbershop/${barbershopData.id}`}
            >
              Reservar
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BarbershopCard;
