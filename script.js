

/* Burger */
const BURGER = document.getElementById("BURGER");
const BURGER_CLOSE = document.getElementById("BURGER_CLOSE");
const BURGER_LINK = document.getElementsByClassName("burger__link");
const BURGER_BLOK = document.getElementById("burger-block");
const BURGER_MENU = document.getElementById("burger_menu");
const BODY = document.getElementById("body");

BURGER.addEventListener("click", event => {
  event.preventDefault();
  BURGER_BLOK.classList.remove("hidden");
  BODY.classList.add("scroll-hidden");
});

BURGER_CLOSE.addEventListener("click", event => {
  event.preventDefault();
  BURGER_BLOK.classList.add("hidden");
  BODY.classList.remove("scroll-hidden");
});



BURGER_MENU.addEventListener("click", event => {
  BURGER_MENU.querySelectorAll("a").forEach(el =>
    el.classList.remove("navigation_active")
  );
  event.target.classList.add("navigation_active");
  BURGER_BLOK.classList.add("hidden");
  BODY.classList.remove("scroll-hidden");
});

/* /Burger */


//             ---  Header  ---




document.addEventListener("scroll", onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const sections = document.querySelectorAll("body>section");
  const links = document.querySelectorAll("#menu a");
  

  sections.forEach(el => {
    if (el.offsetTop - 1 <= curPos && el.offsetTop + el.offsetHeight > curPos) {
      links.forEach(a => {
        a.classList.remove("navigation_active");
        if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
          a.classList.add("navigation_active");
        }
      });
    }
  });
}

//                       --- Screens ---

const SCREN_CONTR_1 = document.getElementById("screen__control_1");
const SCREN_CONTR_2 = document.getElementById("screen__control_2");
const SCREN_1 = document.getElementById("Screen_1");
const SCREN_2 = document.getElementById("Screen_2");

SCREN_CONTR_1.addEventListener("click", event => {
  SCREN_1.classList.toggle("hidden");
});

SCREN_CONTR_2.addEventListener("click", event => {
  SCREN_2.classList.toggle("hidden");
});

//                 Portfolio
//             --- RANDOM-PIC ---

const RENDER_MAIN = document.getElementById("portfolio__iner");
let Catalog = [
  "./assets/portfolio/Item-1.png",
  "./assets/portfolio/Item-2.png",
  "./assets/portfolio/Item-3.png",
  "./assets/portfolio/Item-4.png",
  "./assets/portfolio/Item-5.png",
  "./assets/portfolio/Item-6.png",
  "./assets/portfolio/Item-7.png",
  "./assets/portfolio/Item-8.png",
  "./assets/portfolio/Item-9.png",
  "./assets/portfolio/Item-10.png",
  "./assets/portfolio/Item-11.png",
  "./assets/portfolio/Item-12.png"
];

class RandomPicture {
  render() {
    let newCatalog = [];
    let html = "";
    for (let i = 0; i < Catalog.length; i++) {
      let pic = Math.floor(Math.random() * Catalog.length);
      html += `<div class="portfolio__iner_item">
<img class="portfolio_img" src='${Catalog[pic]}' />
</div>`;
      let spliceElement = Catalog.splice(pic, 1);
      newCatalog.push(spliceElement);
      i = i - 1;
    }
    Catalog = newCatalog;
    const VISUALhtml = `${html}`;
    RENDER_MAIN.innerHTML = VISUALhtml;
  }
}
let RandPic = new RandomPicture();

//                   ---  Portfolio Nav  ---

const PORTFOLIO_MENU = document.getElementById("portfolio__menu");

PORTFOLIO_MENU.addEventListener("click", event => {
  PORTFOLIO_MENU.querySelectorAll("li").forEach(el =>
    el.classList.remove("portfolio__list_item_active")
  );
  event.target.classList.add("portfolio__list_item_active");
  document.getElementById("portfolio__iner").innerText = "";
  RandPic.render();
});

//                   ---  Portfolio-img(border)  ---
const PORTFOLIO_INER = document.getElementById("portfolio__iner");

