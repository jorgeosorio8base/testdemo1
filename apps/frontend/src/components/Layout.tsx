import { Sidebar, SidebarProps } from './Sidebar';
import { CubeIcon } from '@heroicons/react/24/outline';
import React from 'react';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const sidebarGroups: SidebarProps['groups'] = [
    {
      items: [
        {
          label: 'Home',
          href: '/',
          startContent: <CubeIcon />,
        },
      ],
    },
    {
      title: 'Tables',
      items: [],
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar groups={sidebarGroups} />
      <div className="ml-[4rem] w-[calc(100%-4rem)] flex-1 bg-gray-50 p-4">
        {children}
      </div>
    </div>
  );
}
