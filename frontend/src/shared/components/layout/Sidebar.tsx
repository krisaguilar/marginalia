import { NavLink } from 'react-router-dom';

const navigationItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    label: 'Library',
    path: '/library',
  },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r bg-white p-6">
      <h1 className="mb-8 text-2xl font-bold">
        Marginalia
      </h1>

      <nav className="space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-2 ${
                isActive
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}