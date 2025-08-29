import grainImage from '@/assets/images/grain.avif';

const Bio = () => {
  return (
    <>
      {/* <h2
        className="font-auge text-3xl text-center mt-6 font-bold tracking-tight md:text-5xl"
        // style={{ fontFamily: "'Auge', serif" }}
      >
        About Me
      </h2> */}

      <section className="flex container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl items-center justify-center">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl py-4 md:px-8 px-4 text-center relative overflow-hidden max-w-3xl">
          {/* Grain texture background */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src ?? grainImage})`,
            }}
          ></div>
          <div className="p-4 md:p-0 font-sans font-semibold text-left">
            {/* <h2 className="font-serif text-2xl font-bold mb-4  text-black">
      About Me
    </h2> */}
            <p className=" text-black mb-4 text-sm md:text-base mt-4">
              I am <span className="font-extrabold">Sharzil</span> 👋, Currently
              I'm a Web Developer working with{' '}
              <span className="font-extrabold">React</span>,{' '}
              <span className="font-extrabold">Tailwind</span>,{' '}
              <span className="font-extrabold">Next.js</span>, and{' '}
              <span className="font-extrabold">TypeScript</span>. Yeah, it keeps
              me pretty busy building cool websites and apps. I spend most of my
              time figuring out new frameworks and getting better at coding.
            </p>
            <p className=" text-black mb-4 text-sm md:text-base">
              I've always been obsessed with computers and tech stuff since I
              was a kid. Love checking out how gadgets work and what's new in
              the tech world. The crazy speed of new innovations just never gets
              old for me.
            </p>
            <p className=" text-black mb-4 text-sm md:text-base">
              So before I got into coding, I did graphic design for about two
              years. That whole experience taught me a lot about making things
              look good and user-friendly. When I started my CS undergrad at
              BRAC University, I thought "why not try building things with
              programming?"
            </p>
            <p className=" text-black mb-4 text-sm md:text-base">
              Switching from design to coding wasn't too crazy since both need
              problem-solving skills. My design background actually helps me
              build better interfaces and understand what people like. Now I mix
              visual stuff with coding to create complete web projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
