'use client';

import React, { startTransition } from 'react';
import Container from '../ui/Container';
import Logo from '@/assets/icons/Logo';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Menu } from '@headlessui/react';

const NavBar = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const locales = [
    { code: 'en', label: 'EN' },
    // { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
  ];

  function handleLocaleChange(nextLocale: string) {
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  }

  return (
    <Container className="z-10">
      <div className="flex items-center justify-between text-white z-10">
        <Logo className="w-[120px] h-9 lg:w-[220px] lg:h-16" />

        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex justify-center items-center gap-1 rounded-md bg-gray-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700 transition">
            {locale.toUpperCase()}
          </Menu.Button>

          <Menu.Items className="absolute right-0 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-clip">
            {locales.map((loc) => (
              <Menu.Item key={loc.code}>
                {({ active }) => (
                  <button
                    onClick={() => handleLocaleChange(loc.code)}
                    className={`${active ? 'bg-gray-100' : ''
                      } w-full px-4 py-2 text-left text-sm text-gray-900`}
                  >
                    {loc.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </Container>
  );
};

export default NavBar;
