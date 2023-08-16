import "./Concepts.css"
import Concept from "./Concept";

function Concepts(props) {
  return <ul id="concepts">
    {props.concepts.map((e) => <Concept title={e.title} image={e.image} description={e.description}/>)}
  </ul>
}

export default Concepts;
