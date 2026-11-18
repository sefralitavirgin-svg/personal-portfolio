import { useState } from "react";
import Navbar from "../components/Navbar";
import HandGesture from "../components/HandGesture";
import GinnyAssistant from "../components/GinnyAssistant";

function MainLayout({ children }) {
  const [handNavigationOpen, setHandNavigationOpen] = useState(false);

  return (
    <>
      <Navbar onOpenHandNavigation={() => setHandNavigationOpen(true)} />
      <HandGesture
        isOpen={handNavigationOpen}
        onClose={() => setHandNavigationOpen(false)}
      />
      <GinnyAssistant />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;