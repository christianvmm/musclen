import { CTASection } from '@/features/home/components/cta'
import { FactsSection } from '@/features/home/components/facts'
import { Footer } from '@/features/home/components/footer'
import { HeroSection } from '@/features/home/components/hero'
import { InstructorsSection } from '@/features/home/components/instructors'
import { MembershipSection } from '@/features/home/components/membership'
import { ProgramsSection } from '@/features/home/components/programs'
import { StorySection } from '@/features/home/components/story'
import { TestimonialsSection } from '@/features/home/components/testimonials'

export default function Home() {
   return (
      <>
         <main className='flex flex-col w-full gap-14 md:gap-36'>
            <HeroSection />
            <ProgramsSection />
            <StorySection />
            <FactsSection />
            <InstructorsSection />
            <MembershipSection />
            <TestimonialsSection />
            <CTASection />
         </main>

         <Footer />
      </>
   )
}
