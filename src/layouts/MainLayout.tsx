import type { ParentComponent } from "solid-js";

import { Sidebar, TrendsSidebar } from "../components/Sidebar";

const MainLayout: ParentComponent = ({ children }) => {
  return (
    <div class="flex h-screen w-full justify-between bg-gray-900 text-gray-100">
      <header>
        <Sidebar />
      </header>
      <main class="flex-grow">{children}</main>
      <aside>
        <TrendsSidebar />
      </aside>
    </div>
  );
};

export default MainLayout;