PORTFOLIO_INER.addEventListener("click", event => {
  PORTFOLIO_INER.querySelectorAll("img").forEach(el =>
    el.classList.remove("portfolio__iner_active")
  );
  event.target.classList.add("portfolio__iner_active");
});

//                   ---  Form_Get-Quote----

const FORM = document.getElementById("myform");
const BUTTON = document.getElementById("button");
const CLOSE_BUTTON = document.getElementById("close-button");
const NAME = document.getElementById("fname");
const EMAIL = document.getElementById("email");

BUTTON.addEventListener("click", event => {
  if (FORM.checkValidity()) {
    event.preventDefault();
    const subject = document.getElementById("subject").value;
    if (subject == "") {
      document.getElementById("rez-subject").innerText = "Без темы";
    } else {
      document.getElementById("rez-subject").innerText = `Тема: ${subject} `;
    }
    const coment = document.getElementById("coment").value;
    if (coment == "") {
      document.getElementById("rez-coment").innerText = "Без описания";
    } else {
      document.getElementById("rez-coment").innerText = `Описание:  ${coment} `;
    }
    document.getElementById("message-block").classList.remove("hidden");
    NAME.innerText = "";
    EMAIL.innerText = "";
  }
});

CLOSE_BUTTON.addEventListener("click", event => {
  FORM.reset();
  document.getElementById("rez-subject").innerText = "";
  document.getElementById("rez-coment").innerText = "";
  document.getElementById("message-block").classList.add("hidden");
});

// -------- -------- -------- --------    Slider   -------- -------- -------- --------

("use strict");
var multiItemSlider = (function() {
  function _isElementVisible(element) {
    var rect = element.getBoundingClientRect(),
      vWidth = window.innerWidth || doc.documentElement.clientWidth,
      vHeight = window.innerHeight || doc.documentElement.clientHeight,
      elemFromPoint = function(x, y) {
        return document.elementFromPoint(x, y);
      };
    if (
      rect.right < 0 ||
      rect.bottom < 0 ||
      rect.left > vWidth ||
      rect.top > vHeight
    )
      return false;
    return (
      element.contains(elemFromPoint(rect.left, rect.top)) ||
      element.contains(elemFromPoint(rect.right, rect.top)) ||
      element.contains(elemFromPoint(rect.right, rect.bottom)) ||
      element.contains(elemFromPoint(rect.left, rect.bottom))
    );
  }

  return function(selector, config) {
    var _mainElement = document.querySelector(selector),
      _sliderWrapper = _mainElement.querySelector(".slider__wrapper"),
      _sliderItems = _mainElement.querySelectorAll(".slider__item"),
      _sliderControls = _mainElement.querySelectorAll(".slider__control"),
      _sliderControlLeft = _mainElement.querySelector(".slider__control_left"),
      _sliderControlRight = _mainElement.querySelector(
        ".slider__control_right"
      ),
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
      _positionLeftItem = 0,
      _transform = 0,
      _step = (_itemWidth / _wrapperWidth) * 100,
      _items = [],
      _interval = 0,
      _html = _mainElement.innerHTML,
      _states = [
        { active: false, minWidth: 0, count: 1 },
        { active: false, minWidth: 980, count: 2 }
      ],
      _config = {
        isCycling: false,
        direction: "right",
        interval: 999999,
        pause: true
      };

    for (var key in config) {
      if (key in _config) {
        _config[key] = config[key];
      }
    }

    _sliderItems.forEach(function(item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    var _setActive = function() {
      var _index = 0;
      var width = parseFloat(document.body.clientWidth);
      _states.forEach(function(item, index, arr) {
        _states[index].active = false;
        if (width >= _states[index].minWidth) _index = index;
      });
      _states[_index].active = true;
    };

    var _getActive = function() {
      var _index;
      _states.forEach(function(item, index, arr) {
        if (_states[index].active) {
          _index = index;
        }
      });
      return _index;
    };

    var position = {
      getItemMin: function() {
        var indexItem = 0;
        _items.forEach(function(item, index) {
          if (item.position < _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function() {
        var indexItem = 0;
        _items.forEach(function(item, index) {
          if (item.position > _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function() {
        return _items[position.getItemMin()].position;
      },
      getMax: function() {
        return _items[position.getItemMax()].position;
      }
    };

    var _transformItem = function(direction) {
      var nextItem;
      if (!_isElementVisible(_mainElement)) {
        return;
      }
      if (direction === "right") {
        _positionLeftItem++;
        if (
          _positionLeftItem + _wrapperWidth / _itemWidth - 1 >
          position.getMax()
        ) {
          nextItem = position.getItemMin();
          _items[nextItem].position = position.getMax() + 1;
          _items[nextItem].transform += _items.length * 100;
          _items[nextItem].item.style.transform =
            "translateX(" + _items[nextItem].transform + "%)";
        }
        _transform -= _step;
      }
      if (direction === "left") {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          _items[nextItem].position = position.getMin() - 1;
          _items[nextItem].transform -= _items.length * 100;
          _items[nextItem].item.style.transform =
            "translateX(" + _items[nextItem].transform + "%)";
        }
        _transform += _step;
      }
      _sliderWrapper.style.transform = "translateX(" + _transform + "%)";
    };

    var _cycle = function(direction) {
      if (!_config.isCycling) {
        return;
      }
      _interval = setInterval(function() {
        _transformItem(direction);
      }, _config.interval);
    };

    var _controlClick = function(e) {
      if (e.target.classList.contains("slider__control")) {
        e.preventDefault();
        var direction = e.target.classList.contains("slider__control_right")
          ? "right"
          : "left";
        _transformItem(direction);
        clearInterval(_interval);
        _cycle(_config.direction);
        if (!SCREN_1.classList.contains("hidden")) {
          SCREN_1.classList.add("hidden");
        }
        if (!SCREN_2.classList.contains("hidden")) {
          SCREN_2.classList.add("hidden");
        }
        SCREN_CONTR_1.classList.toggle("hidden");
        SCREN_CONTR_2.classList.toggle("hidden");
      }
    };

    var _handleVisibilityChange = function() {
      if (document.visibilityState === "hidden") {
        clearInterval(_interval);
      } else {
        clearInterval(_interval);
        _cycle(_config.direction);
      }
    };

    var _refresh = function() {
      clearInterval(_interval);
      _mainElement.innerHTML = _html;
      _sliderWrapper = _mainElement.querySelector(".slider__wrapper");
      _sliderItems = _mainElement.querySelectorAll(".slider__item");
      _sliderControls = _mainElement.querySelectorAll(".slider__control");
      _sliderControlLeft = _mainElement.querySelector(".slider__control_left");
      _sliderControlRight = _mainElement.querySelector(
        ".slider__control_right"
      );
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
      _positionLeftItem = 0;
      _transform = 0;
      _step = (_itemWidth / _wrapperWidth) * 100;
      _items = [];
      _sliderItems.forEach(function(item, index) {
        _items.push({ item: item, position: index, transform: 0 });
      });
    };

    var _setUpListeners = function() {
      _mainElement.addEventListener("click", _controlClick);
      if (_config.pause && _config.isCycling) {
        _mainElement.addEventListener("mouseenter", function() {
          clearInterval(_interval);
        });
        _mainElement.addEventListener("mouseleave", function() {
          clearInterval(_interval);
          _cycle(_config.direction);
        });
      }
      document.addEventListener(
        "visibilitychange",
        _handleVisibilityChange,
        false
      );
      window.addEventListener("resize", function() {
        var _index = 0,
          width = parseFloat(document.body.clientWidth);
        _states.forEach(function(item, index, arr) {
          if (width >= _states[index].minWidth) _index = index;
        });
        if (_index !== _getActive()) {
          _setActive();
          _refresh();
        }
      });
    };

    _setUpListeners();
    if (document.visibilityState === "visible") {
      _cycle(_config.direction);
    }
    _setActive();

    return {
      right: function() {
        _transformItem("right");
      },
      left: function() {
        _transformItem("left");
      },
      stop: function() {
        _config.isCycling = false;
        clearInterval(_interval);
      },
      cycle: function() {
        _config.isCycling = true;
        clearInterval(_interval);
        _cycle();
      }
    };
  };
})();

var slider = multiItemSlider(".main", {
  isCycling: true
});
// -------- -------- -------- --------    /Slider   -------- -------- -------- --------
