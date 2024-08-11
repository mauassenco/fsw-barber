import Header from './_components/Header';
import { Button } from './_components/ui/button';
import Image from 'next/image';
import { db } from './_lib/prisma';
import BarbershopItem from './_components/BarberShopItem';
import { quickSearchOptions } from './_constants/search';
import BookingItem from './_components/BoookingItem';
import HeaderGeetings from './_components/HeaderGeetings';
import Search from './_components/Search';
import Link from 'next/link';

const Home = async () => {
  const barbershop = await db.barbershop.findMany({});
  const popularBarbershop = await db.barbershop.findMany({
    orderBy: {
      name: 'desc',
    },
  });

  return (
    <>
      {/* Header */}
      <Header />
      {/* Text */}
      <div className="p-5">
        <HeaderGeetings />

        {/* Search */}
        <div className="mt-6">
          <Search />
        </div>

        {/* Quick Search */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              key={option.title}
              className="gap-2"
              variant="secondary"
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner1.png"
            alt="Agende com os melhores no FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Appointments */}
        <BookingItem />

        {/* Recomendations */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* Populars */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
