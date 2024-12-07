import Image from "next/image"

const items = [
   {
      quantity: '756',
      plus: true,
      text: 'Members',
   },
   {
      quantity: '24',
      text: 'Sessions',
   },
   {
      quantity: '18',
      text: 'Coaches',
   },
   {
      quantity: '11',
      plus: true,
      text: 'Gyms',
   },
]

export function FactsSection() {
   return (
      <section id='facts' className='container max-w-screen-xl m-auto px-4'>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-4 justify-between'>
            {items.map((item, i) => {
               return (
                  <div
                     className='gap-2 flex items-center justify-center relative'
                     key={i}
                  >
                     <span
                        className='text-transparent leading-snug font-extrabold text-7xl md:text-[105px]'
                        style={{
                           WebkitTextStrokeWidth: '1px',
                           WebkitTextStrokeColor: '#ffffff26',
                        }}
                     >
                        {item.quantity}
                     </span>

                     {Boolean(item.plus) && (
                        <Image
                        width={53}
                        height={53}
                           src='plus.svg'
                           loading='lazy'
                           alt='Plus Icon'
                        ></Image>
                     )}

                     <div className='leading-relaxed font-bold text-2xl absolute uppercase text-accent left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        {item.text}
                     </div>
                  </div>
               )
            })}
         </div>
      </section>
   )
}
