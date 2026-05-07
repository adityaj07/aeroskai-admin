import { useRef } from 'react'

import { Button } from '@/components/ui/button'

import { BaseCompanyDialog } from '../details/dialogs/BaseCompanyDialog'

export const LogoUploadDialog = ({ open, onClose, onPickFile }) => {
  const fileRef = useRef(null)

  return (
    <BaseCompanyDialog
      open={open}
      title="Upload Company Logo"
      onClose={onClose}
      widthClassName="max-w-[520px]"
    >
      <div className="space-y-3">
        <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">Upload PNG/JPG/SVG logo.</p>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0]
            if (file) onPickFile(file)
            onClose()
          }}
        />

        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            className="h-10 border border-[#F3F4F6] bg-[#EAEEF3] text-[#1F1E1F] dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="h-10 bg-[#1565C0] text-white hover:bg-[#0F54A1]"
          >
            Choose File
          </Button>
        </div>
      </div>
    </BaseCompanyDialog>
  )
}
