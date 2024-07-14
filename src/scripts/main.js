
let BASE_URL = "http://localhost:5000";
const cardSwiper = document.querySelector("#swiper-card");


const getApiData = async (endPoint, cb) => {
  try {
    let response = await fetch(`${BASE_URL}/${endPoint}`);
    let data = await response.json();
    cb(data);
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const deleteApiData = async (endPoint, id, cb,...props) => {
  let response = await fetch(`${BASE_URL}/${endPoint}/${id}`, {
    method: "DELETE",
    ...props
  });
  cb(response);
};


const postApiData = async (endPoint, data) => {
  try {
    let response = await fetch(`${BASE_URL}/${endPoint}`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
// getApidata products 
getApiData("data", (data) => {
  data.map((item) => {
    cardSwiper.innerHTML += `
    <div class="swiper-slide">
    <div class="products-swipper-btn">
        <button><i
                class="fa-solid fa-magnifying-glass"></i></button>
            <button>   <i class="fa-regular fa-heart"></i>
            </button>
                <button products-delete-btn >Delete</button>
    </div>
    <div class="products-img">
        <img
            src="${item.image}"
            alt />

    </div>
    <div class="products-content">
        <h3>${item.name}</h3>
        <p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </p>
        <span>$${item.price}</span>
        <button class="products-content-btn">
            <span>Select options</span>
        </button>
    </div>

</div>
    `;
  });
});


const createBTN = document.querySelector("#create_product");
const swipperImage = document.querySelector("#image");
const swippername = document.querySelector("#name");
const swipperprice = document.querySelector("#price");

createBTN &&
  createBTN.addEventListener("click", async (e) => {
    e.preventDefault();
    const usData = {
      image: swipperImage.value,
      name: swippername.value,
      price: swipperprice.value,
    };
    const postData = await postApiData("data", usData);
    console.log("Post response:", postData);
  });
  

// deleteApiData products

document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("delete-btn")) {
    const cardId = e.target.dataset.id;
    deleteCard(cardId);
  }
});