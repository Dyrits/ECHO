import type { ParentComponent } from "solid-js";

import { Sidebar, TrendsSidebar } from "../components/Sidebar";

const MainLayout: ParentComponent = ({ children }) => {
  return (
    <div class="flex h-screen w-full justify-between bg-gray-900 text-gray-100">
      <header class="shrink-0">
        <Sidebar />
      </header>
      <main class="min-w-0 flex-1">{children}</main>
      <aside class="hidden shrink-0 xl:block">
        <TrendsSidebar />
      </aside>
    </div>
  );
};

export default MainLayout;
