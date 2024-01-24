import Error from "../components/UI/Svgs/Error";
import LuxuryCar from "../components/UI/Svgs/TypeCar/LuxuryCar";
import Sedan from "../components/UI/Svgs/TypeCar/Sedan";
import SemiLuxury from "../components/UI/Svgs/TypeCar/SemiLuxury";
import SuvVan from "../components/UI/Svgs/TypeCar/SuvVan";

function getTypeCarIcon(name: string) {
  if (name === "sedan") {
    return <Sedan />;
  }

  if (name === "suvVan") {
    return <SuvVan />;
  }

  if (name === "semiLuxury") {
    return <SemiLuxury />;
  }

  if (name === "luxuryCar") {
    return <LuxuryCar />;
  }

  return <p>Icon Not Found</p>;
}

export default getTypeCarIcon;
