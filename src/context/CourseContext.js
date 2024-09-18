'use client';
import { useContext, createContext, useState } from "react";

const CourseContext = createContext();

export const useCourse = () => {
  return useContext(CourseContext);
};

export const CourseContextProvider = ({ children }) => {
  const [firstLessonId, setFirstLessonId] = useState(null);
  const [firstChapterId, setFirstChapterId] = useState(null);

  const updateCourseNavigation = (lessonId, chapterId) => {
    setFirstLessonId(lessonId);
    setFirstChapterId(chapterId);
  };

  return (
    <CourseContext.Provider value={{ firstLessonId, firstChapterId, updateCourseNavigation }}>
      {children}
    </CourseContext.Provider>
  );
};

