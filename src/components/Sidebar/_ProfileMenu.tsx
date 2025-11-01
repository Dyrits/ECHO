import { FiMoreHorizontal } from "solid-icons/fi";
import type { Component } from "solid-js";
import { user } from "@/App";
import Popup from "@/components/Popup/Popup";

const ProfileMenu: Component = () => {
  return (
    <Popup.Provider>
      <Popup.Content>
        <div class="flex-it w-20 h-20 fixed bg-black bottom-10 popup">Lorem ipsum dolor sit amet.</div>
      </Popup.Content>
      <Popup.Trigger>
        <div class="flex-it my-3 hover:cursor-pointer">
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
    </Popup.Provider>
  );
};

export default ProfileMenu;
