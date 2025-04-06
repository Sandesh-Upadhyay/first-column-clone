
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopHeader from "@/components/TopHeader";
import ProfileSecurity from "@/components/ProfileSecurity";
import { securityItems } from "@/data/securityData";

const Index = () => {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopHeader />
        
        <main className="flex-1 overflow-y-auto bg-slate-100">
          <ProfileSecurity securityItems={securityItems} />
        </main>
      </div>
    </div>
  );
};

export default Index;
