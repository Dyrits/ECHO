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
      <div class="flex p-2 flex-row justify-start items-center rounded-2xl hover:bg-gray-800 transition duration-200">
        <div>{properties.icon.component({ size: properties.icon.size })}</div>
        <div class="mx-4 text-2xl truncate xl:block hidden">
          <span class="truncate">{properties.label}</span>
        </div>
      </div>
    </A>
  );
};

export default IconLink;
