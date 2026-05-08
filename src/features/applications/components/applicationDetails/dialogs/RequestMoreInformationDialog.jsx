import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const RequestMoreInformationDialog = ({ open, application, onClose, onSubmit }) => {
  return (
    <BaseDialog
      open={open}
      title="Request More Information"
      onClose={onClose}
      widthClassName="max-w-[620px]"
    >
      <div className="space-y-3">
        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">To</p>
          <Input
            value={application.email}
            readOnly
            className="h-10 bg-[#F7F9F9] text-sm dark:bg-white/5"
          />
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Subject</p>
          <Input
            defaultValue="Your Aeroskai Application — Additional Information Required"
            className="h-10 bg-[#F7F9F9] text-sm dark:bg-white/5"
          />
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Message</p>
          <Textarea
            rows={7}
            defaultValue={`Dear ${application.primaryContact?.find((item) => item.label === 'Full Name')?.value ?? 'Applicant'},

Thank you for applying to join Aeroskai. We have received your application and it is currently under review.

We kindly request the following additional information to complete our review:

Please specify what information you need here.

Please reply to this email with the requested details, or re-submit via the application form.

Best regards,
Aeroskai Admin Team`}
            className="max-h-[220px] overflow-y-auto bg-[#F7F9F9] text-sm dark:bg-white/5 md:max-h-[260px]"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            className="h-10 bg-[#EAEEF3] dark:bg-white/10"
          >
            Cancel
          </Button>
          <Button
            type="button"
            className="h-10 bg-[#1565C0] text-white hover:bg-[#0F54A1]"
            onClick={onSubmit}
          >
            Send Email
          </Button>
        </div>
      </div>
    </BaseDialog>
  )
}

export default RequestMoreInformationDialog
