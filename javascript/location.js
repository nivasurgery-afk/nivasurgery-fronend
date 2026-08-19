/* ================================
   LOCATION SELECTOR – KARNATAKA
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openLocation");
  const mobileOpenBtn = document.getElementById("mobileLocation");
  const popup = document.getElementById("locationPopup");
  const closeBtn = document.getElementById("closePopup");

  const cityList = document.getElementById("cityList");
  const popularList = document.getElementById("popularCities");
  const popularLabel = document.getElementById("popularLabel");

  const selectedCity = document.getElementById("selectedCity");
  const mobileSelectedCity = document.getElementById("mobileSelectedCity");

  const searchInput = document.getElementById("citySearch");
  const suggestionBox = document.getElementById("citySuggestions");

  let activeIndex = -1;

  /* --------------------------------
     ALL KARNATAKA CITIES (A–Z)
  -------------------------------- */

  const karnatakaCities = [
    "Bagalkot",
    "Ballari",
    "Bengaluru",
    "Bhadravati",
    "Bidar",
    "Chikkaballapura",
    "Chikkamagaluru",
    "Chitradurga",
    "Davanagere",
    "Gadag-Betageri",
    "Gangavati",
    "Hassan",
    "Hosapete",
    "Hubballi-Dharwad",
    "Kalaburagi",
    "Kolar",
    "Mandya",
    "Mangaluru",
    "Mysuru",
    "Raichur",
    "Ranebennuru",
    "Robertson Pet",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Vijayapura"
  ].sort();

  /* --------------------------------
     POPULAR CITIES
  -------------------------------- */

  const popularCities = [
    "Bengaluru",
    "Mysuru",
    "Mangaluru",
    "Hubballi-Dharwad",
    "Udupi",
    "Ballari"
  ];

  /* --------------------------------
     CITY NAME NORMALIZATION
  -------------------------------- */

  function normalizeCityName(city) {
    if (!city) return "";

    const normalized = city
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");

    const aliases = {
      "bangalore": "Bengaluru",
      "bengaluru urban": "Bengaluru",
      "bengaluru rural": "Bengaluru",
      "bangalore urban": "Bengaluru",
      "bangalore rural": "Bengaluru",

      "hubli": "Hubballi-Dharwad",
      "hubballi": "Hubballi-Dharwad",
      "dharwad": "Hubballi-Dharwad",

      "bellary": "Ballari",

      "mysore": "Mysuru",

      "mangalore": "Mangaluru",

      "gulbarga": "Kalaburagi",

      "shimoga": "Shivamogga",

      "hospet": "Hosapete",

      "tumkur": "Tumakuru",

      "bijapur": "Vijayapura"
    };

    if (aliases[normalized]) {
      return aliases[normalized];
    }

    const exactMatch = karnatakaCities.find(
      city => city.toLowerCase() === normalized
    );

    return exactMatch || "";
  }

  /* --------------------------------
     BENGALURU LOCALITY DETECTION
  -------------------------------- */

  const bengaluruLocalities = [
    "whitefield",
    "electronic city",
    "electronic-city",
    "indiranagar",
    "koramangala",
    "jayanagar",
    "rajajinagar",
    "malleshwaram",
    "basavanagudi",
    "hsr layout",
    "hsr",
    "btm layout",
    "btm",
    "marathahalli",
    "bellandur",
    "sarjapur",
    "sarjapur road",
    "yelahanka",
    "hebbal",
    "jp nagar",
    "banashankari",
    "vijayanagar",
    "kengeri",
    "mahadevapura",
    "hoodi",
    "kr puram",
    "kr puram",
    "frazer town",
    "richmond town",
    "shantinagar",
    "domlur",
    "ulsoor",
    "sadashivanagar",
    "rt nagar",
    "nagawara",
    "horamavu",
    "ramamurthy nagar",
    "bilekahalli",
    "arekere",
    "begur",
    "bommanahalli",
    "bommasandra",
    "attibele",
    "devanahalli"
  ];

  function isBengaluruLocality(value) {
    if (!value) return false;

    const normalized = value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");

    return bengaluruLocalities.includes(normalized);
  }

  /* --------------------------------
     DETECT CITY FROM NOMINATIM DATA
  -------------------------------- */

  function detectCityFromAddress(address) {
    if (!address) return "";

    console.log("NOMINATIM ADDRESS:", address);

    /* --------------------------------
       1. DIRECT CITY FIELDS
    -------------------------------- */

    const directFields = [
      address.city,
      address.town,
      address.municipality,
      address.city_district
    ];

    for (const value of directFields) {
      const city = normalizeCityName(value);

      if (city) {
        return city;
      }
    }

    /* --------------------------------
       2. BENGALURU LOCALITY FALLBACK
    -------------------------------- */

    const localityFields = [
      address.suburb,
      address.neighbourhood,
      address.village,
      address.hamlet
    ];

    for (const value of localityFields) {
      if (isBengaluruLocality(value)) {
        return "Bengaluru";
      }
    }

    /* --------------------------------
       3. DISTRICT FALLBACK
    -------------------------------- */

    const districtFields = [
      address.state_district,
      address.county
    ];

    for (const value of districtFields) {
      const city = normalizeCityName(value);

      if (city) {
        return city;
      }

      if (
        value &&
        value.toLowerCase().includes("bengaluru")
      ) {
        return "Bengaluru";
      }

      if (
        value &&
        value.toLowerCase().includes("bangalore")
      ) {
        return "Bengaluru";
      }
    }

    return "";
  }

  /* --------------------------------
     RENDER POPULAR BUTTONS
  -------------------------------- */

  if (popularList) {
    popularList.innerHTML = "";

    popularCities.forEach(city => {
      const btn = document.createElement("button");

      btn.type = "button";
      btn.textContent = city;
      btn.dataset.city = city;

      popularList.appendChild(btn);
    });
  }

  /* --------------------------------
     OPEN / CLOSE POPUP
  -------------------------------- */

  openBtn?.addEventListener("click", openPopup);

  mobileOpenBtn?.addEventListener("click", openPopup);

  function openPopup() {
    if (!popup) return;

    popup.classList.add("active");

    if (searchInput) {
      searchInput.value = "";
    }

    if (suggestionBox) {
      suggestionBox.classList.remove("active");
    }

    showPopular();

    searchInput?.focus();
  }

  closeBtn?.addEventListener("click", () => {
    popup?.classList.remove("active");
  });

  /* --------------------------------
     GEOLOCATION
  -------------------------------- */

  function detectUserLocation() {
    if (!navigator.geolocation) {
      console.warn(
        "LOCATION: Browser geolocation is not supported."
      );

      return;
    }

    console.log(
      "LOCATION: Requesting browser permission..."
    );

    navigator.geolocation.getCurrentPosition(
      async position => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log(
            "LOCATION COORDINATES:",
            latitude,
            longitude
          );

          const nominatimUrl =
            "https://nominatim.openstreetmap.org/reverse" +
            `?format=json&lat=${encodeURIComponent(latitude)}` +
            `&lon=${encodeURIComponent(longitude)}` +
            "&zoom=10" +
            "&addressdetails=1";

          const response = await fetch(
            nominatimUrl,
            {
              method: "GET",
              headers: {
                "Accept": "application/json"
              }
            }
          );

          if (!response.ok) {
            throw new Error(
              `Location API returned ${response.status}`
            );
          }

          const data = await response.json();

          console.log(
            "LOCATION API RESPONSE:",
            data
          );

          const detectedCity =
            detectCityFromAddress(data.address);

          console.log(
            "DETECTED KARNATAKA CITY:",
            detectedCity
          );

          if (!detectedCity) {
            console.warn(
              "LOCATION: Could not match detected location to a supported Karnataka city."
            );

            return;
          }

          updateCityUI(detectedCity);

          setCookie(
            "city",
            detectedCity,
            365
          );

          localStorage.setItem(
            "selectedCity",
            detectedCity
          );

          console.log(
            "LOCATION UPDATED SUCCESSFULLY:",
            detectedCity
          );

        } catch (error) {
          console.error(
            "LOCATION DETECTION ERROR:",
            error
          );
        }
      },

      error => {
        switch (error.code) {

          case error.PERMISSION_DENIED:
            console.warn(
              "LOCATION: User denied location permission."
            );
            break;

          case error.POSITION_UNAVAILABLE:
            console.warn(
              "LOCATION: Position unavailable."
            );
            break;

          case error.TIMEOUT:
            console.warn(
              "LOCATION: Location request timed out."
            );
            break;

          default:
            console.warn(
              "LOCATION: Unknown location error."
            );
        }
      },

      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 300000
      }
    );
  }

  /* --------------------------------
     START GEOLOCATION
  -------------------------------- */

  const savedCity = getCookie("city");

  if (savedCity) {

    const normalizedSavedCity =
      normalizeCityName(savedCity);

    if (normalizedSavedCity) {

      updateCityUI(
        normalizedSavedCity
      );

    }

  } else {

    detectUserLocation();

  }

  /* --------------------------------
     SEARCH INPUT
  -------------------------------- */

  searchInput?.addEventListener(
    "input",
    () => {

      const query =
        searchInput.value
          .trim()
          .toLowerCase();

      activeIndex = -1;

      if (!query) {

        suggestionBox?.classList.remove(
          "active"
        );

        showPopular();

        return;
      }

      if (popularList) {
        popularList.style.display = "none";
      }

      if (popularLabel) {
        popularLabel.style.display = "none";
      }

      const matches =
        karnatakaCities.filter(
          city =>
            city
              .toLowerCase()
              .includes(query)
        );

      renderSuggestions(matches);
    }
  );

  /* --------------------------------
     KEYBOARD NAVIGATION
  -------------------------------- */

  searchInput?.addEventListener(
    "keydown",
    e => {

      if (!suggestionBox) return;

      const items =
        suggestionBox.querySelectorAll("li");

      if (!items.length) return;

      if (e.key === "ArrowDown") {

        e.preventDefault();

        activeIndex =
          (activeIndex + 1) %
          items.length;
      }

      if (e.key === "ArrowUp") {

        e.preventDefault();

        activeIndex =
          (activeIndex - 1 + items.length) %
          items.length;
      }

      if (
        e.key === "Enter" &&
        activeIndex >= 0
      ) {

        e.preventDefault();

        selectCity(
          items[activeIndex].textContent
        );

        return;
      }

      items.forEach(item => {
        item.classList.remove("active");
      });

      if (activeIndex >= 0) {

        items[
          activeIndex
        ].classList.add("active");

      }
    }
  );

  /* --------------------------------
     RENDER SUGGESTIONS
  -------------------------------- */

  function renderSuggestions(list) {

    if (!suggestionBox) return;

    suggestionBox.innerHTML = "";

    if (!list.length) {

      suggestionBox.classList.remove(
        "active"
      );

      return;
    }

    list.forEach(city => {

      const li =
        document.createElement("li");

      li.textContent = city;

      li.addEventListener(
        "click",
        () => {
          selectCity(city);
        }
      );

      suggestionBox.appendChild(li);

    });

    suggestionBox.classList.add(
      "active"
    );
  }

  /* --------------------------------
     SELECT CITY
  -------------------------------- */

  function selectCity(city) {

    const normalizedCity =
      normalizeCityName(city);

    if (!normalizedCity) {
      return;
    }

    updateCityUI(
      normalizedCity
    );

    setCookie(
      "city",
      normalizedCity,
      365
    );

    localStorage.setItem(
      "selectedCity",
      normalizedCity
    );

    popup?.classList.remove(
      "active"
    );

    console.log(
      "CITY SELECTED:",
      normalizedCity
    );
  }

  /* --------------------------------
     POPULAR CLICK
  -------------------------------- */

  popularList?.addEventListener(
    "click",
    e => {

      if (
        e.target.tagName === "BUTTON"
      ) {

        selectCity(
          e.target.dataset.city
        );

      }

    }
  );

  /* --------------------------------
     UI UPDATE
  -------------------------------- */

  function updateCityUI(city) {

    if (selectedCity) {
      selectedCity.textContent = city;
    }

    if (mobileSelectedCity) {
      mobileSelectedCity.textContent = city;
    }

    localStorage.setItem(
      "selectedCity",
      city
    );

    console.log(
      "CITY UI UPDATED:",
      city
    );
  }

  /* --------------------------------
     SHOW POPULAR
  -------------------------------- */

  function showPopular() {

    if (popularList) {
      popularList.style.display = "flex";
    }

    if (popularLabel) {
      popularLabel.style.display = "block";
    }
  }

  /* --------------------------------
     COOKIES
  -------------------------------- */

  function setCookie(
    name,
    value,
    days
  ) {

    const d = new Date();

    d.setTime(
      d.getTime() +
      days * 86400000
    );

    document.cookie =
      `${name}=${encodeURIComponent(value)}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
  }

  function getCookie(name) {

    const cookie =
      document.cookie
        .split("; ")
        .find(
          row =>
            row.startsWith(
              name + "="
            )
        );

    if (!cookie) {
      return "";
    }

    return decodeURIComponent(
      cookie.substring(
        name.length + 1
      )
    );
  }

});