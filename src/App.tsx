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
      <div className='relative z-10 mx-auto my-0 max-w-[1128px] pt-19'>
        <SiteHeader />
        <main className='pt-47.5'>
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
