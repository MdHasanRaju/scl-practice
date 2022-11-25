import YellowPoint from "../../../components/Shared/Svg/YellowPoint";

export default function PostAuthor({ image, name, subtitle, time }) {
  return (
    <div className="flex gap-2 mb-4 items-center">
      <img className="w-[50px] h-[50px] rounded-lg" src={image} alt={name} />
      <div className="flex gap-2 flex-grow">
        <div className="flex flex-col gap-1">
          <h6 className="text-[#000000]  text-[16px]">{name}</h6>
          <p className="text-[#8F8F8F] text-[12px] mr-6">{subtitle}</p>
        </div>
        <div className="flex items-end gap-1">
          <YellowPoint />
          <span className="text-[#FFD700] text-[10px]">{time}</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 cursor-pointer h-[40px] w-[40px] rounded-full hover:bg-gray-100">
        <span className="w-[5px] h-[5px] rounded-full bg-gray-600"></span>
        <span className="w-[5px] h-[5px] rounded-full bg-gray-600"></span>
        <span className="w-[5px] h-[5px] rounded-full bg-gray-600"></span>
      </div>
    </div>
  );
}
