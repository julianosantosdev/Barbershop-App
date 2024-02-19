'use-client';

import BookingItem from '@/components/common/booking-item';
import Header from '@/components/common/header';
import SearchBar from '@/components/home/searchbar';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import db from '../../prisma/client';
import BarbershopItem from '@/components/home/barbershop-card';
import BarbershopCard from '@/components/home/barbershop-card';

export default async function Home() {
  const barbershopList = await db.barbershop.findMany();
  return (
    <>
      <Header />
      <main>
        <section className='px-5 pt-5'>
          <h2 className='text-xl font-bold'>Olá, User</h2>
          <p className=' text-sm capitalize'>
            {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
          </p>
        </section>

        <section className='mt-6 px-5'>
          <SearchBar />
        </section>

        <section className='mt-6 px-5'>
          <h2 className='mb-3 text-xs font-bold uppercase text-gray-400'>
            Agendamentos
          </h2>
          <BookingItem />
        </section>

        <section className='mt-6'>
          <h2 className='mb-3 px-5 text-xs font-bold uppercase text-gray-400'>
            Recomendados
          </h2>

          <div className='flex gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden'>
            {barbershopList.map((barbershop) => (
              <BarbershopCard key={barbershop.id} barbershopData={barbershop} />
            ))}
          </div>
        </section>

        <section className='mt-6'>
          <h2 className='mb-3 px-5 text-xs font-bold uppercase text-gray-400'>
            Populares
          </h2>

          <div className='mb-20 flex gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden'>
            {barbershopList.map((barbershop) => (
              <BarbershopCard key={barbershop.id} barbershopData={barbershop} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
