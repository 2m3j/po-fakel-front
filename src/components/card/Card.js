import React from "react";

function Card({ item }) {
  return (
    <article
      className="card news__columns-one col-lg-4 col-sm-6 col-xs-12 "
      aria-label="Карточка"
    >
      <div className="article-card-one">
        <a
          className="article-card__link"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="article-card__title article-card__title_type_media">
            {item.subtitle}
          </h3>
          <p className="article-card__text article-card__text_type_media">
            {item.text}
          </p>
          <img src={item.image} alt="news" className="article-card__image" />
        </a>
      </div>
    </article>
  );
}
export default Card;
