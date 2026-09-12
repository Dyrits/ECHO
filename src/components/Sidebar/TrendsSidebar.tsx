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
    <div class="bg-gray-800 overflow-hidden flex flex-col rounded-2xl">
      <div class="flex flex-col p-4">
        <span class="text-xl font-bold">Trends</span>
      </div>
      <For each={trends}>
        {(trend) => (
          <div class="flex flex-col p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
            <div class="flex flex-col">
              <span class="text-gray-400 text-sm">{trend.category}</span>
              <span class="text-lg font-bold">{trend.title}</span>
              <span class="text-gray-400 text-sm">{trend.echoes} echoes</span>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default TrendsSidebar;
