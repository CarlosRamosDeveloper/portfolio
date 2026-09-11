import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  isOpen: boolean,
  onClose: () => void,
) => {
  const ref = useRef<T>(null);
  const onCloseRef = useRef(onClose);

  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onCloseRef.current();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.addEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return ref;
};
