import React, { useEffect, useState } from "react";
import styles from "./imagedisplay.module.css";
import * as R from 'ramda'

function ImageDisplay(data) {
  const [imgIds, setImgIds] = useState([]);

  const [style, setStyle] = useState({});

  const [hover, setHover] = useState(false);

  const [newWindow, setNewWindw] = useState(false);

  const [clickable, setClickable] = useState(false);

  const [modal, setModal] = useState(false);

  const [showHeader, setShowHeader] = useState(null);

  const [classNames, setClassNames] = useState(null);

  const [ids, setIds] = useState(null);

  const [excludes, setExcludes] = useState(null);

  const GOOGLE_API_KEY = data.data.gkey;
  const GOOGLE_DRIVE_URL_START =
    "https://www.googleapis.com/drive/v2/files?q=%27";
  const GOOGLE_DRIVE_URL_END = "%27+in+parents&key=";
  const GOOGLE_DRIVE_IMG_URL = "http://drive.google.com/uc?export=view&id=";
  const options = data.data.options;
  const header = data.data.header;
  useEffect(() => {
    loadData();
    loadSettings(options);
  }, []);

  function loadSettings(options) {
    if (options.style) {
      setStyle(options.style);
    }
    if (options.onClick) {
      setClickable(true);
      if (options.onClick.newWindow) {
        setNewWindw(true);
      }
      if (options.onClick.modal) {
        setModal(true);
      }
    }
    if (options.hover) {
      setHover(true);
    }
    if (header) {
      setShowHeader(true);
    }

    if (options.attachClass) {
      setClassNames(options.attachClass);
    }

    if (options.attachId) {
      setIds(options.attachId);
    }
    if (options.exclude) {
      setExcludes(options.exclude);
    }
  }

  async function loadData() {
    await fetch(
      GOOGLE_DRIVE_URL_START +
      data.data.dirId +
      GOOGLE_DRIVE_URL_END +
      GOOGLE_API_KEY
    )
      .then(response => response.json())
      .then(jsonResp => {
        setImgIds(jsonResp.items);
      });
  }

  function checkFormat(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  // function ModalView(props) {
  //   return (
  //     <div>
  //       <div id="modal-container" className="modal">
  //         <span className="close">&times;</span>
  //         <Image className="modal-content" src={'hi'} id="curr-modal" alt="" style={{width: "100px"}}/>
  //         <div id="caption" />
  //       </div>
  //     </div>
  //   );
  // }

  function showModal(imgId) {
    const modal = document.getElementById("modal-container");
    const modalImg = document.getElementById("curr-modal");
    modalImg.src = imgId;
    modal.style.display = "block";
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal.style.display = "none";
    };
  }

  const renderImages = (className, id, exclude, item ,i) => {

    return (
      <div>
        {!exclude && (
          <img
            className={styles.image}
            onClick={() => {
              modal && showModal(GOOGLE_DRIVE_IMG_URL + item.id);
            }}
            src={GOOGLE_DRIVE_IMG_URL + item.id}
            id={id ? id : null}
            key={i}
            alt={item.title}
          />
        )}
      </div>
    )

  }

  const renderMain = (className, id, exclude, href, target, item, i) => {
    if (!R.isEmpty(href)) {
      return (
        <a
          href={href}
          target={target}
        >
          {renderImages(className, id, exclude, item, i)}
        </a>
      )
    }
    return (
      renderImages(className, id, exclude, item, i)
    )
  }

  return (
    <div className={styles.imageContainer} >

      {modal}

      {imgIds &&
        imgIds.sort(() => Math.random() - 0.5).map((item, i) => {
          const title = R.propOr("", "title", item)
          if (checkFormat(item.title)) {
            const className = R.propOr("", title, classNames)
            const id = R.propOr("", title, ids)
            const exclude = R.propOr("", title, excludes);
            const href = !modal && clickable ? GOOGLE_DRIVE_IMG_URL + item.id : ""
            const target = newWindow ? "_blank" : ""
            return(renderMain(className, id, exclude, href, target, item, i))
          }
        })}
    </div>
  );
}

export default ImageDisplay;
