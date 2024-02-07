"use-client";

import BookingItem from "@/components/common/booking-item";
import Header from "@/components/common/header";
import SearchBar from "@/components/home/searchbar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import db from "../../prisma/client";
import BarbershopItem from "@/components/home/barbershop-item";

export default async function Home() {
  const barbershopList = await db.barbershop.findMany();
  return (
    <>
      <Header />
      <main>
        <section className="px-5 pt-5">
          <h2 className="text-xl font-bold">Olá, User</h2>
          <p className=" capitalize text-sm">
            {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
          </p>
        </section>

        <section className="px-5 mt-6">
          <SearchBar />
        </section>

        <section className="px-5 mt-6">
          <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
            Agendamentos
          </h2>
          <BookingItem />
        </section>

        <section className="mt-6">
          <h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">
            Recomendados
          </h2>

          <div className="px-5 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershopList.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershopData={barbershop} />
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">
            Populares
          </h2>

          <div className="px-5 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden mb-20">
            {barbershopList.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershopData={barbershop} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
