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
    <header class="xl:w-60 w-20 h-full px-2 flex flex-col items-center justify-between border-r-1 border-gray-700">
      <div>
        <a href="#">
          <A class="w-full hover:text-yellow-300" href={String()}>
            <div class="flex p-2 flex-row justify-start items-center">
              <BsMusicNoteList color={"FDE047"} size={32} />
              <h1 class="mx-6 text-4xl xl:block hidden ">Echo</h1>
            </div>
          </A>
        </a>
        <nav>
          <For each={links}>
            {(link) => (
              <div class="my-2">
                <IconLink href={link.href} icon={{ component: link.icon, size: 24 }} label={link.label} />
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
