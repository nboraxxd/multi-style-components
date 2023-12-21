import React from 'react'

import Modal from './modal'
import Button from '../button'

export default function ModalDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <main>
      {/* 
      ------------------------------
      TODO: Pass the required `title`, `children` 
      and `action` props to the modal below.
      ------------------------------
    */}
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm subscription"
        actions={{
          confirm: { action: () => setIsOpen(false), label: 'Confirm' },
          cancel: { action: () => setIsOpen(false), label: 'Cancel' },
        }}
      >
        {/* Panel body */}
        <div className="mt-4">
          <p className="text-slate-500">
            You're about to confirm your{' '}
            <a className="text-indigo-600 underline hover:text-indigo-500" href="#">
              membership subscription
            </a>
            . Your account will be billed for a one-year membership. We just want to make sure you understand that.
          </p>
        </div>
      </Modal>

      <Button impact="light" onClick={() => setIsOpen(true)}>
        Open dialog
      </Button>
    </main>
  )
}
