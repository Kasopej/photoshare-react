import { useNavigate } from "react-router-dom";
export default function withNavigationHOC(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}
