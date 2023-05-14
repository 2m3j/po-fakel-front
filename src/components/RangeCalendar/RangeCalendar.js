import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GradeIcon from "@mui/icons-material/Grade";
import { Controller, useFormContext } from "react-hook-form";
import Badge from "@mui/material/Badge";
import { initialCards } from "../../js/initial_cards.js";

function RangeCalendar({ size }) {
  const methods = useFormContext();
  let dates = [];
  const partOf12 = size;
  initialCards.map((card) => dates.push(card.date));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <div className={`col-12 col-md-${partOf12}  mb-4 mb-md-0`}>
        <Controller
          name="datefrom"
          control={methods.control}
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <DatePicker
              disableFuture
              dateFormat="dd.MM.yyyy"
              locale="ru"
              value={value || null}
              onChange={onChange}
              onClose={() => methods.clearErrors()}
              label={"От"}
              maxDate={methods.getValues("datetill")}
              onError={() =>
                methods.setError("datefrom", {
                  type: "custom",
                  message:
                    "Дата начала должна быть позже даты окончания периода",
                })
              }
              componentsProps={{
                textField: {
                  helperText: errors?.datefrom?.message,
                },
              }}
              sx={{
                width: 1,
              }}
              components={{
                Day: (props) => {
                  const isSelected =
                    !props.outsideCurrentMonth &&
                    dates.includes(props.day.$d.toLocaleDateString());
                  return (
                    <Badge
                      key={props.day.toString()}
                      overlap="circular"
                      badgeContent={
                        isSelected ? (
                          <GradeIcon htmlColor="red" fontSize="small" />
                        ) : undefined
                      }
                    >
                      <PickersDay {...props} />
                    </Badge>
                  );
                },
                OpenPickerIcon: CalendarMonthIcon,
              }}
            />
          )}
        />
      </div>
      <div className={`col-12 col-md-${partOf12}  mb-4 mb-md-0`}>
        <Controller
          name="datetill"
          control={methods.control}
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <DatePicker
              disableFuture
              dateFormat="dd.MM.yyyy"
              locale="ru"
              value={value || null}
              onChange={onChange}
              onClose={() => methods.clearErrors()}
              label={"До"}
              minDate={methods.getValues("datefrom")}
              onError={() =>
                setError("datetill", {
                  type: "custom",
                  message:
                    "Дата окончания должна быть позже даты начала периода",
                })
              }
              componentsProps={{
                textField: {
                  helperText: errors?.datetill?.message,
                },
              }}
              sx={{
                width: 1,
              }}
              components={{
                Day: (props) => {
                  const isSelected =
                    !props.outsideCurrentMonth &&
                    dates.includes(props.day.$d.toLocaleDateString());
                  return (
                    <Badge
                      key={props.day.toString()}
                      overlap="circular"
                      badgeContent={
                        isSelected ? (
                          <GradeIcon htmlColor="red" fontSize="small" />
                        ) : undefined
                      }
                    >
                      <PickersDay {...props} />
                    </Badge>
                  );
                },
                OpenPickerIcon: CalendarMonthIcon,
              }}
            />
          )}
        />
      </div>
    </LocalizationProvider>
  );
}

export default RangeCalendar;
