
import CratePost from "../components/homepage/CreatePost";
import ModalCreatePost from "../components/common/ModalCreatePost";
import Post from "../components/homepage/Post";


function HomePage() {
  return (
    <div className="min-vh-100 tw-pt-14">
      <div className="max-w-147.5 mx-auto py-4">
        <CratePost />

        <ModalCreatePost />

        <Post />
      </div>
    </div>
  );
}

export default HomePage;
