import { Leva } from "leva";
import { Suspense, memo, useCallback, useMemo, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";
import { calculateSizes } from "../../constants/constants.js";

const ReactLogo = lazy(() => import("../components/ReactLogo.tsx"));
const Target = lazy(() => import("../components/Target.jsx"));
const HackerRoom = lazy(() => import("../components/HackerRoom.jsx"));
const Button = lazy(() => import("../components/Button.jsx"));
const CanvasLoader = lazy(() => import("../components/CanvasLoader.jsx"));
const HeroCamera = lazy(() => import("../components/HeroCamera.jsx"));

const HeroText = memo(({ isMobile }) => (
  <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
    <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
      Hi, I am Hemanshu <span className="waving-hand">👋</span>
    </p>
    <p className="hero_tag text-gray_gradient">
      Building Projects for Web and Mobile
    </p>
  </div>
));

const CallToActionButton = memo(() => (
  <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
    <a href="#about" className="w-fit">
      <Button
        name="Let's work together"
        isBeam
        containerClass="sm:w-fit w-full sm:min-w-96"
      />
    </a>
  </div>
));

const Scene = memo(({ sizes, isMobile }) => (
  <Canvas className="w-full h-full" dpr={[1, 2]}>
    <Suspense fallback={<CanvasLoader />}>
      <Leva hidden />
      <PerspectiveCamera makeDefault position={[0, 0, 30]} />

      <HeroCamera isMobile={isMobile}>
        <HackerRoom
          scale={sizes.deskScale}
          position={sizes.deskPosition}
          rotation={[0.1, -Math.PI, 0]}
        />
      </HeroCamera>

      <group>
        <Target position={sizes.targetPosition} />
        <ReactLogo position={sizes.reactLogoPosition} />
      </group>

      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
    </Suspense>
  </Canvas>
));

const Hero = () => {
  // Media queries with debounced updates
  const isSmall = useMediaQuery({ maxWidth: 440 }, undefined, true);
  const isMobile = useMediaQuery({ maxWidth: 768 }, undefined, true);
  const isTablet = useMediaQuery(
    { minWidth: 768, maxWidth: 1024 },
    undefined,
    true
  );

  // Memoize sizes calculation
  const sizes = useMemo(
    () => calculateSizes(isSmall, isMobile, isTablet),
    [isSmall, isMobile, isTablet]
  );

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <HeroText isMobile={isMobile} />

      <div className="w-full h-full absolute inset-0">
        <Scene sizes={sizes} isMobile={isMobile} />
      </div>

      <CallToActionButton />
    </section>
  );
};

export default memo(Hero);
