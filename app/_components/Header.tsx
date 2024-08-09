import { MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Sheet, SheetTrigger } from './ui/sheet';
import SidebarSheet from './SidebarSheet';

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Image
          src={'/logo.svg'}
          alt="FSW Barber logo"
          width={120}
          height={18}
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
