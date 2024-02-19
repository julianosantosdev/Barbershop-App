import { Service } from '@prisma/client';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

interface BarbershopServicesProp {
  service: Service;
}

const BarberShopServicesItem = ({ service }: BarbershopServicesProp) => {
  return (
    <Card>
      <CardContent className='p-3 w-full'>
        <div className='flex items-center gap-4 w-full'>
          <div className='relative min-h-[110px] min-w-[110px]'>
            <Image
              className='rounded-lg'
              src={service.imageUrl}
              alt={service.name}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className='flex flex-col w-full gap-2'>
            <h2 className='font-bold'>{service.name}</h2>
            <p className='text-sm text-gray-400'>{service.description}</p>
            
            <div className='flex items-center justify-between'>

              <p className='text-primary font-bold text-sm mt-2'>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(Number(service.price))}
              </p>

              <Button variant={'secondary'} className=''>
                Agendar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarberShopServicesItem;
