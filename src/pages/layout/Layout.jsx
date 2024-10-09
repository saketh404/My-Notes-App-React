import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NotesList from "../../components/NotesList/NotesList";
import LayoutCSS from "./Layout.module.css";
import Modal from "../../components/Modal/Modal";
function Layout({ view, setView }) {
  //modal state
  const [isOpen, setIsOpen] = useState(false);
  //toggle for modal
  function handelModal() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={LayoutCSS.Layout}>
      <NotesList trigModal={handelModal} visiblity={view} setView={setView} />
      {/* modal using portals */}
      <Modal trigModal={handelModal} open={isOpen} />
      <div
        className={`${LayoutCSS.outlet} ${
          view ? LayoutCSS.responsiveOutlet : ""
        }`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
