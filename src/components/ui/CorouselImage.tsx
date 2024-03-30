import { Carousel } from "antd";
import Image from "next/image";
import donation1 from "../../assets/images/donation-1.png";
import donation2 from "../../assets/images/donation-2.png";
import donation3 from "../../assets/images/donation-3.png";
import donation4 from "../../assets/images/donation-4.png";
import donation5 from "../../assets/images/donation-5.png";

const CorouselImage = () => {
  return (
    <div className="h-96 carousel carousel-vertical rounded-box mx-auto">
      <div className="carousel-item h-full ">
        <Image src={donation1} width={500} height={500} alt="" />
      </div>
      <div className="carousel-item h-full ">
        <Image src={donation2} width={500} height={500} alt="" />
      </div>
      <div className="carousel-item h-full ">
        <Image src={donation3} width={500} height={500} alt="" />
      </div>
      <div className="carousel-item h-full">
        <Image src={donation4} width={500} height={500} alt="" />
      </div>
      <div className="carousel-item h-full ">
        <Image src={donation5} width={500} height={500} alt="" />
      </div>
    </div>
  );
};

export default CorouselImage;
