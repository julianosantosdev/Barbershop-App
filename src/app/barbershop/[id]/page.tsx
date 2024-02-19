import BarberShopServicesItem from '@/components/barbershop/barbershop-services';
import db from '../../../../prisma/client';
import BarbershopInfo from '@/components/barbershop/barbershop-info';

interface barbershopParamsProps {
  params: {
    id?: string;
  };
}

const BarbershopDetails = async ({ params }: barbershopParamsProps) => {
  if (!params.id) return null;

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    },
    include: {
      Service: true
    }
  });

  if (!barbershop) return null;

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
      <div className='px-5 flex flex-col gap-4 py-6'>
        {barbershop.Service.map((service) => (
          <BarberShopServicesItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetails;
