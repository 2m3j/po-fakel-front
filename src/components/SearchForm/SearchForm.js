import React, { useState, useEffect } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "./SearchForm.scss";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
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

const useStyles = makeStyles({
  noOptions: {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "red !important",
    },
    color: "red",
    borderColor: "red !importnant",
    /*   backgroundColor: "pink", */
  },
});

const StyledAutocomplete = styled(Autocomplete)({
  /*   "&.MuiAutocomplete-noOptions": {
    borderColor: "pink",
    color: "red",
  }, */
  "&.Mui-focused .MuiInputLabel-outlined": {
    color: "#da8a3a",
    /*    height: "70px",
    alignContent: "center", */
  },
  "&.MuiAutocomplete-popper .MuiAutocomplete-option": {
    color: "red",
  },
  "& .MuiAutocomplete-inputRoot": {
    /*   height: "70px",
    alignContent: "center",
    justifyContent: "center", */
    /*   color: "#da8a3a", */
    /*     // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
      // Default left padding is 6px
      paddingLeft: 26,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "green",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    }, 
    "&.Mui-focused .MuiAutocomplete-noOptions": {
      borderColor: "blue",
    },
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "blue",
    },*/
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#da8a3a",
    },
  },
  /*   "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  noOptions: {
    "&.Mui-focused .MuiInputLabel-outlined": {
      color: "red",
      borderColor: "red",
    },
  }, */
});

function SearchForm() {
  const [isMore, setMore] = useState(false);
  const [showned, setNumberOfShowed] = useState(6);
  const [cards, setCards] = useState(initialCards);
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
  const styles = useStyles();
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
  /* const cards = filteredData ? filteredData : initialCards; */
  return (
    <form>
      <div className="row g-10">
        <div className="section__input col-12 col-md-8 col-lg-8 mb-4 mb-md-0">
          <StyledAutocomplete
            disablePortal
            id="outlined"
            options={select}
            /*  value={value} */
            classes={{
              noOptions: styles.noOptions,
            }}
            className="section__input"
            onChange={handleInput}
            /*  isOptionEqualToValue={(option, value) => option.code === value} */
            isOptionEqualToValue={(option, value) =>
              value === undefined || value === "" || option.id === value.id
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
        </div>
        {/*       <div className="col-12 col-md-5 col-lg-4 mb-4 mb-md-0"> */}
        {/*   <div className=" col col-xs-12 "> */}
        {/*          <input
        id="datepicker"
        type="date"
        name="date"
        placeholder="Период публикации"
        /*         onFocus="(this.type='date')"
        onBlur="(this.type='text')"
        className="section__input section__input_type_date "
      /> */}

        {/* </div> */}
        <div className="col-12 col-md-4 col-lg-4 mb-4 mb-md-0">
          {/*   <div class="col-12 col-md-2 col-lg-4"> */}
          {/*     <div className="section__btn"> */}
          <button type="submit" className="section__btn section__input">
            Искать
          </button>
          {/*     </div> */}
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
  );
}

export default SearchForm;
