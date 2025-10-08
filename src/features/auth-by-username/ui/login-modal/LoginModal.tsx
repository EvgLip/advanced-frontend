import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui';

import LoginForm from '../login-form/LoginForm';
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
      <LoginForm />
    </Modal>
  );
}