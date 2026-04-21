import { LandingLayout } from './layout/LandingLayout'
import {
  FooterSection,
  FormatsSection,
  HeroSection,
  IndustrySection,
  LectureSection,
  RoundTableRegistrationSection,
  RoundTableSection,
  SiteHeader,
} from './sections'

export default function App() {
  return (
    <LandingLayout>
      <div className='relative z-10 mx-auto my-0 max-md:px-6 max-md:pb-0 max-md:pt-8 md:max-lg:px-[63px] md:max-lg:pb-0 md:max-lg:pt-[48px] lg:px-39 lg:pt-19 lg:pb-0'>
        <SiteHeader />
        <main className='pt-47.5 md:max-lg:pt-29.5'>
          <HeroSection />
          <IndustrySection />
          <FormatsSection />

          <RoundTableSection />
          <RoundTableRegistrationSection />

          <LectureSection />
        </main>
      </div>
      <FooterSection />
    </LandingLayout>
  )
}
