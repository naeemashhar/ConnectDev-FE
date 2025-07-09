import { useState } from "react";
import PreviewCard from "./PreviewCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";

const titleOptions = ["Student", "Fresher", "Professional"];
const skillOptions = [
  { name: "ReactJs", logo: "/physics.png" },
  { name: "NodeJs", logo: "/nodejs.png" },
  { name: "MongoDB", logo: "/database-management.png" },
  { name: "HTML", logo: "/html.png" },
  { name: "CSS", logo: "/css-3.png" },
  { name: "JavaScript", logo: "/js.png" },
  { name: "Python", logo: "/python.png" },
  { name: "TailwindCss", logo: "/css.png" },
  { name: "Express", logo: "/expressjs-icon.svg" },
  { name: "TypeScript", logo: "/typescript.png" },
  { name: "Java", logo: "/java.png" },
  { name: "C++", logo: "/c-.png" },
  { name: "C#", logo: "/c-sharp.png" },
  { name: "PHP", logo: "/php.png" },
];

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [about, setAbout] = useState(user.about || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [city, setCity] = useState(user.city || "");
  const [country, setCountry] = useState(user.country || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [title, setTitle] = useState(user.title || "");
  const [skills, setSkills] = useState(user.skills || []);

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const toggleSkill = (skill) => {
    if (skill.length > 10) return;
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const validateFields = () => {
    if (firstName.trim().length < 4)
      return "First name must be at least 4 characters.";
    if (age < 14 || age > 100) return "Age must be between 14 and 100.";
    if (!["Male", "Female", "Other"].includes(gender))
      return "Please select a valid gender.";
    if (!city.trim()) return "City is required.";
    if (!country.trim()) return "Country is required.";
    if (photoURL && !/^https?:\/\/.+\..+/.test(photoURL))
      return "Invalid photo URL.";
    const uniqueSkills = new Set(skills.map((s) => s.toLowerCase()));
    if (uniqueSkills.size !== skills.length) return "Skills must be unique.";
    return null;
  };

  const saveProfile = async () => {
    setError("");
    const validationError = validateFields();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoURL,
          title,
          about,
          gender,
          age,
          city,
          country,
          skills,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      toast.success("Profile Updated Successfully")
    } catch (error) {
      setError(error.response?.data || "Something went wrong.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#020013] via-cyan-900/2 to-[#020013] px-4 py-10 flex flex-col lg:flex-row items-start justify-center gap-10">
        <form className="w-full max-w-2xl bg-transparent backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-lg space-y-6 text-white">
          <h2 className="text-2xl font-semibold text-center">
            Edit Your Profile
          </h2>

          {/* First & Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="First Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Last Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Title Selection */}
          <div>
            <p className="mb-1 text-white/70">Select Your Title</p>
            <div className="flex flex-wrap gap-2">
              {titleOptions.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setTitle(role)}
                  className={`px-3 py-1 rounded-full border ${
                    title === role
                      ? "bg-cyan-500 text-[#23282b] border-cyan-500"
                      : "text-[#D9DFF2] border-white/20"
                  } hover:bg-cyan-600 transition`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* About */}
          <textarea
            name="about"
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            placeholder="Tell us about yourself..."
            rows={4}
            className="textarea textarea-bordered w-full"
          />

          {/* Age & Gender */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 0 && value <= 100) setAge(value);
              }}
              value={age}
              className="input input-bordered w-full"
              required
              min={14}
              max={100}
            />
            <select
              name="gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Photo URL */}
          <input
            type="text"
            name="photoURL"
            onChange={(e) => setPhotoURL(e.target.value)}
            value={photoURL}
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />

          {/* Skills */}
          <div>
            <p className="mb-1 text-white/70">Select Skills</p>
            <div className="flex flex-wrap gap-2">
              {skillOptions.map(({ name, logo }) => {
                const selected = skills.includes(name);
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => toggleSkill(name)}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm border font-mono ${
                      selected
                        ? "bg-cyan-400 text-[#23282b] border-cyan-400 font-semibold"
                        : "text-[#D9DFF2 ] border-white/20"
                    } hover:bg-cyan-600 transition`}
                  >
                    <img src={logo} alt={name} className="w-5 h-5 rounded" />
                    &lt;{name}&gt;
                  </button>
                );
              })}
            </div>
          </div>

          {/* City & Country */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              placeholder="Country"
              className="input input-bordered w-full"
            />
          </div>

          {/* Buttons */}
          <div className="text-center">
            <button
              className="btn btn-primary px-10 border-2 border-cyan-400 hover:text-[#D9DFF2]"
              onClick={(e) => {
                e.preventDefault();
                saveProfile();
              }}
            >
              Save Profile
            </button>
            <button className="btn btn-primary px-10 ml-8 border-2 border-red-600 hover:bg-red-600">
              Delete Profile
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        </form>

        {/* Preview */}
        <PreviewCard
          user={{
            firstName,
            lastName,
            photoURL,
            title,
            about,
            gender,
            age,
            city,
            country,
            skills,
          }}
        />
      </div>
    </>
  );
};

export default EditProfile;
