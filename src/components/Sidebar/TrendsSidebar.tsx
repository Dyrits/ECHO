import { type Component, For } from "solid-js";

import { randomize } from "@/utilities";

type Trend = {
  category: string;
  title: string;
  echoes: number;
};

// Hardcoded trends~
const trends: Trend[] = [
  {
    category: "Sports",
    echoes: randomize(1000, 5000),
    title: "UEFA Champions League",
  },
  {
    category: "Finance",
    echoes: randomize(1000, 5000),
    title: "Bitcoin",
  },
  {
    category: "Gaming",
    echoes: randomize(1000, 5000),
    title: "Valorant",
  },
  {
    category: "Technology",
    echoes: randomize(1000, 5000),
    title: "Apple",
  },
  {
    category: "Movies",
    echoes: randomize(1000, 5000),
    title: "The Batman",
  },
  {
    category: "Music",
    echoes: randomize(1000, 5000),
    title: "Drake",
  },
];

const TrendsSidebar: Component = () => {
  return (
    <div class="flex flex-col overflow-hidden rounded-2xl bg-gray-800">
      <div class="flex flex-col p-4">
        <span class="text-xl font-bold">Trends</span>
      </div>
      <For each={trends}>
        {(trend) => (
          <div class="flex cursor-pointer flex-col p-4 transition duration-200 hover:bg-gray-700">
            <div class="flex flex-col">
              <span class="text-sm text-gray-400">{trend.category}</span>
              <span class="text-lg font-bold">{trend.title}</span>
              <span class="text-sm text-gray-400">{trend.echoes} echoes</span>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default TrendsSidebar;
