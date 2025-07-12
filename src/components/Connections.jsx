import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addConnections, removeConnections } from "../utils/connectionSlice";

import { toast } from "react-toastify";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);
  const navigate = useNavigate();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.error("Error fetching connections", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/user/connections/${id}`, {
        withCredentials: true,
      });
      dispatch(removeConnections(id));
    } catch (error) {
      console.error("Failed to remove connection:", error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) {
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        <p>Loading connections...</p>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-[#020013] via-cyan-800/5 to-[#020013] px-6 py-8 text-white"
      style={{
        backgroundImage: "url('/main-bg.png')",
      }}
    >
      <div className="max-w-6xl mx-auto">
         <button
          onClick={() => navigate(-1)}
          className="cursor-pointer absolute top-6 left-6 px-4 py-2 text-md text-white rounded hover:bg-white/10 transition hover:text-cyan-500 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <h2 className="text-3xl font-semibold mb-6">
          Your <span className="text-cyan-500">Connections</span>
        </h2>

        {connections.length === 0 ? (
          <div className="bg-white/5 p-6 rounded-xl text-white/60 text-center border border-white/10">
            You haven’t connected with anyone yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {connections.map((user) => (
              <div
                key={user._id}
                className=" backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl duration-300"
              >
                <img
                  src={user.photoURL}
                  alt={user.firstName}
                  className="object-cover w-25 h-25 rounded-full border-2 border-cyan-500 mb-4"
                />
                <h3 className="text-lg font-bold">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="text-white/60 text-sm mb-2">{user.title}</p>

                {/* About */}
                <p className="text-sm text-white/70 italic mb-4 px-2">
                  {user.about}
                </p>

                {/* Gender / Age / Location */}
                <div className="flex flex-wrap justify-center gap-4 text-xs text-white/60 mb-3">
                  <span className="flex items-center gap-1">
                    <i className="ri-user-line text-cyan-400" />
                    {user.gender}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-calendar-line text-cyan-400" />
                    {user.age} yrs
                  </span>
                  {(user.city || user.country) && (
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line text-cyan-400" />
                      {user.city}, {user.country}
                    </span>
                  )}
                </div>

                {/* Skills */}
                {user.skills?.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {user.skills.slice(0, 5).map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full font-mono"
                      >
                        &lt;{skill}&gt;
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-center gap-4 mt-2">
                  <button
                    onClick={() => toast.info("💬 Chat feature coming soon!")}
                    className="btn btn-sm btn-outline border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 transition"
                  >
                    <i className="ri-chat-1-line mr-1" />
                    Message
                  </button>

                  <button
                    onClick={() => handleRemove(user._id)}
                    className="btn btn-sm btn-outline border-red-500 text-red-400 hover:bg-red-500/20 transition"
                  >
                    <i className="ri-user-unfollow-line mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Connections;
