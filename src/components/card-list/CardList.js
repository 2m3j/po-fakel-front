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

export function CardList(cards, screenSize) {
  let numderOfShowned =
    screenSize < MOBILE_WIDTH ? SMALL_PAGE_CARDS_COUNT : LARGE_PAGE_CARDS_COUNT;
  let isThereMore =
    screenSize < MOBILE_WIDTH && cards.length > SMALL_NEXT_PAGE_CARDS_COUNT
      ? true
      : screenSize > TABLET_WIDTH && cards.length > LARGE_NEXT_PAGE_CARDS_COUNT
      ? true
        : false;
  
  const handleMoreClick = () => {
    const moreNumber =
      screenSize < MOBILE_WIDTH ? ADDING_PAGE_AMOUNT_S : ADDING_PAGE_AMOUNT_L;
    let newShowned = showned + moreNumber;
    if (newShowned >= cards.length) {
      newShowned = cards.length;
    }
    return;
  };
  return numderOfShowned;
}
