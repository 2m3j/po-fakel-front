import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
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
  components: {
    MuiButton: {
      styleOverrides: {
        startIcon: {
          fontSize: "30",
          size: 30,
        },
      },
    },
  },
  overrides: {
    MuiButton: {
      iconSizeLarge: {
        "& > *:first-child": {
          fontSize: 30,
        },
      },
    },
  },
});

function SearchForm() {
  const [isMore, setMore] = useState(false);
  const [showned, setNumberOfShowed] = useState(6);
  const [cards, setCards] = useState(initialCards);
  const [date, setDate] = useState(new Date());
  let screenSize = window.innerWidth;
  /* console.log("screenSize", screenSize); */
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
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: { solder: "", date: "" },
  });
  /*   const [value, setValue] = useState(); */

  /* const filterBySolder = (solder) => {
    return (initialCards.solder = solder);
  };
  const filter = (searchQuery, solder) => {
    const filterByKeyword = (card) => {
      return JSON.stringify(card)
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    };
    const filteredData = solder
      ? initialCards.filter(solder)
      : initialCards.filter(filterByKeyword);
    return filteredData;
  }; */
  const handleInput = (keyWord) => {
    const searchQuery = keyWord.target.innerText;
    if (searchQuery) {
      const filterByKeyword = (card) => {
        return JSON.stringify(card)
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      };
      setCards(initialCards.filter(filterByKeyword));
    } else setCards(initialCards);
  };
  /*   const handleSubmit = (e) => {
    e.preventDefault();
  }; */
  const select = [
    "Феноберцев Роман Филиппович",
    "Халемин Степан Александрович",
    "Серболин Максим Никитович",
  ];
  /* console.log(JSON.stringify(initialCards).includes("Серболин Максим Никитович")); */
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
  console.log(watch());
  const onSubmit = (data) => console.log(data);
  /* const cards = filteredData ? filteredData : initialCards; */
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-10">
            <div className="section__input col-12 col-md-5 col-lg-5 mb-4 mb-md-0">
              <Controller
                name="solder"
                control={control}
                render={({ params }) => (
                  <Autocomplete
                    {...params}
                    disablePortal
                    id="outlined"
                    options={select}
                    /*       value={value} */
                    className="section__input"
                    /*  onChange={handleInput} */
                    /*  isOptionEqualToValue={(option, value) => option.code === value} */
                    isOptionEqualToValue={(option, value) =>
                      value === undefined ||
                      value === "" ||
                      option.id === value.id
                    }
                    noOptionsText="К сожалению, у нас пока нет данных"
                    renderOption={(props, select) => (
                      <Box component="li" {...props}>
                        {select}
                      </Box>
                    )}
                    sx={{ noOptions: { color: "red" } }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        /*     helperText="Введите имя на кириллице" */
                        label="Имя бойца"
                        pattern="[а-я]+/i"
                        className="section__input"
                        inputProps={{ ...params.inputProps }}
                      />
                    )}
                  />
                )}
              />
            </div>
            <div className="col-12 col-md-5 col-lg-5 mb-4 mb-md-0">
              <Controller
                name="date"
                control={control}
                defaultValue=""
                render={(params) => (
                  <DatePicker
                    {...params}
                    /*   selected={value} 
                    value={params.value}
                    onChange={(e, data) => {
                         console.log(params); 
                      params.setValue(data);
                      params.field.onChange(data);
                    }}
                    className="section__input_type_date"
                    /*      value={date} */
                    /*    onChange={(newValue) => setValue(newValue)} */
                    /*  onChange={(event) => {  onChange(event); setDate(event); }} */
                    label={"Период публикации"}
                    sx={{
                      width: 1,
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        /*        inputProps={{ ...params.inputProps }}
                        onChange={console.log(params)}
                        className="section__input" */
                      />
                    )}
                    components={{
                      OpenPickerIcon: CalendarMonthIcon,
                    }}
                  />
                )}
              />
            </div>
            <div className="col-12 col-md-2 col-lg-2 mb-4 mb-md-0 d-md-none d-lg-block">
              <button
                type="submit"
                className="section__btn section__input"
              >
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
