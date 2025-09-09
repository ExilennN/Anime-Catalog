import React, { useState, useRef } from "react";
import styles from "./expandable-block-style.module.css";

export default function ExpandableBlock({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [captionRounded, setCaptionRounded] = useState(!defaultOpen);
  const contentRef = useRef(null);

  function handleToggle() {
    if (isOpen) {
      const section = contentRef.current;
      if (section) {
        section.style.maxHeight = section.scrollHeight + "px"; 
        void section.offsetHeight;
        section.style.maxHeight = "0px";
      }
      setIsOpen(false);
    } else {
      setCaptionRounded(false);
      const section = contentRef.current;
      if (section) {
        section.style.maxHeight = section.scrollHeight + "px"; 
      }
      setIsOpen(true);
    }
  }

  function handleTransitionEnd(e) {
    if (e.target === contentRef.current && e.propertyName === "max-height") {
      if (!isOpen) {
        setCaptionRounded(true);
      } else {
        e.target.style.maxHeight = "none";
      }
    }
  }

  return (
    <div className={styles.blockWrapper}>
      <div
        className={`${styles.blockCaption} ${captionRounded ? styles.rounded : styles.openTop}`}
        onClick={handleToggle}
        role="button"
        aria-expanded={isOpen}
      >
        <span className={styles.captionText}>{title}</span>
        <span className={`${styles.toggleIcon} ${isOpen ? styles.rotated : ""}`}>+</span>
      </div>

      <div
        ref={contentRef}
        className={styles.blockContent}
        onTransitionEnd={handleTransitionEnd}
        aria-hidden={!isOpen}
      >
        <div className={styles.blockText}>{children}</div>
      </div>
    </div>
  );
}