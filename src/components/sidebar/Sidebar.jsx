import "./sidebar.scss";
import Follow from "../../sidebarComponent/follow/Follow";
import Ads from "../../sidebarComponent/ads/Ads";
import Category from "../../sidebarComponent/category/Category";
import IklanLagi from "../../sidebarComponent/iklanLagi/IklanLagi";
import RecentPost from "../../sidebarComponent/recentPost/RecentPost";
import TautanYT from "../../sidebarComponent/tautanYT/TautanYT";
import Vote from "../../sidebarComponent/vote/Vote";
export default function Sidebar() {
  return (
    <div className="sidebar col-lg-3">
      <Ads />
      <Follow />
      <TautanYT />
      <IklanLagi />
      <RecentPost />
      <Category />
      <Vote />
    </div>
  );
}
