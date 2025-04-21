import CardBody from "./cardBody";
import CardStats from "./cardStats";
import CardThumbnail from "./cardThumbnail";
import "../styles/card.css";

const Card = () => {
  return (
    <div className="card">
      <CardThumbnail />
      <CardBody />
      <CardStats />
    </div>
  );
};

export default Card;
