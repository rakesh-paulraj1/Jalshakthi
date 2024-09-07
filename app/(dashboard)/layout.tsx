import { Appbar } from '@/components/Appbar';
import React, { ReactNode } from 'react';
type LayoutProps = {
  children: ReactNode;
};

export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <Appbar/>
      <main className="flex-grow mt-16">
        {children}
      </main>
    </div>
  );
};
