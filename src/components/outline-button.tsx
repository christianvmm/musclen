import { cn } from '@/lib/utils'

export function OutlineButton({
   children,
   className,
}: {
   children: React.ReactNode
   className?: string
}) {
   return (
      <button
         className={cn(
            'text-accent border-[#fff3] border-[1px] rounded-[50px] flex justify-center items-center py-3 px-6 text-sm  font-medium leading-snug hover:bg-secondary transition-colors',
            className
         )}
      >
         {children}
      </button>
   )
}
