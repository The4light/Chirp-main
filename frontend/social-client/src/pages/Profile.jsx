import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import TopHeader from "../components/TopHeader";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfileFeed from "../components/profile/ProfileFeed";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopHeader />

      <div className="flex">
        <LeftSidebar />

        <main className="flex-1 bg-white ml-[220px] mr-[320px] mt-16">
          <div className="p-4 space-y-4">
            <ProfileHeader />
            <ProfileStats />
            <ProfileTabs />
            <ProfileFeed />
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}