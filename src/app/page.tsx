"use-client";

import BookingItem from "@/components/common/booking-item";
import Header from "@/components/common/header";
import SearchBar from "@/components/home/searchbar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {
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
      </main>
    </>
  );
}
