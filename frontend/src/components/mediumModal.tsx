import React, { ReactNode } from 'react';
import './component.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { IoClose } from 'react-icons/io5';
import MainButton from './mainButton';
import BorderButton from './borderButton';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  handleMain?: () => void;
  children?: ReactNode;
  handleMainTitle?: string;
};

export default function MediumModal({
  isOpen,
  closeModal,
  handleMain,
  children,
  handleMainTitle,
}: Props) {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="medium-modal-title"
      aria-describedby="medium-modal-description"
      className="medium-modal"
    >
      <div className="closeButton" onClick={closeModal}>
        <IoClose />
      </div>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <BorderButton title="Cancel" onClick={closeModal} />
        <MainButton title={handleMainTitle || 'Submit'} onClick={handleMain} />
      </DialogActions>
    </Dialog>
  );
}