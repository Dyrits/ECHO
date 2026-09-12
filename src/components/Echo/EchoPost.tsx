import { AiOutlineMessage } from "solid-icons/ai";
import { FaRegularHeart } from "solid-icons/fa";
import { FiTrash } from "solid-icons/fi";
import type { Component } from "solid-js";

import type { Echo } from "../../types";

import "@/extensions";

type Properties = {
  echo: Echo;
};

const EchoPost: Component<Properties> = (props) => {
  const echo = () => props.echo;
  const user = () => echo().author;

  return (
    <div class="flex flex-col border-b-1 border-solid border-gray-700 p-4">
      <div class="flex flex-row">
        <div class="mr-4 flex flex-col">
          <div class="h-12 w-12 cursor-pointer overflow-visible transition duration-200 hover:opacity-80">
            <img alt="avatar" class="rounded-full" src={user().avatar}></img>
          </div>
        </div>
        <article class="flex flex-shrink flex-grow cursor-pointer flex-col">
          <div class="mb-1 flex flex-grow flex-col justify-center">
            <div class="flex w-full flex-row justify-between">
              <div>
                <span class="font-bold">{echo().author.name}</span>
                <span class="mx-2">&#8226;</span>
                <span class="text-gray-400">{echo().date.ago()}</span>
              </div>
              <div class="cursor-pointer text-gray-400 transition hover:text-red-400">
                <FiTrash size={16} />
              </div>
            </div>
          </div>
          <div class="mb-2 flex flex-grow-0 flex-row items-center">
            <div class="mb-3 mr-3 flex w-full flex-col">{echo().content}</div>
          </div>
          <div class="flex flex-grow flex-row text-gray-400">
            <div class="mr-5 flex cursor-pointer flex-row items-center transition hover:text-blue-400">
              <AiOutlineMessage size={18} />
              <span class="ml-3 text-xs">{echo().murmurs.length}</span>
            </div>
            <div class="flex cursor-pointer flex-row items-center transition hover:text-pink-400">
              <FaRegularHeart size={18} />
              <span class="ml-3 text-xs">{echo().likes}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default EchoPost;
