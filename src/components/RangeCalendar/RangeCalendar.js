import React, { useEffect } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
/* import GradeIcon from "@mui/icons-material/Grade"; */
/* import GradeIcon from "@mui/icons-material/StarRateTwoTone"; */
import GradeIcon from "@mui/icons-material/StarBorderPurple500TwoTone";
import { Controller, useFormContext } from "react-hook-form";
import Badge from "@mui/material/Badge";

function RangeCalendar({ size, dates }) {
  const {
    control,
    formState: { isSubmitSuccessful, errors },
    getValues,
    clearErrors,
    setError,
  } = useFormContext({
    mode: "onChange",
    defaultValues: { solder: "", datefrom: "", datetill: "" },
  });
  const partOf12 = size;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <div className={`col-12 col-md-${partOf12}  mb-4 mb-md-0`}>
        <Controller
          name="datefrom"
          control={control}
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <DatePicker
              disableFuture
              dateFormat="dd.MM.yyyy"
              locale="ru"
              value={value || null}
              onChange={onChange}
              onClose={() => clearErrors()}
              label={"От"}
              maxDate={getValues("datetill")}
              onError={() =>
                setError("datefrom", {
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
          control={control}
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <DatePicker
              disableFuture
              dateFormat="dd.MM.yyyy"
              locale="ru"
              value={value || null}
              onChange={onChange}
              onClose={() => clearErrors()}
              label={"До"}
              minDate={getValues("datefrom")}
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
