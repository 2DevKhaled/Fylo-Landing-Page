export default function TestimonialBox({ image, des, name, position }) {
  return (
    <div className="text-text100 bg-[#21293c] rounded-[5px] p-[30px] w-[2] ">
      <p className="mb-[30px] text-sm  font-normal ">{des}</p>
      <div className="flex mt-[15px] gap-[10px] items-center">
        <img
          src={image}
          className="w-[50px] h-[50px] rounded-full object-contain"
        />
        <div>
          <strong className="block mb-[5px]">{name}</strong>
          <p className="text-sm font-normal">{position}</p>
        </div>
      </div>
    </div>
  );
}
