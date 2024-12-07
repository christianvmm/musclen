import { OutlineButton } from '@/components/outline-button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const headerLinks = [
   {
      href: '',
      label: 'About',
   },
   {
      href: '',
      label: 'Trainers',
   },
   {
      href: '',
      label: 'Membership',
   },
   {
      href: '',
      label: 'Programs',
   },
]

export function HeroSection() {
   return (
      <section id='hero' className='relative bg-background-hero'>
         <nav className='container max-w-screen-xl pt-4 px-4 m-auto flex items-center justify-between'>
            <img alt='Logo' src='logo.svg' loading='lazy' />

            <div className='hidden md:block z-[1]'>
               {headerLinks.map((link, i) => {
                  return (
                     <a
                        className='px-3 mx-3 leading-tight text-sm cursor-pointer transition-colors hover:text-secondary font-medium'
                        key={i}
                        
                     >
                        {link.label}
                     </a>
                  )
               })}
            </div>

            <div>
               <button className='bg-primary text-accent rounded-3xl py-[0.63rem] px-5 font-medium leading-tight text-sm'>
                  Join Now
               </button>
            </div>
         </nav>

         <img
            alt='Línea'
            src='/hero/line-1.svg'
            className='absolute'
            style={{
               inset: '0% 0% auto auto',
            }}
         />

         <img
            alt='Línea'
            src='/hero/line-2.svg'
            className='absolute bottom-0 left-0'
         />

         <img
            alt='Línea'
            src='/hero/line-3.svg'
            className='absolute bottom-[20.5%] right-0 hidden md:block'
         />

         <div className='pt-20 container max-w-screen-xl m-auto z-[1]'>
            <h1 className='text-center  mb-5 text-5xl tracking-[4px] md:text-[5.4rem] md: leading-tight md:-tracking-tight uppercase font-extrabold text-accent'>
               Muscle Mastery
            </h1>

            <p className='px-4 text-muted-foreground md:hidden text-center'>
               Our state-of-art facility offers a comprehensive range of fitness
               services, including strength training, cardio conditioning,
               mobility exercises.
            </p>

            <OutlineButton className='mx-auto my-10 md:hidden'>
               Explore More
            </OutlineButton>

            <div className='flex w-full gap-9 justify-between items-center'>
               {/* left */}
               <div className='flex-1 flex justify-end relative px-4 md:px-0'>
                  <Image
                     width={1002}
                     height={1334}
                     alt='Imagen de...'
                     src='/hero/hero.png'
                     className='object-cover w-full max-w-full min-h-[700px] max-h-[700px] md:min-h-[668px] md:max-h-[668px] md:max-w-[80%]'
                  />

                  <FloatingItem
                     className='top-[10%] left-[9%] md:top-[14%] md:left-[16%] floating-element'
                     position='left'
                  >
                     Bodybuilding
                  </FloatingItem>

                  <FloatingItem
                     className='top-[22%] right-[6%] floating-element-2'
                     position='right'
                  >
                     Strength Training
                  </FloatingItem>

                  <FloatingItem
                     className='bottom-[26%] left-[4%] floating-element-2'
                     position='left'
                  >
                     Powerlifting
                  </FloatingItem>

                  <FloatingItem
                     className='bottom-[16%] right-[8%] floating-element'
                     position='right'
                  >
                     Cardio Program
                  </FloatingItem>
               </div>

               {/* right */}
               <div className='flex-1 hidden md:flex flex-col gap-5'>
                  {/* top */}
                  <div className='flex w-full flex-col gap-20 z-[1]'>
                     <div>
                        <h2 className='mb-2 text-2xl font-medium  leading-tight uppercase text-accent'>
                           Stronger every day
                        </h2>

                        <p className='text-muted-foreground'>
                           Challenge seasoned athletes with high-intensity,
                           sport-specific training.
                        </p>

                        <OutlineButton className='mt-10'>
                           Explore More
                        </OutlineButton>
                     </div>

                     <p className='text-muted-foreground max-w-[56%]'>
                        Our state-of-art facility offers a comprehensive range
                        of fitness services, including strength training, cardio
                        conditioning, mobility exercises.
                     </p>
                  </div>

                  {/* bottom */}
                  <div className='flex w-full justify-end gap-10 pr-4 z-[1]'>
                     <div className='max-w-[40%] w-full rounded-md overflow-hidden bg-background z-10'>
                        <Image
                           width={528}
                           height={328}
                           alt='Imagen de...'
                           src='/hero/2.jpg'
                           className='object-cover w-full min-h-[164px] max-h-[164px] reveal-animation'
                        />
                     </div>

                     <div className='grid'>
                        <div className='flex flex-col justify-between'>
                           <div>
                              <div className='text-3xl font-bold leading-tight text-accent'>
                                 160+
                              </div>
                              <div className='text-muted-foreground'>
                                 Active Member
                              </div>
                           </div>

                           <div>
                              <div className='text-3xl font-bold leading-tight text-accent'>
                                 18+
                              </div>

                              <div className='text-muted-foreground'>
                                 Active Coaches
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

function FloatingItem({
   className,
   children,
   position,
}: {
   className?: string
   children: string
   position: 'left' | 'right'
}) {
   return (
      <a className={cn('flex gap-2 items-center absolute', className)}>
         {position === 'right' && (
            <div className='border border-white rounded-full w-2 h-2'></div>
         )}

         <div className='bg-background-hero text-accent border border-[#fff3] rounded-[50px] py-2 px-4 text-xs md:text-sm font-medium leading-snug'>
            {children}
         </div>

         {position === 'left' && (
            <div className='border border-white rounded-full w-2 h-2'></div>
         )}
      </a>
   )
}
