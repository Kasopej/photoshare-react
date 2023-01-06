import { useParams } from "react-router-dom";

export default function PostDetails(props) {
  const params = useParams();
  console.log(params);
  return <span>Details</span>;
}
