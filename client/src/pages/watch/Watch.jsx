import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src="https://vod-progressive.akamaized.net/exp=1659175200~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=16747a95eb361a4cf3b4a0f4fd865916bd50c42a352f70bb8bd084b28cf80974/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4" />
    </div>
  );
}