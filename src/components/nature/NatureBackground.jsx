import leaf1 from "../../assets/nature/leaf1.svg";
import leaf2 from "../../assets/nature/leaf2.svg";
import leaf3 from "../../assets/nature/leaf3.svg";
import leaf4 from "../../assets/nature/leaf4.svg";

function NatureBackground() {
  return (
    <>
      <img
        src={leaf1}
        className="fixed top-10 left-10 w-12 opacity-20 animate-bounce pointer-events-none"
        alt=""
      />

      <img
        src={leaf2}
        className="fixed top-40 right-16 w-10 opacity-20 animate-pulse pointer-events-none"
        alt=""
      />

      <img
        src={leaf3}
        className="fixed bottom-20 left-20 w-14 opacity-20 animate-bounce pointer-events-none"
        alt=""
      />

      <img
        src={leaf4}
        className="fixed bottom-10 right-10 w-16 opacity-20 animate-pulse pointer-events-none"
        alt=""
      />
    </>
  );
}

export default NatureBackground;