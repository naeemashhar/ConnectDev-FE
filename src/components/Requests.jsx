import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.request);
  const dispatch = useDispatch();
  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requests) {
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        <p>Loading requests...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020013] via-cyan-500/5 to-[#24243e] px-6 py-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          Your <span className="text-cyan-500">Requests</span>
        </h2>

        {requests.length === 0 ? (
          <div className="bg-white/5 p-6 rounded-xl text-white/60 text-center border border-white/10">
            You haven’t connected with anyone yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {requests.map((request) => {
              const user = request.fromUserId;

              return (
                <div
                  key={request._id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl duration-300"
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

                  <p className="text-sm text-white/70 italic mb-4 px-2">
                    {user.about}
                  </p>

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
                    <button className="btn btn-sm btn-outline border-green-500 text-green-400 hover:bg-green-500/20 transition">
                      <i className="ri-user-add-line mr-1" />
                      Accept
                    </button>
                    <button className="btn btn-sm btn-outline border-red-500 text-red-400 hover:bg-red-500/20 transition">
                      <i className="ri-close-line mr-1" />
                      Reject
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Requests;
