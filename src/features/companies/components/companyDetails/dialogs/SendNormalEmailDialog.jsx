import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const SendNormalEmailDialog = ({ open, toEmail, onClose }) => {
  return (
    <BaseDialog open={open} title="Send Email" onClose={onClose}>
      <div className="space-y-3">
        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">To</p>
          <Input value={toEmail} readOnly className="h-10 bg-[#F7F9F9] dark:bg-white/5" />
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Subject</p>
          <Input placeholder="Enter email subject" className="h-10 bg-[#F7F9F9] dark:bg-white/5" />
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Message</p>
          <Textarea
            rows={6}
            placeholder="Write your message here..."
            className="max-h-[180px] overflow-y-auto bg-[#F7F9F9] dark:bg-white/5 md:max-h-[240px]"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            className="h-10 bg-[#EAEEF3] dark:bg-white/10"
          >
            Cancel
          </Button>
          <Button type="button" className="h-10 bg-[#1565C0] text-white hover:bg-[#0F54A1]">
            Send Email
          </Button>
        </div>
      </div>
    </BaseDialog>
  )
}
