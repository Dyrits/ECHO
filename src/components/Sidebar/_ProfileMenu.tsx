import { A } from "@solidjs/router";
import { FiMoreHorizontal } from "solid-icons/fi";
import { RiDeviceShutDownLine } from "solid-icons/ri";
import type { Component } from "solid-js";

import { user } from "@/App";
import Popup, { Position } from "@/components/Popup/Popup";

const ProfileMenu: Component = () => {
  return (
    <Popup.Box>
      <Popup.Content position={Position.Top}>
        <A class="block w-full" href="/sign-out" role="menuitem">
          <div class="flex flex-row items-center justify-center rounded-2xl p-3 transition duration-200 hover:bg-gray-700 xl:justify-start">
            <div class="flex shrink-0 flex-col">
              <RiDeviceShutDownLine size={24} />
            </div>
            <div class="mx-4 hidden truncate text-lg xl:block">
              <span class="truncate">Sign-out</span>
            </div>
          </div>
        </A>
      </Popup.Content>
      <Popup.Trigger>
        <span class="flex w-full flex-row items-center justify-center rounded-3xl p-3 transition duration-200 hover:bg-gray-800 xl:justify-start">
          <span class="h-10 w-10 shrink-0 overflow-visible">
            <img alt={user.name} class="rounded-full" src={user.avatar} />
          </span>
          <span class="hidden flex-grow flex-row items-center justify-between xl:flex">
            <span class="mx-3 font-bold">{user.name}</span>
            <span>
              <FiMoreHorizontal />
            </span>
          </span>
        </span>
      </Popup.Trigger>
    </Popup.Box>
  );
};

export default ProfileMenu;
