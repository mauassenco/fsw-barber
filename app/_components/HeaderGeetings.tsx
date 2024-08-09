'use client';

import { useSession } from 'next-auth/react';

const HeaderGeetings = () => {
  const { data } = useSession();
  return (
    <>
      <h2 className="text-xl font-semibold">
        Olá
        {data?.user ? `, ${data.user.name}` : ''}
      </h2>
      <p>Segunda-feira, 5 de agosto</p>
    </>
  );
};

export default HeaderGeetings;
