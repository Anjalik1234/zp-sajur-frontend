import SunCalc from "suncalc";
import location from "../data/location.json";

export function getSunTimes(date) {
  const times = SunCalc.getTimes(
    date,
    location.latitude,
    location.longitude
  );

  const formatTime = (time) => {
    return time.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  };

  return {
    sunrise: formatTime(times.sunrise),
    sunset: formatTime(times.sunset)
  };
}
