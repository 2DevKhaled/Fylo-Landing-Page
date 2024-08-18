import StayProductiveImg from '/src/assets/images/illustration-stay-productive.png';
import ArrowIcon from '/src/assets/images/icon-arrow.svg'
export default function StayProductive() {
  return (
    <section className="bg-[#141922] py-[150px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center items-center">
        <div>
          <img
            src={StayProductiveImg}
            alt="Stay-Productive"
            className="w-[]"
          />
        </div>
        <div className="text-text100 pl-[30px] md:pl-[0px]">
          <h2 className="text-4xl font-medium leading-[50px]">
            Stay productive, <br />
            wherever you are
          </h2>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <a
            className="text-primary100 hover:text-primary200 transition-all duration-200 border-b-2 w-fit border-primary100 border-solid pb-1 flex items-center gap-[10px] "
            href="/"
          >
            See How Fylo Works
            <img
              src={ArrowIcon}
              className="w-[20px] h-[20px] object-contain animate-moveRight"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
