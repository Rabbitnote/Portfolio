import { Tilt } from "react-tilt";
const Skill = (props) => {
  return (
    <Tilt className="glass">
      <img src={props.icon} alt={props.icon} />
    </Tilt>
  );
};
export default Skill;
