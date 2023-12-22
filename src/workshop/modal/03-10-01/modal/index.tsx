import React from 'react'

import Modal from './modal'
import Button from '../button'

export default function ModalDemo() {
  const [status, setStatus] = React.useState<'CLOSED' | 'OPEN' | 'LOADING' | 'LOADED'>('CLOSED')

  function handleConfirm() {
    setStatus('LOADING')

    setTimeout(() => {
      setStatus('LOADED')
    }, 2000)
  }

  return (
    <main>
      <Modal
        status={status}
        onClose={() => setStatus('CLOSED')}
        slideFrom="top"
        tone="danger"
        title="Delete account permantly"
        actions={{
          confirm: {
            label: 'Yes, delete my account!',
            action: handleConfirm,
          },
          cancel: {
            label: 'Wow no, stop!',
            action: () => setStatus('CLOSED'),
          },
        }}
      >
        <div className="mt-4">
          <p className="text-slate-500">
            You're about to delete your account permantently. This action cannot be undone. Are you sure you want to do
            this?
          </p>
        </div>
      </Modal>
      {/* 
        ------------------------------
        Toggle buttons
        ------------------------------
      */}
      <div className="flex gap-2">
        <Button tone="danger" impact="light" onClick={() => setStatus('OPEN')}>
          Open modal
        </Button>
      </div>
    </main>
  )
}
