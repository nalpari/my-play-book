import React from 'react'

export default function Inputs() {
  return (
    <>
      <div>
        <label
          for="input1"
          class="text-sm text-gray-700 block mb-1 font-medium"
        >
          Password
        </label>
        <input
          type="password"
          name="input1"
          id="input1"
          value="testing"
          class="bg-red-50 border border-red-400 rounded py-1 px-3 block focus:ring-red-500 focus:border-red-500 text-gray-700"
          placeholder="Enter your password"
        />
        <div class="flex items-center mt-1 text-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="ml-1 text-xs">Use atleast 1 number</p>
        </div>
      </div>

      <div>
        <label
          for="input1"
          class="text-sm text-gray-700 block mb-1 font-medium"
        >
          Password
        </label>
        <input
          type="password"
          name="input1"
          id="input1"
          value="testing"
          class="bg-yellow-50 border border-yellow-400 rounded py-1 px-3 block focus:ring-yellow-500 focus:border-yellow-500 text-gray-700"
          placeholder="Enter your password"
        />
        <div class="flex items-center mt-1 text-yellow-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="ml-1 text-xs">Weak Password</p>
        </div>
      </div>

      <div>
        <label
          for="input1"
          class="text-sm text-gray-700 block mb-1 font-medium"
        >
          Password
        </label>
        <input
          type="password"
          name="input1"
          id="input1"
          value="testing"
          class="bg-green-50 border border-green-400 rounded py-1 px-3 block focus:ring-green-500 focus:border-green-500 text-gray-700"
          placeholder="Enter your password"
        />
        <div class="flex items-center mt-1 text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="ml-1 text-xs">Secure Password</p>
        </div>
      </div>
    </>
  )
}
