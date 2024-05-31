import Image from "next/image";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";


export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, João!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE ',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
      
      <div className="px-5 mt-6">
        <Search/>
      </div>

      <div className="px-5 mt-6">
        <div className="text-xs uppercase text-gray-400 mb-3 font-bold">Agendamentos</div>
        <BookingItem />
      </div>
    </div>
  );
}
