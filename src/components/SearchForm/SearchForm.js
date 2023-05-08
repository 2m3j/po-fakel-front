import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Autocomplete, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GradeIcon from "@mui/icons-material/Grade";
import { initialCards } from "../../js/initial_cards.js";
import {
  MOBILE_WIDTH,
  LARGE_PAGE_CARDS_COUNT,
  SMALL_PAGE_CARDS_COUNT,
  ADDING_PAGE_AMOUNT_S,
  ADDING_PAGE_AMOUNT_L,
} from "../../utils/constants";
import Section from "../section/Section";
import "./SearchForm.scss";
import { useForm, Controller } from "react-hook-form";
import Badge from "@mui/material/Badge";
const theme = createTheme({
  palette: {
    primary: {
      main: "#da8a3a",
    },
  },
});

function SearchForm() {
  const [isMore, setMore] = useState(false);
  const [showned, setNumberOfShowed] = useState(6);
  const [cards, setCards] = useState(initialCards);
  let screenSize = window.innerWidth;
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
    getValues,
    clearErrors,
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues: { solder: "", datefrom: "", datetill: "" },
  });
  const select = [
    "Феноберцев Роман Филиппович",
    "Халемин Степан Александрович",
    "Серболин Максим Никитович",
  ];
  // useEffects
  useEffect(() => {
    let numderOfShowned =
      screenSize < MOBILE_WIDTH
        ? SMALL_PAGE_CARDS_COUNT
        : LARGE_PAGE_CARDS_COUNT;
    setNumberOfShowed(numderOfShowned);
  }, [screenSize, cards]);

  useEffect(() => {
    let isThereMore = cards.length > showned ? true : false;
    setMore(isThereMore);
  }, [showned]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const handleMoreClick = (e) => {
    e.preventDefault();
    const moreNumber =
      screenSize < MOBILE_WIDTH ? ADDING_PAGE_AMOUNT_S : ADDING_PAGE_AMOUNT_L;
    let newShowned = showned + moreNumber;
    if (newShowned >= cards.length) {
      newShowned = cards.length;
      setMore(false);
    }
    setNumberOfShowed(newShowned);
    return;
  };
  const onSubmit = (data) => {
    const solder = data.solder;
    const datefrom = data.datefrom;
    const datetill = data.datetill;
    const filterByKeyword = (card) => {
      return card.solder.toLowerCase().includes(solder.toLowerCase());
    };
    const filterByDate = (card) => {
      let uno = new Date(datefrom);
      let dos = new Date(datetill);
      let [day, month, year] = card.date.split(".");
      const tres = new Date(+year, +month - 1, +day);
      return tres > uno && tres < dos;
    };
    const cards = !!(solder && datefrom && datetill)
      ? initialCards.filter(filterByKeyword).filter(filterByDate)
      : !!solder
      ? initialCards.filter(filterByKeyword)
      : !!datefrom && !!datetill
      ? initialCards.filter(filterByDate)
      : initialCards;
    setCards(cards);
    setNumberOfShowed(cards.length);
  };
  let dates = [];
  initialCards.map((card) => dates.push(card.date));
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-10">
            <div className="section__input col-12 col-md-6 col-lg-6 mb-4 mb-md-0">
              <Controller
                name="solder"
                control={control}
                rules={{
                  pattern: {
                    value: /[а-я]+/i,
                    message: "Введите имя на кириллице",
                  },
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { invalid, error },
                }) => (
                  <Autocomplete
                    id="outlined"
                    options={select}
                    className="section__input"
                    isOptionEqualToValue={(option, value) =>
                      value === undefined ||
                      value === "" ||
                      option.id === value.id
                    }
                    open={value.length >= "3"}
                    noOptionsText="К сожалению, у нас пока нет данных"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        onChange={onChange}
                        label="Имя бойца"
                        pattern="[а-я]+/i"
                        className="section__input"
                        error={invalid}
                        helperText={error?.message}
                        inputProps={{ ...params.inputProps, type: "search" }}
                      />
                    )}
                    onChange={(event, values, reason) => onChange(values)}
                    value={value}
                  />
                )}
              />
            </div>
            <div className="col-12 col-md-2 col-lg-2 mb-4 mb-md-0">
              <Controller
                name="datefrom"
                control={control}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
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
            <div className="col-12 col-md-2 col-lg-2 mb-4 mb-md-0">
              <Controller
                name="datetill"
                control={control}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
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
            <div className="col-12 col-md-2 col-lg-2 mb-4 mb-md-0 d-md-none d-lg-block">
              <button type="submit" className="section__btn section__input">
                Искать
              </button>
            </div>
            <div className="col-12 col-md-2 col-lg-2 mb-4 mb-md-0 d-none d-md-block d-lg-none">
              <button
                type="submit"
                className="top-search__submit section__btn section__input m-0"
              >
                <svg>
                  <use href="images/svg/symbol/svg/sprite.symbol.svg#search"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className="cards row g-5">
            <Section items={cards} showned={showned} />
          </div>
          <div
            className={`search-form__container-more ${
              isMore ? "search-form__container-more_visible" : ""
            }`}
          >
            <button className="button" onClick={handleMoreClick}>
              <p className="button search-form__more">Больше новостей</p>
            </button>
          </div>
        </form>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default SearchForm;