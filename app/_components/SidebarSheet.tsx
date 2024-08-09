import { CalendarIcon, HomeIcon, LogOutIcon } from 'lucide-react';
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { quickSearchOptions } from '../_constants/search';
import Image from 'next/image';
import { Avatar, AvatarImage } from './ui/avatar';
import Link from 'next/link';

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid py-5">
        <Avatar>
          <AvatarImage src="https://as2.ftcdn.net/v2/jpg/05/11/55/91/1000_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg" />
        </Avatar>
        <div>
          <p className="font-bold">Nome do caboclo</p>
          <p className="text-xs">emaildocaboclo@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-4 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              src={option.imageUrl}
              alt={option.title}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-2 py-5">
        <Button className="justify-start gap-2" variant="ghost">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
