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
        <CardContent className='px-1 pt-1 pb-2'>
          <div className='relative w-full h-[159px]'>
            <div className='absolute top-2 left-1 z-10'>
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
            <h2 className='font-bold mt-2 overflow-hidden text-ellipsis text-nowrap'>
              {barbershopData.name}
            </h2>
            <p className='text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap'>
              {barbershopData.address}
            </p>
          </div>

          {/* TODO: If all works, delete button */}
          {/* <Button variant="secondary" className="w-full mt-3" onClick={() => { handleBookingClick() }}>
            Reservar
          </Button> */}

          <div className='flex mt-3'>
            <Link
              className='w-full flex justify-center p-2 bg-gray-800 rounded text-gray-400 hover:bg-primary hover:text-gray-950'
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
