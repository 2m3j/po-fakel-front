import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import RangeCalendar from "../RangeCalendar/RangeCalendar.js";
/* import { initialCards } from "../../js/initial_cards.js"; */
import axios from "axios";
import {
  MOBILE_WIDTH,
  LARGE_PAGE_CARDS_COUNT,
  SMALL_PAGE_CARDS_COUNT,
  ADDING_PAGE_AMOUNT_S,
  ADDING_PAGE_AMOUNT_L,
} from "../../utils/constants";
import Section from "../section/Section";
import "./SearchForm.scss";
import { useForm, Controller, FormProvider } from "react-hook-form";
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
  const [initialCards, setInitialCards] = useState(
    JSON.parse(localStorage.getItem("cards"))
  );
  const [cards, setCards] = useState(initialCards);
  const [select, setSelect] = useState([
    "Феноберцев Роман Филиппович",
    "Халемин Степан Александрович",
  ]);
  const [dates, setDates] = useState([]);
  let screenSize = window.innerWidth;
  const methods = useForm({
    mode: "onChange",
    defaultValues: { solder: "", datefrom: "", datetill: "" },
  });
  let solders = [];

  // useEffects
  useEffect(() => {
    if (!initialCards) {
      axios
        .get("./cards.json")
        .then((res) => {
          setInitialCards(res.data);
          localStorage.setItem("cards", JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    } else {
      setInitialCards(JSON.parse(localStorage.getItem("cards")));
    }
  }, []);
  useEffect(() => {
    if (initialCards) {
      initialCards.forEach((item) => solders.push(item.solder));
      setSelect([...new Set(solders)]);
      initialCards.map((card) => dates.push(card.date));
      setDates([...new Set(dates)]);
    }
  }, []);
  useEffect(() => {
    let numderOfShowned =
      screenSize < MOBILE_WIDTH
        ? SMALL_PAGE_CARDS_COUNT
        : LARGE_PAGE_CARDS_COUNT;
    setNumberOfShowed(numderOfShowned);
  }, [screenSize, cards]);

  useEffect(() => {
    let isThereMore = cards?.length > showned ? true : false;
    setMore(isThereMore);
  }, [showned]);

/*   useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
  }, [methods.formState.isSubmitted]); */

  //Handlers
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

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} id="mediaform">
          <div className="row">
            <div className="section__input col-12 col-md-6 col-lg-6 mb-4 mb-md-0">
              <Controller
                name="solder"
                control={methods.control}
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
                        label="Имя бойца"
                        pattern="[а-я]+/i"
                        className="section__input"
                        error={invalid}
                        helperText={error?.message}
                      />
                    )}
                    onChange={(event, values, reason) => onChange(values)}
                    value={value}
                  />
                )}
              />
            </div>
            <RangeCalendar {...methods} size="2" dates={dates} />
            <div
              className="col-12 col-md-2 col-lg-2 mb-4 mb-md-0 d-md-none d-lg-block"
              form="mediaform"
            >
              <button type="submit" className="btn section__btn section__input">
                Искать
              </button>
            </div>
            <div className="col-12 col-md-2 col-lg-2 mb-4 mb-md-0 d-none d-md-block d-lg-none">
              <button
                type="submit"
                className="btn top-search__submit section__btn section__input m-0"
              >
                <svg>
                  <use href="images/svg/symbol/svg/sprite.symbol.svg#search"></use>
                </svg>
              </button>
            </div>
          </div>
          {cards ? (
            <div className="cards row g-5">
              <Section items={cards} showned={showned} />
            </div>
          ) : (
            ""
          )}
          <div
            className={`smi-search-form__container-more ${
              isMore ? "smi-search-form__container-more_visible" : ""
            }`}
          >
            <button
              className="btn btn_outline btn_xl smi-search-form__more"
              onClick={handleMoreClick}
            >
              Больше новостей
            </button>
          </div>
        </form>
      </FormProvider>
    </ThemeProvider>
  );
}

export default SearchForm;
