import Image from 'next/image'

const igItems = [
   {
      img: '/footer/1.jpg',
   },
   {
      img: '/footer/2.jpg',
   },
   {
      img: '/footer/3.jpg',
   },
   {
      img: '/footer/4.jpg',
   },
]

export function Footer() {
   return (
      <footer className='bg-background-hero pt-14 pb-10 px-4'>
         <div className='w-full flex items-end container max-w-screen-xl m-auto'>
            <div className='flex flex-col lg:flex-row items-stretch justify-between gap-x-[110px] gap-y-20 w-full'>
               {/* left */}
               <div className='w-full items-start justify-between flex flex-col gap-8 sm:gap-0 sm:flex-row lg:flex-col lg:items-stretch lg:max-w-[26%]'>
                  <div>
                     <img
                        src='logo.svg'
                        loading='lazy'
                        alt='Musclen'
                        className=''
                     />

                     <div className='mt-2 text-muted-foreground text-sm'>
                        Elevate Your Workout Experience
                     </div>
                  </div>

                  <div className='lg:mt-32 w-full sm:w-auto'>
                     <h5 className='text-accent text-lg font-medium leading-normal mb-4'>
                        Operational Hour
                     </h5>

                     <div className='flex flex-col gap-[10px] w-full'>
                        <div className='flex justify-between  items-center gap-16 uppercase text-muted-foreground'>
                           <span>Monday - Friday</span>
                           <span>07AM - 11PM</span>
                        </div>

                        <div className='h-[1px] bg-[#fff3] w-auto'></div>

                        <div className='flex justify-between  items-center gap-16 uppercase text-muted-foreground'>
                           <span>Saturday</span>
                           <span>09AM - 10PM</span>
                        </div>

                        <div className='h-[1px] bg-[#fff3] w-auto'></div>

                        <div className='flex justify-between  items-center gap-16 uppercase text-muted-foreground'>
                           <span>Sunday</span>
                           <span>Closed</span>
                        </div>

                        <div className='h-[1px] bg-[#fff3] w-auto'></div>
                     </div>
                  </div>

                  <div className='text-muted-foreground text-sm mt-[78px] hidden lg:block'>
                     © {new Date().getUTCFullYear()}
                  </div>
               </div>

               {/* right */}
               <div className='flex  lg:max-w-[74%] w-full justify-between flex-col gap-[60px]'>
                  <div className='grid grid-cols-2 sm:grid-cols-3'>
                     <div>
                        <h1 className='text-accent uppercase mb-3 text-sm leading-normal'>
                           Programs
                        </h1>

                        <div className='flex flex-col'>
                           {[
                              'Strength Training',
                              'Cardio Conditioning',
                              'Flexibility & Mobility',
                              'Functional Fitness',
                              'Body-Weight Fitness',
                              'Endurance Training',
                           ].map((item, i) => {
                              return (
                                 <div
                                    className='text-muted-foreground leading-normal  text-sm py-1 cursor-pointer '
                                    key={i}
                                 >
                                    <span className='hover:text-secondary transition-colors'>
                                       {item}
                                    </span>
                                 </div>
                              )
                           })}
                        </div>
                     </div>

                     <div>
                        <h1 className='text-accent uppercase mb-3 text-sm leading-normal'>
                           Social
                        </h1>

                        <div className='flex flex-col'>
                           {[
                              'Instagram',
                              'Facebook',
                              'Twitter',
                              'Linkedin',
                           ].map((item, i) => {
                              return (
                                 <div
                                    className='text-muted-foreground leading-normal  text-sm py-1 cursor-pointer '
                                    key={i}
                                 >
                                    <span className='hover:text-secondary transition-colors'>
                                       {item}
                                    </span>
                                 </div>
                              )
                           })}
                        </div>
                     </div>
                  </div>

                  <div className='grid grid-cols-4 gap-x-[10px]'>
                     {igItems.map((item, i) => {
                        return (
                           <div
                              className='rounded-md flex justify-center items-center relative overflow-hidden w-full ig-block cursor-pointer'
                              key={i}
                           >
                              <Image
                                 width={200}
                                 height={200}
                                 className='object-cover min-h-[200xp] max-h-[200px] w-full'
                                 alt='Imagen de...'
                                 src={item.img}
                              />

                              <div className='absolute flex leading-tight text-xs py-2 px-4 justify-center items-center rounded-[100px] bg-[#ffffff4d] text-[#fff] backdrop-blur-sm gap-2 opacity-0 ig-tag transition-opacity'>
                                 <img
                                    src='ig-logo.svg'
                                    alt='Logo de Instagram'
                                    className=''
                                 />

                                 <span className='font-medium'>@musclsen</span>
                              </div>
                           </div>
                        )
                     })}
                  </div>

                  <div className='text-muted-foreground text-sm block lg:hidden'>
                     © {new Date().getUTCFullYear()}
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
