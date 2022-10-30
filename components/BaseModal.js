import { X } from 'lucide-react';
export function BaseModal(props) {
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full justify-center items-center p-2 text-center sm:p-0">
          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg max-w-md w-full p-4">
            <header className="flex justify-end">
              <button onClick={props.close}>
                <X color="rgb(156 163 175)" size={24}></X>
              </button>
            </header>
            <main>{props.children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
