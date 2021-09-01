import { useEffect, useState } from "react";

export function useModal(INITIAL_STATE = false) {
  const [isOpen, setIsOpen] = useState(INITIAL_STATE);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((v) => !v);

  return { isOpen, toggleModal, closeModal, openModal };
}

export const useClickAway = (ref, callback) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
