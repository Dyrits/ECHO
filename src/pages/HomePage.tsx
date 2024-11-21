import { Component, createSignal, createUniqueId, For } from "solid-js";
import { FaRegularImage } from "solid-icons/fa";

import { Echo } from "@/types";
import { user } from "@/App";
import MainLayout from "@/layouts/MainLayout";
import EchoPost from "@/components/Echo/EchoPost";

const HomePage: Component = () => {
  const [message, setMessage] = createSignal<string>(String());
  const [echoes, setEchoes] = createSignal<Echo[]>([]);

  const createEcho = async () => {
    if (message()) {
      const echo: Echo = {
        id: createUniqueId(),
        author: user,
        date: new Date(),
        content: message(),
        likes: 0,
        murmurs: []
      };
      setEchoes([...echoes(), echo]);
      setMessage(String());
    }
  };

  return (
    <MainLayout>
      <div class="flex-it py-1 px-4 flex-row">
        <div class="flex-it mr-4">
          <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
            <img
              class="rounded-full"
              src={user.avatar}
              alt="avatar"
            ></img>
          </div>
        </div>
        {/* MESSENGER START */}
        <div class="flex-it flex-grow">
          <div class="flex-it">
            <textarea
              value={message()}
              onInput={$event => {
                setMessage($event.currentTarget.value);
              }}
              name="content"
              rows="1"
              id="echo"
              class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
              placeholder={"Voice your thoughts..."}
            />
          </div>
          <div class="flex-it mb-1 flex-row xs:justify-between items-center">
            <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
              <div class="upload-btn-wrapper">
                <FaRegularImage class="cursor-pointer" size={18} />
                <input type="file" name="myfile" />
              </div>
            </div>
            <div class="flex-it w-32 mt-3 cursor-pointer">
              <button
                onClick={createEcho}
                type="button"
                class="disabled:cursor-not-allowed disabled:bg-gray-400 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
              >
                <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
                  <span>Send an echo</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* MESSENGER END */}
      </div>
      <div class="h-px bg-gray-700 my-1" />
      <For each={echoes()}>{echo => <EchoPost echo={echo} />}</For>
    </MainLayout>
  );
}

export default HomePage;