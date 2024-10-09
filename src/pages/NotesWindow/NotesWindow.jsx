import React, { useState, useEffect, useContext } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import NoteWindowCSS from "./NotesWindow.module.css";
import NoteCard from "../../components/NoteCard/NoteCard";
import NotesContext from "../../context/notesContext";

function NotesWindow({ setView }) {
  //get the url parameters
  const { id } = useParams();
  //get context
  const { notesGroups, dispatch } = useContext(NotesContext);
  //get the selcted notes groupe from the stored notes from the context
  const note = notesGroups?.find((item) => item.epoch === +id);
  const [textareaContent, setTextareaContent] = useState("");
  const nav = useNavigate();
  const iconStyle = {
    backgroundColor: note?.color,
    height: "85%",
    aspectRatio: "1/1",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
  };

  const clickableDiv = {
    display: "inline",
    marginLeft: "20px",
    paddingBottom: "10px",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
  };

  const notesByGroup = notesGroups?.find((item) => item.epoch === +id);
  const notesArray = notesByGroup?.notes;
  const decending = notesArray?.sort((a, b) => a.epoch - b.epoch);
  const NoteElementCards = decending?.map((item) => {
    return <NoteCard key={item.epoch} body={item.body} time={item.epoch} />;
  });

  if (!notesByGroup) {
    return <Navigate to='/' replace={true} />;
  }

  useEffect(() => {
    setTextareaContent("");
    //scroll the document whenever the component loads and scroll everytime a new note is added
    const scrollElement = document.getElementById("autoScroll");
    scrollElement.scrollTop = scrollElement?.scrollHeight;
  }, [id, notesArray]);

  const isTextareaEmpty = textareaContent.trim() === "";

  function handelSend() {
    if (isTextareaEmpty) {
      return;
    }
    //dispatcher for adding note
    //match the group from the url params and edit its notes array
    dispatch({
      type: "ADD_NOTE",
      payload: {
        epoch: id,
        newNote: {
          body: textareaContent,
          epoch: Math.floor(new Date().getTime() / 1000.0),
        },
      },
    });
    setTextareaContent("");
    // const scrollElement = document.getElementById("autoScroll");
    // scrollElement.scrollTop = scrollElement?.scrollHeight;
  }
  //get the initials for the bubble
  function initials(string) {
    const words = string?.split(" ");
    let initials = "";
    if (words?.length >= 1) {
      initials += words[0].charAt(0).toUpperCase();
      if (words.length >= 2) {
        initials += words[1].charAt(0).toUpperCase();
      }
    }
    return initials;
  }

  return (
    <>
      <header className={NoteWindowCSS.head}>
        <div
          onClick={() => {
            nav("/");
            setView(true);
          }}
          className={NoteWindowCSS.backArrow}>
          <span className='material-symbols-outlined'>arrow_back</span>
        </div>
        <div style={iconStyle}>{initials(note?.title)}</div>
        <h4>{note?.title}</h4>
      </header>
      <div id='autoScroll' className={NoteWindowCSS.container}>
        {NoteElementCards}
      </div>
      <footer className={NoteWindowCSS.foot}>
        <div className={NoteWindowCSS.textBlock}>
          <textarea
            value={textareaContent}
            onChange={(e) => setTextareaContent(e.target.value)}
            placeholder='Enter your text here...........'
          />
          <div onClick={handelSend} style={clickableDiv}>
            <span
              className={`${NoteWindowCSS.send} material-symbols-outlined  ${
                isTextareaEmpty ? "" : NoteWindowCSS.blueSend
              } `}>
              send
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default NotesWindow;
