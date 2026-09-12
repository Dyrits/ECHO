import { A } from "@solidjs/router";
import type { Component } from "solid-js";

const SignUpPage: Component = () => {
  return (
    <div class="flex h-full flex-col items-center justify-center">
      <div class="text-4xl font-bold text-white">Echo | Sign-up</div>
      <div class="h-100 mt-10 flex w-full flex-col rounded-2xl bg-white p-10 xs:w-100">
        <div class="flex flex-col">
          <form class="flex flex-col">
            <div class="flex flex-col overflow-hidden sm:rounded-md">
              <div class="flex flex-col">
                <div class="flex flex-col">
                  <div class="flex flex-col py-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Full Name
                      <input
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        id="fullName"
                        name="fullName"
                        type="text"
                      />
                    </label>
                    <div class="mt-1 flex grow flex-col rounded-md bg-red-400 p-3 pl-3 text-xs text-white">
                      Error Error Beep Beep!
                    </div>
                  </div>

                  <div class="flex flex-col py-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Nick Name
                      <input
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        id="nickName"
                        name="nickName"
                        type="text"
                      />
                    </label>
                  </div>

                  <div class="flex flex-col py-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Email
                      <input
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        id="email"
                        name="email"
                        type="text"
                      />
                    </label>
                  </div>

                  <div class="flex flex-col py-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Avatar
                      <input
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        id="avatar"
                        name="avatar"
                        type="text"
                      />
                    </label>
                  </div>

                  <div class="flex flex-col py-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Password
                      <input
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        id="password"
                        name="password"
                        type="password"
                      />
                    </label>
                  </div>

                  <div class="flex flex-col py-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Password Confirmation
                      <input
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        type="password"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div class="pb-4 text-sm text-gray-600">
                Already Registered?{" "}
                <A class="hover:underline" href="/sign-in">
                  Sign-in
                </A>
              </div>
              <div class="flex flex-col py-2">
                <button
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-0 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400"
                  type="button"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
