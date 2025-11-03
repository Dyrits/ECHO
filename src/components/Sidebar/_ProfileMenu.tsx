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
        <A class="flex-it items-start flex-grow w-full" href={"/sign-out"}>
          <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200">
            <div class="flex-it">
              <RiDeviceShutDownLine size={24} />
            </div>
            <div class="mx-4 text-2xl truncate xl:block hidden">
              <span class="truncate">Sign-out</span>
            </div>
          </div>
        </A>
      </Popup.Content>
      <Popup.Trigger>
        <div class="flex-it m-3 hover:cursor-pointer">
          <div class="flex-it items-center flex-row p-3 rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200 cursor-pointer">
            <div class="flex-it">
              <div class="w-10 h-10 overflow-visible">
                <img class="rounded-full" src={user.avatar}></img>
              </div>
            </div>
            <div class="flex-it xl:flex hidden flex-grow flex-row justify-between items-center">
              <div class="flex-it mx-3 font-bold">{user.name}</div>
              <div class="flex-it">
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
        </div>
      </Popup.Trigger>
    </Popup.Box>
  );
};

export default ProfileMenu;
