import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-[1440px]">
      <div className="grid justify-center mb-20 lg:flex lg:gap-20">
        {/** skills */}
        <p className="mx-auto mb-8 text-xl mt-3 lg:-mx-5 lg:-ml-16 lg:font-medium">
          Skills
        </p>
        <div className="">
          <u className="list-none grid grid-cols-2 gap-y-6 gap-x-8 lg:flex">
            <li>
              <Image
                src="cs.svg"
                alt="csharp"
                width={68}
                height={68}
              />
            </li>
            <li>
            <Image
                src="dotnet.svg"
                alt="dotnet"
                width={68}
                height={68}
              />
            </li>
            <li>
            <Image
                src="react.svg"
                alt="react"
                width={68}
                height={68}
              />
            </li>
            <li>
            <Image
                src="nextjs.svg"
                alt="nextjs"
                width={68}
                height={68}
              />
            </li>
            <li>
            <Image
                src="ts.svg"
                alt="typescript"
                width={68}
                height={68}
              />
            </li>
            <li>
            <Image
                src="tw.svg"
                alt="tailwind"
                width={68}
                height={68}
              />
            </li>
            <li>
            <Image
                src="html.svg"
                alt="html"
                width={68}
                height={68}
              />
            </li>
            <li>
            <Image
                src="css.svg"
                alt="css"
                width={68}
                height={68}
              />
            </li>
          </u>
        </div>
      </div>

      {/** about me */}
      <div className="lg:flex lg:gap-32 lg:px-24">
        <Image
          src="/about-img.jpg"
          alt="about-img"
          width={490}
          height={420}
          className="rounded-3xl mb-10 lg:-mx-14"
        />
        <div className="text-center grid gap-4 lg:text-justify lg:h-[400px] lg:w-[600px] lg:py-auto">
          <h3 className="text-blue-600 uppercase font-semibold">About me</h3>
          <h2 className="text-3xl text-gray-900 font-semibold lg:pr-24 lg:text-lg">
            React and .NET Developer based in Madrid, Spain 📍
          </h2>
          <p className="text-gray-800 leading-normal">
            Hola, my name is Omar Ledesma. I'm working to become a Full Stack
            Developer.
          </p>
          <p className="text-gray-800 leading-normal">
            My main stack currently is .NET in combination with React/Next.js,
            Tailwind CSS and Typescript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
