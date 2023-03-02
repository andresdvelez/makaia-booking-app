import {
  BodySC,
  HeaderSC,
  PickerWrapperSC,
  SevenColGridSC,
  TitleSC,
} from "./style";

// Icons
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { monthNames } from "../../constants";
import {
  getNumberOfDaysInMonth,
  getSortedDays,
  range,
} from "../getNumberOfDaysInMonth";

function DatePicker({ title, setArriveValue, setDepartureValue, oneway }) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [selectedDepartureDate, setSelectedDepartureDate] = useState(null);
  const [selectedArriveDate, setSelectedArriveDate] = useState(null);

  useEffect(() => {
    setArriveValue({
      yearArrive: selectedArriveDate?.getFullYear(),
      monthArrive: selectedArriveDate?.getMonth() + 1,
      dayArrive: selectedArriveDate?.getDate(),
    });
  }, [selectedArriveDate]);

  useEffect(() => {
    setDepartureValue({
      year: selectedDepartureDate?.getFullYear(),
      month: selectedDepartureDate?.getMonth() + 1,
      day: selectedDepartureDate?.getDate(),
    });
  }, [selectedDepartureDate]);

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleSelection = (e) => {
    // event delegation
    if (e.target.id === "day") {
      setSelectedDepartureDate(
        new Date(currentYear, currentMonth, e.target.getAttribute("data-day"))
      );
    }
  };

  const handleSelectionArrive = (e) => {
    // event delegation
    if (e.target.id === "day") {
      setSelectedArriveDate(
        new Date(currentYear, currentMonth, e.target.getAttribute("data-day"))
      );
    }
  };

  const handleActiveDeparture = (day) => {
    return selectedDepartureDate?.getTime() ===
      new Date(currentYear, currentMonth, day).getTime()
      ? "active"
      : "";
  };

  const handleActiveArrive = (day) => {
    return selectedArriveDate?.getTime() ===
      new Date(currentYear, currentMonth, day).getTime()
      ? "active"
      : "";
  };

  return (
    <>
      <PickerWrapperSC>
        <TitleSC>{title}</TitleSC>
        <HeaderSC>
          <RiArrowLeftSLine onClick={prevMonth} />
          <p>
            {monthNames[currentMonth]} {currentYear}
          </p>
          <RiArrowRightSLine onClick={nextMonth} />
        </HeaderSC>
        <BodySC>
          <SevenColGridSC heading>
            {getSortedDays(currentYear, currentMonth).map((day, i) => (
              <p key={i}>{day}</p>
            ))}
          </SevenColGridSC>
          <SevenColGridSC onClick={handleSelection}>
            {range(
              1,
              getNumberOfDaysInMonth(currentYear, currentMonth) + 1
            ).map((day, i) => (
              <p
                key={i}
                id="day"
                data-day={day}
                className={handleActiveDeparture(day)}
              >
                {day}
              </p>
            ))}
          </SevenColGridSC>
        </BodySC>
      </PickerWrapperSC>
      {oneway && (
        <PickerWrapperSC>
          <TitleSC>{title}</TitleSC>
          <HeaderSC>
            <RiArrowLeftSLine onClick={prevMonth} />
            <p>
              {monthNames[currentMonth]} {currentYear}
            </p>
            <RiArrowRightSLine onClick={nextMonth} />
          </HeaderSC>
          <BodySC>
            <SevenColGridSC heading>
              {getSortedDays(currentYear, currentMonth).map((day, i) => (
                <p key={i}>{day}</p>
              ))}
            </SevenColGridSC>
            <SevenColGridSC onClick={handleSelectionArrive}>
              {range(
                1,
                getNumberOfDaysInMonth(currentYear, currentMonth) + 1
              ).map((day, i) => (
                <p
                  key={i}
                  id="day"
                  data-day={day}
                  className={handleActiveArrive(day)}
                >
                  {day}
                </p>
              ))}
            </SevenColGridSC>
          </BodySC>
        </PickerWrapperSC>
      )}
    </>
  );
}

export default DatePicker;
