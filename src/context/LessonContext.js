import { createContext, useState } from "react";

export function lessonCtx() {
    const [openLessonPane, setOpenLessonPane] = useState(false);
    return [openLessonPane, setOpenLessonPane];
}

export const LessonContext = createContext(null);
