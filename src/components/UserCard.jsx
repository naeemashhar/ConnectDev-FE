import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const [hoverAction, setHoverAction] = useState(null);

  const dispatch = useDispatch();

  const handelSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) return null;

  const {
    _id,
    firstName,
    lastName,
    photoURL,
    title,
    about,
    gender,
    age,
    skills,
    city,
    country,
  } = user;

  const skillOptions = [
    { name: "ReactJs", logo: "/physics.png" },
    { name: "NodeJs", logo: "/nodejs.png" },
    { name: "MongoDB", logo: "/database-management.png" },
    { name: "HTML", logo: "/html.png" },
    { name: "CSS", logo: "/css-3.png" },
    { name: "JavaScript", logo: "/js.png" },
    { name: "Python", logo: "/python.png" },
    { name: "Express", logo: "/expressjs-icon.svg" },
    { name: "TypeScript", logo: "/typescript.png" },
    { name: "Java", logo: "/java.png" },
    { name: "C++", logo: "/c-.png" },
    { name: "C#", logo: "/c-sharp.png" },
    { name: "PHP", logo: "/php.png" },
  ];

  // Compute rotation + border color based on hoverAction
  const cardStateClass =
    hoverAction === "interested"
      ? "rotate-[3deg] border-green-500"
      : hoverAction === "ignore"
      ? "-rotate-[3deg] border-red-500"
      : "rotate-0 border-cyan-500";

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-6 pb-24 bg-transparent"
      style={{ backgroundImage: "url('/bg-login.png')" }}
    >
      <div
        className={`w-full max-w-md bg-transparent backdrop-blur-xl px-4 sm:px-6 py-8 sm:py-10 
    rounded-3xl shadow-xl text-center transition-all duration-500 ease-in-out border 
    ${cardStateClass} mb-20`}
      >
        {/* Profile Image */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 group">
          <img
            src={photoURL || "/fallback.png"}
            alt={`${firstName} ${lastName}`}
            className="w-full h-full object-cover border-4 border-cyan-400 shadow-md
          transition-all duration-300 ease-in-out
          [clip-path:polygon(28%_0%,100%_0%,100%_78%,78%_100%,0%_100%,0%_28%)]
          group-hover:clip-path-none group-hover:rounded-full"
          />
        </div>

        {/* Name + Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          {firstName} {lastName}
          <span className="ml-2 text-sm text-cyan-400 font-light">
            ({title || "No Title"})
          </span>
        </h2>

        {/* Info */}
        <div className="mt-3 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-white/60">
          <span className="flex items-center gap-1">
            <i className="ri-map-pin-line text-cyan-400" /> {city}, {country}
          </span>
          <span className="flex items-center gap-1">
            <i className="ri-user-line text-cyan-400" /> {gender}
          </span>
          <span className="flex items-center gap-1">
            <i className="ri-calendar-line text-cyan-400" /> {age} yrs
          </span>
        </div>

        {/* About */}
        <p className="mt-4 text-sm text-white/80 leading-relaxed px-2">
          {about || "No bio available."}
        </p>

        {/* Skills */}
        {Array.isArray(skills) && skills.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {skills.map((skill, i) => {
              const matchedSkill = skillOptions.find((s) => s.name === skill);
              return (
                <span
                  key={i}
                  className="flex items-center gap-2 px-3 py-1 text-xs font-mono text-cyan-300 border border-cyan-500/40 rounded-full bg-cyan-500/10 shadow-md hover:bg-cyan-500/20 transition"
                >
                  {matchedSkill?.logo && (
                    <img
                      src={matchedSkill.logo}
                      alt={skill}
                      className="w-4 h-4 rounded-sm"
                    />
                  )}
                  &lt;{skill}&gt;
                </span>
              );
            })}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="btn btn-sm btn-outline border-red-500 text-red-400 hover:bg-red-500/20 w-full sm:w-28"
            onMouseEnter={() => setHoverAction("ignore")}
            onMouseLeave={() => setHoverAction(null)}
            onClick={() => handelSendRequest("ignored", _id)}
          >
            <i className="ri-close-line mr-1" /> Ignore
          </button>
          <button
            className="btn btn-sm btn-outline border-green-500 text-green-400 hover:bg-green-500/20 w-full sm:w-28"
            onMouseEnter={() => setHoverAction("interested")}
            onMouseLeave={() => setHoverAction(null)}
            onClick={() => handelSendRequest("interested", _id)}
          >
            <i className="ri-heart-line mr-1" /> Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
