import BlackholeVid from "../assets/blackhole.webm";

const Blackhole = () => {
  return (
    <div className="w-full z-[-2] relative overflow-x-clip">
      <video
        autoPlay
        muted
        loop
        className="absolute right-[-500px] top-[-90px] blackhole"
      >
        <source src={BlackholeVid} type="video/webm" />
      </video>
    </div>
  );
};

export default Blackhole;
