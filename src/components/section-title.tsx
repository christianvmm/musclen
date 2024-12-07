import { cn } from "@/lib/utils"

export function SectionTitle({
   children,
   className,
}: {
   children: React.ReactNode
   className?: string
}) {
   return (
      <h1
         className={cn(
            'text-accent uppercase mb-2 text-3xl md:text-4xl font-extrabold leading-tight',
            className
         )}
      >
         {children}
      </h1>
   )
}
