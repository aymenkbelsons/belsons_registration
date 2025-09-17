import { Checkbox } from '@headlessui/react'
import classNames from 'classnames'

type TProps = {
  content: string
  enabled: boolean
  setEnabled?: () => void
  color: 'primary' | 'secondary'
  text_color?: 'white' | 'black'
}

const SimpleCheckBox = ({ content, color, enabled, setEnabled, text_color = 'black' }: TProps) => {
  return (
    <div className="w-full flex items-center justify-start gap-4">
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          'group block size-4 rounded-md bg-white min-w-6 min-h-6 p-1',
          color === 'primary'
            ? 'data-checked:bg-primary-500'
            : 'data-checked:bg-secondary-500'
        )}
      >
        {/* Checkmark icon */}
        <svg
          className="stroke-white opacity-0 group-data-checked:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Checkbox>
      <p
        className={classNames(
          'text-xs lg:text-base font-normal',
          text_color === 'white' ? 'text-white' : 'text-grey-scale-900'
        )}
      >
        {content}
      </p>
    </div>
  )
}

export default SimpleCheckBox