import Marquee from "react-fast-marquee";
const logos = [
  "/Images/aboutpage/logo1.png",
  "/Images/aboutpage/logo2.png",
  "/Images/aboutpage/logo3.png",
  "/Images/aboutpage/logo4.png",
  "/Images/aboutpage/logo1.png",
  "/Images/aboutpage/logo2.png",
  "/Images/aboutpage/logo3.png",
  "/Images/aboutpage/logo4.png",
  "/Images/aboutpage/logo1.png",
  "/Images/aboutpage/logo2.png",
  "/Images/aboutpage/logo3.png",
  "/Images/aboutpage/logo4.png",
  "/Images/aboutpage/logo1.png",
  "/Images/aboutpage/logo2.png",
  "/Images/aboutpage/logo3.png",
  "/Images/aboutpage/logo4.png",
];
const triple = [...logos, ...logos, ...logos, ...logos, ...logos];

export const MarqueSection = () => {
  return (
    <section className="bg-[#F6F6F6]">
      <Marquee
        gradient={false}
        speed={50} // adjust to taste
        pauseOnHover={false} // optional
      >
        {logos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`logo ${i + 1}`}
            className="h-8  mx-8 object-contain mt-10 mb-10  "
          />
        ))}
      </Marquee>
    </section>
  );
};
