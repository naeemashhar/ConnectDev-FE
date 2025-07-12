import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed?.users);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res.data.users));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return <div className="text-white">Loading feed...</div>;

  if (feed.length <= 0) {
    return (
      <div className="text-white text-center mt-10 text-2xl font-bold" >
        You've reviewed all available profiles. New developers will appear as
        they join.
      </div>
    );
  }

  return (
    <div>
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
