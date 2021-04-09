import React, { useContext } from "react";
import SlidingPane from "react-sliding-pane";
import { SideNav } from "./SideNav";
import { LessonContext } from "../context/LessonContext";

export const LessonPane = () => {
    const [openLessonPane, setOpenLessonPane] = useContext(LessonContext);
    return (
        <SlidingPane
            closeIcon={<div>X</div>}
            isOpen={openLessonPane}
            from="left"
            width="250px"
            title="Lessons:"
            className="lesson-menu"
            overlayClassName="lesson-menu-overlay"
            onRequestClose={() => setOpenLessonPane(!openLessonPane)}
        >
            <SideNav />
        </SlidingPane>
    );
};
