import { Outlet, Link } from 'react-router-dom'
import RegistrationInformationProgress from '../components/RegistrationInformationProgress'

export default function AccountDetailsLayout() {
  return (
      <section className="w-[90%] md:w-[70%] overflow-x-hidden mx-auto font-inter min-h-[calc(100vh-7.6rem)] md:min-h-[calc(100vh-4.65rem)]">
          <div className='flex flex-col items-center h-full pt-20 pb-5 md:pt-9'>

              <Outlet/>

          </div>
      </section>
  )
}
