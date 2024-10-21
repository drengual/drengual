import BlackholeVid from "../assets/blackhole.webm";

const Blackhole = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className="absolute lg:top-[-120px] left-0 w-full h-full z-[-2] object-cover sm:h-[70vh] md:h-[50vh] lg:h-[100vh]"
      >
        <source src={BlackholeVid} type="video/webm" />
      </video>
    </div>
  );
};

export default Blackhole;
