"use client";

import { Provider } from 'react-redux';
import store from '@/store';
import { HeroUIProvider } from "@heroui/react";
import AppHeader from '@/components/app.header';
import AppFooter from '@/components/app.footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <HeroUIProvider>
        <div className="min-h-screen flex flex-col">
          <AppHeader />
          <div className="flex-1">{children}</div>
          <AppFooter />
        </div>
      </HeroUIProvider>
    </Provider>
  );
}
