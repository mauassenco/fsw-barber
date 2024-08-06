import { SearchIcon } from 'lucide-react';
import Header from './_components/Header';
import { Button } from './_components/ui/button';
import { Input } from './_components/ui/input';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-semibold">Olá, Maurício</h2>
        <p>Segunda-feira, 5 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input type="text" placeholder="Pesquisar" />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner1.png"
            alt="Agende com os melhores no FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
