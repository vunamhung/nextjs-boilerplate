import { createPortal } from 'react-dom';
import { useCallback, useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';

const Modal = ({ children, isOpen = false, close, elementId = 'root' }) => {
  const ref = useOutsideClick(close);

  if (isOpen === false) return null;

  return createPortal(
    <div className='fixed flex top-0 left-0 bottom-0 right-0 z-30 justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div ref={ref}>{children}</div>
    </div>,
    document.getElementById(elementId),
  );
};

export default function useModal(elementId = 'root', options = {}) {
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => setOpen(true), [setOpen]);

  const close = useCallback(() => setOpen(false), [setOpen]);

  const ModalWrapper = useCallback(
    ({ children }) => (
      <Modal isOpen={isOpen} close={close} elementId={elementId}>
        {children}
      </Modal>
    ),
    [isOpen, close, elementId],
  );

  return [{ isOpen }, { Modal: ModalWrapper, open, close }];
}
