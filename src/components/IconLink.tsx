import { A } from "@solidjs/router";
import type { Component } from "solid-js";

type IconLinkProperties = {
  href: string;
  icon: {
    component: Component;
    size: number;
  };
  label: string;
};

const IconLink: Component<IconLinkProperties> = (properties) => {
  return (
    <A class="w-full" href={properties.href}>
      <div class="flex flex-row items-center justify-start rounded-2xl p-2 transition duration-200 hover:bg-gray-800">
        <div>{properties.icon.component({ size: properties.icon.size })}</div>
        <div class="mx-4 hidden truncate text-2xl xl:block">
          <span class="truncate">{properties.label}</span>
        </div>
      </div>
    </A>
  );
};

export default IconLink;
