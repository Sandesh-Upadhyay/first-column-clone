
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { 
  ShieldCheck, 
  Users, 
  Settings, 
  Bell, 
  Lock, 
  Search
} from "lucide-react";

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
};

const NavItem = ({ icon, label, href, active }: NavItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
      active 
        ? "bg-slate-100 text-slate-900 font-medium" 
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const Sidebar = () => {
  return (
    <div className="h-screen w-56 border-r bg-white p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Security App</h2>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-8 pr-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300"
          />
        </div>
      </div>

      <nav className="space-y-1">
        <NavItem icon={<ShieldCheck size={18} />} label="Security" href="/" active />
        <NavItem icon={<Users size={18} />} label="Team" href="/team" />
        <NavItem icon={<Bell size={18} />} label="Alerts" href="/alerts" />
        <NavItem icon={<Lock size={18} />} label="Permissions" href="/permissions" />
        <NavItem icon={<Settings size={18} />} label="Settings" href="/settings" />
      </nav>
    </div>
  );
};

export default Sidebar;
