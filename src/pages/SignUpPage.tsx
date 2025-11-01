import { A } from "@solidjs/router";
import type { Component } from "solid-js";

const SignUpPage: Component = () => {
  return (
    <div class="flex-it justify-center items-center h-full">
      <div class="text-white text-4xl font-bold">Echo | Sign-up</div>
      <div class="mt-10 flex-it h-100 xs:w-100 w-full bg-white p-10 rounded-2xl">
        <div class="flex-it">
          <form class="flex-it">
            <div class="flex-it overflow-hidden sm:rounded-md">
              <div class="flex-it">
                <div class="flex-it">
                  <div class="flex-it py-2">
                    <label class="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      id="fullName"
                      name="fullName"
                      type="text"
                    />
                    <div class="flex-it grow text-xs bg-red-400 text-white p-3 pl-3 mt-1 rounded-md">Error Error Beep Beep!</div>
                  </div>

                  <div class="flex-it py-2">
                    <label class="block text-sm font-medium text-gray-700">Nick Name</label>
                    <input
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      id="nickName"
                      name="nickName"
                      type="text"
                    />
                  </div>

                  <div class="flex-it py-2">
                    <label class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      id="email"
                      name="email"
                      type="text"
                    />
                  </div>

                  <div class="flex-it py-2">
                    <label class="block text-sm font-medium text-gray-700">Avatar</label>
                    <input
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      id="avatar"
                      name="avatar"
                      type="text"
                    />
                  </div>

                  <div class="flex-it py-2">
                    <label class="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      id="password"
                      name="password"
                      type="password"
                    />
                  </div>

                  <div class="flex-it py-2">
                    <label class="block text-sm font-medium text-gray-700">Password Confirmation</label>
                    <input
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      id="passwordConfirmation"
                      name="passwordConfirmation"
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <div class="text-sm text-gray-600 pb-4">
                Already Registered?{" "}
                <A class="hover:underline" href="/sign-in">
                  Sign-in
                </A>
              </div>
              <div class="flex-it py-2">
                <button
                  class="
                  bg-blue-400 hover:bg-blue-500 focus:ring-0
                  disabled:cursor-not-allowed disabled:bg-gray-400
                  inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2"
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
