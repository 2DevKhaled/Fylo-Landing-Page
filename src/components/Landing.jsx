import HeroImg from '/src/assets/images/illustration-intro.png'
import BgCurvy from '/src/assets/images/bg-curvy-desktop.svg'
export default function Landing() {
  return (
    <section className="bg-[#141922]">
      <div className="container mx-auto">
        <div className="element-center flex-col pt-[150px]">
          <div className="w-[550px] max-w-full">
            <img
              src={HeroImg}
              className="w-full h-fit"
            />
          </div>
          <div className=" mx-auto text-center">
            <h1 className="text-[40px] text-text100 font-medium mb-[15px]">
              All your files in one secure location,
              <br /> accessible anywhere.
            </h1>
            <p className="text-xl text-text200 font-light mx-auto">
              Fylo stores all your most important files in one secure location.
              <br /> Access them wherever you need, share and collaborate with
              <br /> friends family, and co-workers.
            </p>
          </div>
          <a className="btn text-text200 hover:text-[#000]  duration-200 mt-[20px] w-[280px] h-[50px] rounded-[30px] element-center font-medium">Get Started</a>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img src={BgCurvy} className="w-full h-full"/>
      </div>
    </section>
  );
}
