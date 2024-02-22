import { MapIcon, EnvelopeIcon } from "@heroicons/react/16/solid"


const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-[1440px]">
      <div className="text-center lg:mx-auto lg:py-10">
        <div className="lg:text-start lg:mx-10">
          <h3 className="uppercase mb-3 text-blue-600 font-semibold">contact</h3>
          <h2 className="text-2xl text-gray-900 font-semibold mx-3 lg:mx-0 mb-16">If you like my work. Hit me up! 👇</h2>
        </div>
        
        <div className="lg:flex lg:gap-20 lg:mx-10">

          <div className="mb-16 lg:flex lg:gap-5">
              {/* map-icon*/}            
              <MapIcon className="size-6 fill-blue-500 mx-auto lg:my-auto"/>
            
            <div className="lg:text-start">
              <h4 className="font-bold">Location</h4>
              <p className="hover:text-blue-600 text-lg">Madrid, Spain</p>
            </div>
          </div>
          
          <div className="mb-16 lg:flex lg:gap-5">
            {/* mail-icon */}
            <EnvelopeIcon className="size-6 fill-blue-500 mx-auto lg:my-auto"/>

            <div className="lg:text-start">
              <h4 className="font-bold">Mail</h4>
              <p className="hover:text-blue-600 text-lg">joseomar.ledagui@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact