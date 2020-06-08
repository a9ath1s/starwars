$(document).ready(() => {
  const episodes = () => {
    return [
      {
        year: '1977',
        subtitle: 'Эпизод IV',
        title: 'Новая надежда',
        rating: 82,
        image: 'img/posters/04.new-hope.jpg',
      },
      {
        year: '1980',
        subtitle: 'Эпизод V',
        title: 'Империя наносит ответный удар',
        rating: 84,
        image: 'img/posters/05.the-empire-strikes-back.jpg',
      },
      {
        year: '1983',
        subtitle: 'Эпизод VI',
        title: 'Возвращение джедая',
        rating: 80,
        image: 'img/posters/06.return-of-the-jedi.jpg',
      },
      {
        year: '1999',
        subtitle: 'Эпизод I',
        title: 'Скрытая угроза',
        rating: 65,
        image: 'img/posters/01.the-phantom-menace.jpg',
      },
      {
        year: '2002',
        subtitle: 'Эпизод II',
        title: 'Атака клонов',
        rating: 65,
        image: 'img/posters/02.attack-of-the-clones.jpg',
      },
      {
        year: '2005',
        subtitle: 'Эпизод III',
        title: 'Месть ситхов',
        rating: 82,
        image: 'img/posters/03.revenge-of-the-sith.jpg',
      },
      {
        year: '2015',
        subtitle: 'Эпизод VII',
        title: 'Пробуждение силы',
        rating: 74,
        image: 'img/posters/07.the-force-awakens.jpg',
      },
      {
        year: '2017',
        subtitle: 'Эпизод VIII',
        title: 'Последние джедаи',
        rating: 70,
        image: 'img/posters/08.the-last-jedi.jpg',
      },
    ];
  };

  const parceData = ({ year, subtitle, title, rating, image }) => {
    const parceRating = (rating) => {
      const repeat = (str, cnt) => {
        return new Array(cnt + 1).join(str);
      };

      let starsCount = parseInt(rating / 20);
      let stars = repeat(`<div class="star-solid"></div>`, starsCount);
      stars += repeat(`<div class="star-blank"></div>`, 5 - starsCount);
      return stars;
    };

    return `
    <div class="episodes-slider-item">
      <div class="episodes-slider-year">${year}</div>
      <div class="episodes-slider-description">${subtitle}<br>${title}</div>
      <div class="episodes-slider-rating">
        <div class="episodes-slider-rating-text">Рейтинг</div>
        <div class="episodes-slider-rating-stars">${parceRating(rating)}</div>
      </div>
      <img class="episodes-slider-image" src="${image}" alt="${title}">
    </div>
    `;
  };

  const createSliderElements = (data) => {
    const slider = $('.episodes-slider');
    slider.innerHTML = '';

    for (let itr = 0; itr < data.length; itr++) {
      const elem = data[itr];
      if (elem) {
        slider.append(parceData(elem));
      }
    }
  };

  createSliderElements(episodes());

  let owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  $('.episodes-slider-nav-left').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
  });

  $('.episodes-slider-nav-right').click(function () {
    owl.trigger('next.owl.carousel', [300]);
  });
});
