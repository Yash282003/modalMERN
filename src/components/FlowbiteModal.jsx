"use client";
// import "flowbite";

export default function FlowbiteModal() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        data-modal-target="example-modal"
        data-modal-toggle="example-modal"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Open Modal
      </button>

      <div
        id="example-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-900 bg-opacity-50"
      >
        <div className="relative w-full max-w-md max-h-full bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">Modal Title</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              data-modal-hide="example-modal"
            >
              ✖
            </button>
          </div>

          <div className="p-4">
            <p className="text-gray-600">This is a Flowbite modal.</p>
          </div>

          <div className="flex items-center justify-end p-4 border-t border-gray-200 rounded-b">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              data-modal-hide="example-modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
