import { Component, For } from "solid-js";
import { AiOutlineHome } from "solid-icons/ai";
import { CgMoreO, CgProfile } from "solid-icons/cg";
import { IoNotificationsCircleOutline } from "solid-icons/io";
import { RiMapCompassDiscoverLine } from "solid-icons/ri";
import { FiMoreHorizontal } from "solid-icons/fi";

import { user } from "@/App";
import { Link } from "@/types";

const links: Link[] = [
  { icon: ({ size }) => <AiOutlineHome size={size} />, label: "Home", href: "/" },
  { icon: ({ size }) => <CgProfile size={size} />, label: "Profile", href: "/profile" },
  { icon: ({ size }) => <CgMoreO size={size} />, label: "More", href: "/more" },
  { icon: ({ size }) => <IoNotificationsCircleOutline size={size} />, label: "Notifications", href: "/notifications" },
  { icon: ({ size }) => <RiMapCompassDiscoverLine size={size} />, label: "Discover", href: "/discover" }
];

const Sidebar: Component = () => {
  return (
    <header class="lg:flex-grow flex-it items-end">
      <div class="xl:w-80 w-20 flex-it">
        <div class="h-full fixed flex-it top-0">
          <div class="flex-it h-full xl:w-80 w-20 overflow-y-auto px-3 justify-between">
            <div class="flex-it items-start">
              <div class="p-3 pt-4 xl:pb-3 pb-0 xl:text-2xl text-sm font-bold transition duration-200 hover:opacity-80">
                <a href="#">
                  <h1>Echo</h1>
                </a>
              </div>
              <div class="my-1 w-full flex-it">
                <nav class="flex-it items-start">
                  <For each={links}>
                    {link => (
                      <a class="flex-it items-start flex-grow w-full" href={link.href}>
                        <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200">
                          <div class="flex-it">{link.icon({ size: 24 })}</div>
                          <div class="mx-4 text-2xl truncate xl:block hidden">
                            <span class="truncate">{link.label}</span>
                          </div>
                        </div>
                      </a>
                    )}
                  </For>
                </nav>
              </div>
              {/* GLIDER SEND-MESSAGE BUTTON */}
              <div class="my-1 flex-it w-10/12 cursor-pointer">
                <div
                  class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition">
                  <div
                    class="flex-it flex-row text-xl font-bold text-white items-start justify-center truncate duration-200">
                    <div class="block xl:hidden">E</div>
                    <div class="hidden xl:block">Send an echo</div>
                  </div>
                </div>
              </div>
            </div>
            {/* PROFILE MENU */ }
            <div class="flex-it my-3 hover:cursor-pointer">
              {/* POPUP START*/ }
              <div
                class="flex-it items-center flex-row p-3 rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200 cursor-pointer">
                <div class="flex-it">
                  <div class="w-10 h-10 overflow-visible">
                    <img
                      class="rounded-full"
                      src={user.avatar}
                    ></img>
                  </div>
                </div>
                <div class="flex-it xl:flex hidden flex-grow flex-row justify-between items-center">
                  <div class="flex-it mx-3 font-bold">Filip99</div>
                  <div class="flex-it">
                    <FiMoreHorizontal />
                  </div>
                </div>
              </div>
              {/* POPUP END */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
