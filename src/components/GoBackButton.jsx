import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


export default function GoBackButton() {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)}>
      <FiArrowLeft />
    </div>
  )
}
