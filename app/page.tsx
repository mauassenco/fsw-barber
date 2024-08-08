import { SearchIcon } from 'lucide-react';
import Header from './_components/Header';
import { Button } from './_components/ui/button';
import { Input } from './_components/ui/input';
import Image from 'next/image';
import { Card, CardContent } from './_components/ui/card';
import { Badge } from './_components/ui/badge';
import { Avatar } from './_components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { db } from './_lib/prisma';
import BarbershopItem from './_components/BarberShopItem';

const Home = async () => {
  const barbershop = await db.barbershop.findMany({});

  return (
    <>
      {/* Header */}
      <Header />
      {/* Text */}
      <div className="p-5">
        <h2 className="text-xl font-semibold">Olá, Maurício</h2>
        <p>Segunda-feira, 5 de agosto</p>

        {/* Search */}
        <div className="mt-6 flex items-center gap-2">
          <Input type="text" placeholder="Pesquisar" />
          <Button size="icon">
            <SearchIcon />
          </Button>
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
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card className="rounded-xl">
          <CardContent className="flex justify-between p-0">
            {/* Left */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p>Barbearia FWS</p>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-3xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        {/* Recomendations */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
