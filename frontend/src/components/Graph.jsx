import { useEffect, useState } from "react";
import { getUserCheckIns, postUserCheckIn } from "../lib/api";
import { format } from "date-fns";

// Generate grid of last 365 days
const generateDateGrid = (checkInDates) => {
  const today = new Date();
  const start = new Date(today);
  start.setFullYear(today.getFullYear() - 1);
  start.setDate(start.getDate() - start.getDay());

  const dates = [];
  let current = new Date(start);

  while (current <= today) {
    const dateStr = format(current, "yyyy-MM-dd");
    dates.push({
      date: dateStr,
      month: current.getMonth(),
      checkedIn: checkInDates.includes(dateStr),
    });
    current.setDate(current.getDate() + 1);
  }
  return dates;
};

const Graph = ({ userId }) => {
  const [checkIns, setCheckIns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);

  useEffect(() => {
    const fetchCheckIns = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        console.log("📥 Fetching check-ins for:", userId);
        const data = await getUserCheckIns(userId);
        const dates = data?.dates || [];
        console.log("📦 Received check-in dates:", dates);
        setCheckIns(dates);
        setHasCheckedInToday(dates.includes(format(new Date(), "yyyy-MM-dd")));
      } catch (err) {
        console.error("Error fetching check-in data:", err);
        setError("Failed to load check-in data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCheckIns();
  }, [userId]);

  const handleCheckIn = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      console.log("🔄 Attempting to post check-in for:", userId);
      await postUserCheckIn(userId);
      console.log("✅ Successfully posted check-in!");

      const updated = await getUserCheckIns(userId);
      const updatedDates = updated?.dates || [];
      console.log("📅 Updated check-in dates fetched:", updatedDates);

      setCheckIns(updatedDates);
      const todayStr = format(new Date(), "yyyy-MM-dd");
      const checkedInToday = updatedDates.includes(todayStr);
      console.log("📆 Checked in today?", checkedInToday, "| Today:", todayStr);
      setHasCheckedInToday(checkedInToday);
    } catch (err) {
      console.error("Failed to check in", err);
      setError("Check-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const dateGrid = generateDateGrid(checkIns);
  const weeks = [];
  for (let i = 0; i < dateGrid.length; i += 7) {
    weeks.push(dateGrid.slice(i, i + 7));
  }

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Get month labels per week start
  const monthLabels = weeks.map((week) => {
    const firstDay = week[0];
    return monthNames[firstDay?.month];
  });

  return (
    <div className="p-4 bg-base-200 rounded-lg w-full max-w-full hidden lg:block">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">
        Check-In Tracker
      </h2>

      {error && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}

      <button
        className="btn btn-primary mb-4"
        onClick={handleCheckIn}
        disabled={loading || hasCheckedInToday}
      >
        {hasCheckedInToday
          ? "Already Checked In Today"
          : loading
            ? "Checking in..."
            : "Check In"}
      </button>

      {/* Scrollable graph container */}
      <div className=" overflow-x-auto rounded p-2 scroll:none">
        <div className="min-w-[600px]">
          {/* Month labels */}
          <div className="flex pl-8 mb-1 text-xs text-gray-400">
            {monthLabels.map((label, i) => (
              <div key={i} className="w-4 mr-1 text-center">
                {i % 4 === 0 ? label : ""}
              </div>
            ))}
          </div>

          <div className="flex">
            {/* Weekday Labels */}
            <div className="flex flex-col justify-between mr-2 text-xs text-gray-400">
              {dayLabels.map((label, i) => (
                <span key={i}>{i % 2 === 1 ? label : ""}</span>
              ))}
            </div>

            {/* Weekly columns */}
            <div className="flex">
              {weeks.map((week, i) => (
                <div key={i} className="flex flex-col gap-1 mr-1">
                  {week.map((day, j) => (
                    <div
                      key={j}
                      title={day.date}
                      className={`w-4 h-4 rounded-sm transition-colors duration-300 ${day.checkedIn ? "bg-primary" : "bg-gray-700"
                        }`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
