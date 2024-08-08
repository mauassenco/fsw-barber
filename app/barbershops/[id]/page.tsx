import { Button } from '@/app/_components/ui/button';
import { db } from '@/app/_lib/prisma';
import { ChevronLeft, MapPinIcon, MenuIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BarberShopPageProps {
  params: {
    id: string;
  };
}

const BarberShopPage = async ({ params }: BarberShopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div>
      {/* Image */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeft />
          </Link>
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>

      {/* Barbershop Info */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon size={18} className="text-primary" />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <StarIcon size={18} className="fill-primary text-primary" />
          <p className="text-sm">{barbershop.address}</p>
        </div>
      </div>

      {/* Barbershop Description */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop.description}</p>
      </div>
    </div>
  );
};

export default BarberShopPage;
