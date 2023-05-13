const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const container = document.querySelector(".section-center");
const btnsContainer = document.querySelector(".btn-container");
const allBtns = btnsContainer.querySelectorAll("button");

const htmlTemplate = function (each) {
  const html = `
        <article class="menu-item">
          <img src="${each.img}" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>${each.title}</h4>
              <h4 class="price">$${each.price}</h4>
            </header>
            <p class="item-text">
            ${each.desc}
            </p>
          </div>
        </article>`;
  container.insertAdjacentHTML("afterbegin", html);
};

//Default
menu.map((each) => {
  htmlTemplate(each);
});
//
const displayCategoryClicked = function (result) {
  result.forEach((each) => {
    htmlTemplate(each);
  });
};
//
allBtns.forEach((curBtn) => {
  curBtn.addEventListener("click", function (e) {
    const elementClicked = e.currentTarget.dataset.id;
    if (elementClicked !== "all") {
      container.innerHTML = "";
      const result = menu.filter((each) => each.category === elementClicked);
      displayCategoryClicked(result);
    } else {
      container.innerHTML = "";
      const result = menu.map((each) => each);
      displayCategoryClicked(result);
    }

    // formular
  });
});

//JOHN SMILGA APPROACH
if (2 > 3) {
  //JOHN SMILGA APPROACH
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  //How he diplayed itemss in respect their category
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);

      return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
  }
  //How he diplayed btns in respect their category

  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        console.log(values);

        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
      })
      .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    // console.log(filterBtns);

    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
}
///INSTICNT HUB APPROACH
if (1 > 2) {
  ///INSTICNT HUB APPROACH

  let babiesParentElement = document.querySelector(".card_row");
  let babiesDiv = document.createElement("div");
  let babiesText = document.createTextNode("item not found!");

  const productTab = document.querySelectorAll('[name = "tabset"]');
  const catalogue = document.querySelectorAll(".catalogue");
  const classTag = document.querySelectorAll(".tag");

  const errorContentFuntion = (y) => {
    babiesDiv.append(babiesText);
    babiesDiv.classList.add("babiesStyle");
    babiesDiv.append(babiesText);
    // (babiesText.style.cssText = " width: 90vw"),
    //   "height: 50vh",
    //   " position: relative",
    //   "margin: 0 auto",
    //   "background-color: #d0cebf",
    //   "color: red",
    //   "font-size: 35px",
    //   "font-weight: 500",
    //   "text-align: center",
    //   "padding-top: 20%",
    //   "padding-bottom: 25%";
    babiesParentElement.append(babiesDiv);
    babiesDiv.style.display = y;
  };

  productTab.forEach((element) => {
    element.addEventListener("change", (e) => {
      if (e.target.id === "tab1") {
        classTag.forEach((item) => {
          item.parentNode.parentNode.parentNode.style.display = "block";
          errorContentFuntion("none");
          console.log(item);
        });
      } else if (e.target.id === "tab2") {
        classTag.forEach((item) => {
          if (item.innerText === "Men") {
            console.log(item);
            console.log(item.parentNode.parentNode.parentNode);

            item.parentNode.parentNode.parentNode.style.display = "block";
            errorContentFuntion("none");
          } else {
            item.parentNode.parentNode.parentNode.style.display = "none";
          }
        });
      } else if (e.target.id === "tab3") {
        classTag.forEach((item) => {
          if (item.innerText === "Female") {
            console.log(item);
            item.parentNode.parentNode.parentNode.style.display = "block";
            errorContentFuntion("none");
          } else {
            item.parentNode.parentNode.parentNode.style.display = "none";
          }
        });
      } else if (e.target.id === "tab4") {
        classTag.forEach((item) => {
          if (item.innerText === "Babies") {
            console.log(item);
            item.parentNode.parentNode.parentNode.style.display = "block";
            // document.addEventListener("click", () => {
            //   babiesParentElement.removeChild(babiesDiv);
            //   babiesText.textContent = "item not found!";
            //   babiesDiv.classList.remove("babiesStyle");
            // });
            //
          } else {
            item.parentNode.parentNode.parentNode.style.display = "none";
          }
        });
        errorContentFuntion("block");
      }
    });
  });
}
