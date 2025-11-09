import { Suspense } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader, Modal } from '@/shared/ui';
import { LoginFormLazy } from '../login-form/LoginFormLazy';
// import classes from './LoginModal.module.scss';

interface LoginModalProps
{
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal(props: LoginModalProps)
{
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
}