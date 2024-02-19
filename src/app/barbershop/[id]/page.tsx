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
    }
  });

  if (!barbershop) return null;

  return <BarbershopInfo barbershop={barbershop} />;
};

export default BarbershopDetails;
