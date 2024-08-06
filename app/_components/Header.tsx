import { MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

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
        <Button size={'icon'} variant={'outline'}>
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
