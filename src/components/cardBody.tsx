import "../styles/cardBody.css";
import CardAvatar from "./cardAvatar";
import CardDetails from "./cardDetails";

const CardBody = () => {
  return (
    <div className="card-body">
      <CardAvatar />
      <CardDetails />
    </div>
  );
};

export default CardBody;
