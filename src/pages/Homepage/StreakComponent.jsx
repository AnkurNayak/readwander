/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import { useEffect, useState } from "react";
import { SiFireship } from "react-icons/si";

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <StreakComponent /> : Add Streaks to localStorage and utilize
/* ----------------------------------------------------------------------------------------------------- */
const StreakComponent = () => {
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const streakDates = JSON.parse(localStorage.getItem("streakDates")) || [];

    // Update streak and store today's date
    if (!streakDates.includes(today)) {
      localStorage.setItem(
        "streakDates",
        JSON.stringify([...streakDates, today])
      );
    }
    setStreak(streakDates.length);

    // Calculate longest streak
    let currentStreak = 0;
    let maxStreak = 0;
    streakDates.forEach((date, index) => {
      if (index === 0 || date !== streakDates[index - 1]) {
        currentStreak = 1;
      } else {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      }
    });
    setLongestStreak(maxStreak);
  }, []);

  const totalBooksOpened = Math.max(Object.keys(localStorage).length - 1, 0);

  const getIconColor = (day) => {
    const streakDates = JSON.parse(localStorage.getItem("streakDates")) || [];
    const streakDays = streakDates.map((date) => new Date(date).getDay());
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = dayOfWeek.indexOf(day);
    return streakDays.includes(dayIndex) ? "#ff5a00" : "gray";
  };
  return (
    <div className="md:px-24 md:py-12 p-6 grid lg:grid-cols-2 gap-y-4">
      <div className="flex gap-4">
        <div className="flex justify-center items-center font-bold text-3xl relative z-10">
          <div className="rounded-full bg-transparent border-8 min-h-24 min-w-24 border-[#ff5a00]"></div>
          <span className="flex items-center justify-center gap-1 absolute">
            {streak}
            <SiFireship size={28} color="#ff5a00" />
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-3xl font-bold min-w-max max-sm:text-lg">
            You are on a {streak} day streak!
          </h1>
          <span className="flex justify-between w-full max-sm:flex-col">
            <p className="min-w-max font-medium">
              Longest Streak: {longestStreak} day
            </p>
            <p className="min-w-max font-medium">
              {totalBooksOpened} book Opened
            </p>
          </span>
        </div>
      </div>
      <div className="flex sm:text-xl font-bold min-w-max max-sm:text-sm items-center">
        <div className="grid grid-cols-6 max-sm:grid-cols-3 items-center flex-1 gap-x-2 gap-y-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 py-6 px-3 border-2 rounded-md justify-center items-center bg-white shadow-lg"
            >
              {day} <SiFireship size={28} color={getIconColor(day)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreakComponent;
