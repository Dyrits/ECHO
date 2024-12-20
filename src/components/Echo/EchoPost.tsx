import { Component } from "solid-js";
import { FiTrash } from "solid-icons/fi";
import { AiOutlineMessage } from "solid-icons/ai";
import { FaRegularHeart } from "solid-icons/fa";
import { Echo } from "../../types";

import "@/extensions";

type Properties = {
  echo: Echo;
};

const EchoPost: Component<Properties> = (props) => {
  const echo= () => props.echo;
  const user = () => echo().author;

  return (
    <div class="flex-it p-4 border-b-1 border-solid border-gray-700">
      <div class="flex-it flex-row">
        <div class="flex-it mr-4">
          <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
            <img
              class="rounded-full"
              src={user().avatar}
              alt="avatar"
            ></img>
          </div>
        </div>
        <article class="flex-it flex-grow flex-shrink cursor-pointer">
          <div class="flex-it justify-center flex-grow mb-1">
            <div class="flex-it justify-between flex-row w-full">
              <div>
                <span class="font-bold">{echo().author.name}</span>
                <span class="mx-2">&#8226;</span>
                <span class="text-gray-400">{ echo().date.ago() }</span>
              </div>
              <div class="text-gray-400 cursor-pointer transition hover:text-red-400">
                <FiTrash size={16} />
              </div>
            </div>
          </div>
          <div class="flex-it flex-row flex-grow-0 items-center mb-2">
            <div class="flex-it mr-3 mb-3 w-full">{echo().content}</div>
          </div>
          <div class="flex-it flex-row flex-grow text-gray-400">
            <div class="flex-it flex-row items-center cursor-pointer mr-5 transition hover:text-blue-400">
              <AiOutlineMessage size={18} />
              <span class="text-xs ml-3">{echo().murmurs.length}</span>
            </div>
            <div class="flex-it flex-row items-center cursor-pointer transition hover:text-pink-400">
              <FaRegularHeart size={18} />
              <span class="text-xs ml-3">{echo().likes}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default EchoPost;
