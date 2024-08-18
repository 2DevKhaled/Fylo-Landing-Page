export default function FeatureBox({ icon, title, desc }) {
  return (
    <div className="text-text100 element-center flex-col my-[10px] text-center">
      <img
        src={icon}
        alt="icon-img "
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-sm font-normal ">{desc}</p>
    </div>
  );
}
