import { useState } from "react";
import Navbar from "../components/Navbar";
import HandGesture from "../components/HandGesture";

function MainLayout({ children }) {
  const [handNavigationOpen, setHandNavigationOpen] = useState(false);

  return (
    <>
      <Navbar onOpenHandNavigation={() => setHandNavigationOpen(true)} />
      <HandGesture
        isOpen={handNavigationOpen}
        onClose={() => setHandNavigationOpen(false)}
      />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;