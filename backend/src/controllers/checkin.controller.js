import CheckIn from "../models/CheckIn.js";

export const getCheckIns = async (req, res) => {
  try {
    const userId = req.params.userId;
    const checkIn = await CheckIn.findOne({ user: userId });
    if (!checkIn) return res.json({ dates: [] });

    res.json({ dates: checkIn.dates });
  } catch (err) {
    console.error("Error in getCheckIns:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const postCheckIn = async (req, res) => {
  try {
    const userId = req.params.userId;
    // const today = new Date().toISOString().split("T")[0];
    // const today = new Date().toISOString().slice(0,10); //'yyyy-MM-dd' for utc
    const today = new Date().toLocaleDateString("en-CA"); // local yyyy-MM-dd for locat time zone

    console.log("✅ POST check-in for", userId, "Date:", today);

    let checkIn = await CheckIn.findOne({ user: userId });

    if (!checkIn) {
      checkIn = new CheckIn({ user: userId, dates: [today] });
    } else if (!checkIn.dates.includes(today)) {
      checkIn.dates.push(today);
    }

    await checkIn.save();
    res.json({ message: "Checked in", dates: checkIn.dates });
  } catch (err) {
    console.error("Error in postCheckIn:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
