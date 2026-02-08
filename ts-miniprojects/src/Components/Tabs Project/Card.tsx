type Props = {
  title: string;
  image: string;
  onClick?: () => void;
};

const Card = ({ title, image, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col w-60 rounded-xl overflow-hidden bg-[#1a1c1f]/80 backdrop-blur-lg border border-white/5 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover transition-transform duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-white">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
