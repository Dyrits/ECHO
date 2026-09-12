import { FaRegularImage } from "solid-icons/fa";
import { type Component, createSignal, createUniqueId, For } from "solid-js";

import { user } from "@/App";
import EchoPost from "@/components/Echo/EchoPost";
import MainLayout from "@/layouts/MainLayout";
import type { Echo } from "@/types";

const HomePage: Component = () => {
  const [message, setMessage] = createSignal<string>(String());
  const [echoes, setEchoes] = createSignal<Echo[]>([]);

  const createEcho = async () => {
    if (message()) {
      const echo: Echo = {
        author: user,
        content: message(),
        date: new Date(),
        id: createUniqueId(),
        likes: 0,
        murmurs: [],
      };
      setEchoes([...echoes(), echo]);
      setMessage(String());
    }
  };

  return (
    <MainLayout>
      <div class="flex flex-row px-4 py-1">
        <div class="mr-4 flex flex-col">
          <div class="h-12 w-12 cursor-pointer overflow-visible transition duration-200 hover:opacity-80">
            <img alt="avatar" class="rounded-full" src={user.avatar}></img>
          </div>
        </div>
        {/* MESSENGER START */}
        <div class="flex flex-grow flex-col">
          <div class="flex flex-col">
            <textarea
              class="block w-full resize-none overflow-hidden !border-none border-transparent bg-transparent p-0 text-xl text-gray-100 !outline-none focus:border-transparent focus:ring-0"
              id="echo"
              name="content"
              onInput={($event) => {
                setMessage($event.currentTarget.value);
              }}
              placeholder={"Voice your thoughts..."}
              rows="1"
              value={message()}
            />
          </div>
          <div class="mb-1 flex flex-row items-center xs:justify-between">
            <label
              class="mr-3 mt-3 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white transition focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:bg-blue-400/10 hover:text-blue-400"
              title="Add an image"
            >
              <FaRegularImage aria-hidden="true" size={18} />
              <span class="sr-only">Add an image</span>
              <input accept="image/*" class="sr-only" name="image" type="file" />
            </label>
            <div class="mt-3 flex w-32 cursor-pointer flex-col">
              <button
                aria-label="Send an echo"
                class="flex flex-col rounded-full bg-blue-400 px-4 py-2 font-bold text-white transition duration-200 hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-400"
                onClick={createEcho}
                type="button"
              >
                <div class="flex flex-row items-start justify-center text-sm font-bold text-white">
                  <span>Send an echo</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* MESSENGER END */}
      </div>
      <div class="my-1 h-px bg-gray-700" />
      <For each={echoes()}>{(echo) => <EchoPost echo={echo} />}</For>
    </MainLayout>
  );
};

export default HomePage;
