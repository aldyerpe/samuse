import React, { Fragment, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Dialog, Transition } from '@headlessui/react';
const MenuBar = ({ logoSrc, logoAlt, compTitle, menuList }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed z-50 w-full container p-2 bg-black text-white">
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center mr-auto">
            <img
              src={logoSrc}
              className="w-10 h-10 animate__animated animate__fadeInRight"
              alt={logoAlt}
            />
            <p className="text-lg font-bold w-60 ml-2 leading-none animate__animated animate__fadeInRight">
              {compTitle}
            </p>
          </div>
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <XMarkIcon className="w-10 h-10 animate__animated animate__fadeInRight" />
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <Bars3Icon className="w-10 h-10 animate__animated animate__fadeInRight" />
            </button>
          )}
        </div>
        <Transition
          as={Fragment}
          show={isOpen}
          enter="ease-in duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog
            as="div"
            className="absolute w-full top-0 pt-16 pb-4 px-2 z-10 bg-black text-white"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Dialog.Panel>
              <div className="flex flex-col gap-y-4">
                {menuList.map((menu) => {
                  return (
                    <a
                      href={menu.url}
                      className="text-md font-semibold hover:font-extrabold hover:text-lg"
                    >
                      {menu.title}
                    </a>
                  );
                })}
              </div>
            </Dialog.Panel>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default MenuBar;
