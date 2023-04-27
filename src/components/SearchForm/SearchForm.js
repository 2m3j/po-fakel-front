import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Autocomplete, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import moment from "moment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { initialCards } from "../../js/initial_cards.js";
import {
  MOBILE_WIDTH,
  TABLET_WIDTH,
  LARGE_PAGE_CARDS_COUNT,
  LARGE_NEXT_PAGE_CARDS_COUNT,
  SMALL_PAGE_CARDS_COUNT,
  SMALL_NEXT_PAGE_CARDS_COUNT,
  ADDING_PAGE_AMOUNT_S,
  ADDING_PAGE_AMOUNT_L,
} from "../../utils/constants";
import Section from "../section/Section";
import "./SearchForm.scss";
import { useForm, Controller } from "react-hook-form";
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
  useEffect(() => {
    let numderOfShowned =
      screenSize < MOBILE_WIDTH
        ? SMALL_PAGE_CARDS_COUNT
        : LARGE_PAGE_CARDS_COUNT;
    setNumberOfShowed(numderOfShowned);
  }, [screenSize]);
  useEffect(() => {
    let isThereMore = cards.length > showned ? true : false;
    setMore(isThereMore);
  }, [showned]);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { solder: "", date: "" },
  });

  const select = [
    "Феноберцев Роман Филиппович",
    "Халемин Степан Александрович",
    "Серболин Максим Никитович",
  ];
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
    const date = data.date;
    const filterByKeyword = (card) => {
      return card.solder.toLowerCase().includes(solder.toLowerCase());
    };
    const filterByDate = (card) => {
      return card.date.toLowerCase().includes(date.format("L"));
    };
    const cards = !!(solder && date)
      ? initialCards.filter(filterByKeyword).filter(filterByDate)
      : !!solder
      ? initialCards.filter(filterByKeyword)
      : !!date
      ? initialCards.filter(filterByDate)
      : initialCards;
    setCards(cards);
    reset();
  };
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-10">
            <div className="section__input col-12 col-md-5 col-lg-5 mb-4 mb-md-0">
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
                  field: { onChange, name, value },
                  fieldState: { invalid, isDirty, error }, //optional
                  formState: { errors }, //optional, but necessary if you want to show an error message
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
                    noOptionsText="К сожалению, у нас пока нет данных"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        onChange={onChange}
                        /*   helperText="Введите имя на кириллице" */
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
            <div className="col-12 col-md-5 col-lg-5 mb-4 mb-md-0">
              <Controller
                name="date"
                control={control}
                render={({
                  field: { onChange, name, value },
                  fieldState: { invalid, isDirty }, //optional
                  formState: { errors }, //optional, but necessary if you want to show an error message
                }) => (
                  <DatePicker
                    type="text"
                    disableFuture
                    dateFormat="dd.MM.yyyy"
                    locale="ru"
                    selected={value}
                    onChange={onChange}
                    label={"Период публикации"}
                    sx={{
                      width: 1,
                    }}
                    slotsProps={{ textField: { variant: "outlined" } }}
                    components={{
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
