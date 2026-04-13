"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from "canvas-confetti";
import { syllabus } from "@/data/syllabus";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [completedTopics, setCompletedTopics] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cc_progress");
    if (saved) {
      try {
        setCompletedTopics(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cc_progress", JSON.stringify(completedTopics));
    }
  }, [completedTopics, isLoaded]);

  const toggleTopic = (unitId, topicTitle, isImportant) => {
    setCompletedTopics(prev => {
      const unitProgress = prev[unitId] || [];
      const isChecking = !unitProgress.includes(topicTitle);
      
      let newUnitProgress;
      if (isChecking) {
        newUnitProgress = [...unitProgress, topicTitle];
        // Trigger confetti ONLY when checking an important topic
        if (isImportant) {
          confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ffffff', '#ffffff', '#ffffff'] // Keep it B&W themed
          });
        }
      } else {
        newUnitProgress = unitProgress.filter(t => t !== topicTitle);
      }

      return {
        ...prev,
        [unitId]: newUnitProgress
      };
    });
  };

  const isCompleted = (unitId, topicTitle) => {
    return (completedTopics[unitId] || []).includes(topicTitle);
  };

  const getUnitStats = (unitId) => {
    const unit = syllabus[unitId];
    if (!unit) return { completed: 0, total: 0, percentage: 0 };
    
    const total = unit.topics.length;
    const completed = (completedTopics[unitId] || []).length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    
    return { completed, total, percentage };
  };

  const getGlobalStats = () => {
    let totalTopics = 0;
    let totalCompleted = 0;

    Object.keys(syllabus).forEach(unitId => {
      totalTopics += syllabus[unitId].topics.length;
      totalCompleted += (completedTopics[unitId] || []).length;
    });

    const percentage = totalTopics === 0 ? 0 : Math.round((totalCompleted / totalTopics) * 100);
    
    return { completed: totalCompleted, total: totalTopics, percentage };
  };

  return (
    <ProgressContext.Provider value={{
      completedTopics,
      toggleTopic,
      isCompleted,
      getUnitStats,
      getGlobalStats,
      isLoaded
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
