import Image from 'next/image';
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoLogoReact,
} from 'react-icons/io5';
import { SidebarItem } from './SidebarItem';

const menuItems = [
  {
    path: '/dashboard/main',
    title: 'Dashboard',
    subtitle: 'Visualización',
    icon: <IoBrowsersOutline size={40} />,
  },
  {
    path: '/dashboard/counter',
    title: 'Counter',
    subtitle: 'Contador Client Side',
    icon: <IoCalculator size={40} />,
  },
  {
    path: '/dashboard/pokemons',
    title: 'Pokemons',

    subtitle: 'Generación estática',
    icon: <IoFootball size={40} />,
  },
];

export const Sidebar = () => {
  return (
    <>
      <div
        id="menu"
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-100 left-0 overflow-y-scroll"
      >
        <div id="logo" className="my-4 px-6">
          <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
            <IoLogoReact />
            <span>Dash</span>
            <span className="text-blue-500">8</span>.
          </h1>
          <p className="text-slate-500 text-sm">Manage your actions and activities</p>
        </div>
        <div id="profile" className="px-6 py-10">
          <p className="text-slate-500">Welcome back,</p>
          <a href="#" className="inline-flex space-x-2 items-center">
            <span>
              <Image
                className="rounded-full w-8 h-8"
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                alt="user avatar"
                width={50}
                height={50}
              />
            </span>
            <span className="text-sm md:text-base font-bold">Pablo Galiardi</span>
          </a>
        </div>
        <div id="nav" className="w-full px-6">
          {menuItems.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
