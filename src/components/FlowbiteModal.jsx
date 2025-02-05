"use client";
import { useEffect } from "react";
import { Modal } from "flowbite";

export default function FlowbiteModal() {
  useEffect(() => {
    import("flowbite").then(() => {
      const modalElement = document.getElementById("example-modal");
      if (modalElement) {
        new Modal(modalElement).init();
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        id="openModalButton"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={() => {
          const modal = document.getElementById("example-modal");
          if (modal) modal.classList.remove("hidden");
        }}
      >
        Open Modal
      </button>
      <div
        id="example-modal"
        className="hidden fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
      >
        <div className="relative p-6 w-full max-w-md bg-white rounded-lg shadow">
          <div className="flex justify-between items-center pb-2 border-b">
            <h3 className="text-xl font-semibold">Modal Title</h3>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => {
                document
                  .getElementById("example-modal")
                  ?.classList.add("hidden");
              }}
            >
              ✖
            </button>
          </div>

          <div className="py-4">
            <p className="text-gray-600">This is a Flowbite modal.</p>
          </div>

          <div className="flex justify-end pt-2 border-t">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              onClick={() => {
                document
                  .getElementById("example-modal")
                  ?.classList.add("hidden");
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
