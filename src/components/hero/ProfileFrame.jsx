import profile from "../../assets/images/profile-porto.png";

function ProfileFrame() {
  return (
    <div className="relative flex justify-center items-center">

      <div className="absolute w-[380px] h-[380px] rounded-full bg-green-300 blur-3xl opacity-25"></div>

      <div className="relative rounded-full p-3 bg-gradient-to-br from-green-300 via-green-100 to-green-400 shadow-2xl">

        <img
          src={profile}
          alt="Virgin"
          className="
            w-80
            h-80
            rounded-full
            object-cover
            border-[10px]
            border-white
            shadow-xl
          "
        />

      </div>

    </div>
  );
}

export default ProfileFrame;