import { cn } from '@/lib/utils'

export function PrimaryButton({
   children,
   className,
}: {
   children: React.ReactNode
   className?: string
}) {
   return (
      <button
         className={cn(
            'flex justify-center items-center leading-snug font-medium text-sm py-3 px-7 rounded-[50px] text-accent bg-primary transition-colors hover:bg-secondary',
            className
         )}
      >
         {children}
      </button>
   )
}
