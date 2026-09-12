import { A } from "@solidjs/router";
import { AiOutlineHome } from "solid-icons/ai";
import { BsMusicNoteList } from "solid-icons/bs";
import { CgMoreO, CgProfile } from "solid-icons/cg";
import { FaSolidDoorOpen, FaSolidKey } from "solid-icons/fa";
import { type Component, For } from "solid-js";

import IconLink from "@/components/IconLink";
import ProfileMenu from "@/components/Sidebar/_ProfileMenu";
import type { Link } from "@/types";

const links: Link[] = [
  { href: "/", icon: ({ size }) => <AiOutlineHome size={size} />, label: "Home" },
  { href: "/profile", icon: ({ size }) => <CgProfile size={size} />, label: "Profile" },
  { href: "/more", icon: ({ size }) => <CgMoreO size={size} />, label: "More" },
  /*
  { icon: ({ size }) => <IoNotificationsCircleOutline size={size} />, label: "Notifications", href: "/notifications" },
  { icon: ({ size }) => <RiMapCompassDiscoverLine size={size} />, label: "Discover", href: "/discover" }
   */
  { href: "/sign-in", icon: ({ size }) => <FaSolidDoorOpen size={size} />, label: "Sign-in" },
  { href: "/sign-up", icon: ({ size }) => <FaSolidKey size={size} />, label: "Sign-up" },
];

const Sidebar: Component = () => {
  return (
    <header class="flex h-full w-20 flex-col items-center justify-between border-r-1 border-gray-700 px-2 xl:w-60">
      <div>
        <A class="w-full hover:text-yellow-300" href="/">
          <div class="flex flex-row items-center justify-start p-2">
            <BsMusicNoteList color="#FDE047" size={32} />
            <h1 class="mx-6 hidden text-4xl xl:block">Echo</h1>
          </div>
        </A>
        <nav>
          <For each={links}>
            {(link) => (
              <div class="my-2">
                <IconLink
                  href={link.href}
                  icon={{ component: link.icon, size: 24 }}
                  label={link.label}
                />
              </div>
            )}
          </For>
        </nav>
      </div>
      <ProfileMenu />
    </header>
  );
};

export default Sidebar;
