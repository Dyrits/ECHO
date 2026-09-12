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
      <div class="flex flex-row py-1 px-4">
        <div class="flex flex-col mr-4">
          <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
            <img alt="avatar" class="rounded-full" src={user.avatar}></img>
          </div>
        </div>
        {/* MESSENGER START */}
        <div class="flex flex-col flex-grow">
          <div class="flex flex-col">
            <textarea
              class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
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
          <div class="flex flex-row mb-1 xs:justify-between items-center">
            <div class="flex flex-col mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
              <div class="upload-btn-wrapper">
                <FaRegularImage class="cursor-pointer" size={18} />
                <input name="myfile" type="file" />
              </div>
            </div>
            <div class="flex flex-col w-32 mt-3 cursor-pointer">
              <button
                class="disabled:cursor-not-allowed disabled:bg-gray-400 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex flex-col transition duration-200"
                onClick={createEcho}
                type="button"
              >
                <div class="flex flex-row text-sm font-bold text-white items-start justify-center">
                  <span>Send an echo</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* MESSENGER END */}
      </div>
      <div class="h-px bg-gray-700 my-1" />
      <For each={echoes()}>{(echo) => <EchoPost echo={echo} />}</For>
    </MainLayout>
  );
};

export default HomePage;
