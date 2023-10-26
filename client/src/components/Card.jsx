import { download } from "../assets";
import downloadImage from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="group relative shadow-card hover:shadow-card hover card">
      <img className="w-full h-auto object-cover" src={photo} alt={prompt} />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] p-3">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-white">
            <div className="w-7 h-7 rounded-full object-cover bg-[#6469ff] flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <div className="flex flex-row-reverse flex-wrap">
            <button
              type="button"
              onClick={() => downloadImage(_id, photo)}
              className="outline-none bg-transparent border-none"
            >
              <img
                src={download}
                alt="download"
                className="w-6 h-6 object-contain invert"
              />
            </button>
            <span className="text-white text-xs m-1">Download</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
