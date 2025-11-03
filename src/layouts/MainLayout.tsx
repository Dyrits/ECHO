import type { ParentComponent } from "solid-js";

import { Sidebar, TrendsSidebar } from "../components/Sidebar";

const MainLayout: ParentComponent = ({ children }) => {
  return (
    <div class="w-full h-screen bg-gray-900 text-gray-100 flex justify-between">
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
