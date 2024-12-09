import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("upadhyayhri@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 3000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <p className="grid-headtext">About Me</p>
            <p className="grid-subtext">
              With over 3 years of expertise in building performance-driven
              websites and APIs using React, Next.js, and TypeScript, I focus on
              delivering fast, bug-free, and optimized solutions. Experienced in
              converting Figma designs into functional components and handling
              AWS front-end deployments. Additionally, I am seasoned in React
              Native for mobile application development, particularly for iOS,
              and leverage AI tools to accelerate project delivery and enhance
              efficiency.
            </p>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Skills</p>
              <p className="grid-subtext">
                With 3 years of experience, I specialize in front-end and
                full-stack development using React, Next.js, React Native,
                TypeScript, Node.js, and Prisma. Proficient in AWS, Docker, SQL,
                and Vercel, I build high-performance applications with seamless
                user interfaces, robust APIs, and cross-platform solutions.
                Skilled in GitHub workflows and deployment pipelines for
                efficient, scalable results.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 21.764473,
                    lng: 72.15193,
                    text: "Bhavnagar,India ",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                {" "}
                I Work Remotely across Most Timezones
              </p>
              <p className="grid-subtext">
                I am based in Bhavnagar, India with Remote work Available.{" "}
              </p>
              <a href="#contact">
                <Button
                  name={"Contact Me"}
                  isBeam={true}
                  containerClass={"w-full mt-10"}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src={"/assets/grid3.png"}
              alt="grid3"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Projects</p>
              <p className="grid-subtext">
                I specialize in developing innovative and efficient projects for
                both web and mobile platforms, leveraging my expertise in
                Next.js, React, and React Native for development. I use Tailwind
                CSS to create modern, responsive, and visually appealing designs
                that enhance user experiences. My experience spans crafting
                scalable, high-performance applications tailored to meet diverse
                project needs. I take pride in my ability to quickly learn and
                integrate new technologies into my workflow, ensuring I stay
                ahead in delivering cutting-edge solutions. Whether it’s
                optimizing for performance, creating intuitive interfaces, or
                adopting emerging tools, I am committed to building exceptional
                products that exceed expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={"/assets/grid4.png"}
              alt="grid4"
              className="w-full sm:h-[126px] h-fit object-contain"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center"> Contact me</p>
              <div className={"copy-container"} onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt={hasCopied ? "check" : "copy"}
                />
                <p className="lg:text-2xl md:text-xl font-medium text-grey_gradient text-neutral-400 ">
                  upadhyayhri@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
