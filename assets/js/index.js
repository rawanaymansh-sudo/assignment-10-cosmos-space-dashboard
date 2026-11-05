(function () {
  "use strict";

  function updateActiveLink(sectionId) {
    var navLinks = document.querySelectorAll(".nav-link");
    for (var i = 0; i < navLinks.length; i++) {
      var link = navLinks[i];
      var section = link.getAttribute("data-section");
      if (section === sectionId) {
        link.classList.add("bg-blue-500/10", "text-blue-400");
        link.classList.remove("text-slate-300", "hover:bg-slate-800");
      } else {
        link.classList.remove("bg-blue-500/10", "text-blue-400");
        link.classList.add("text-slate-300", "hover:bg-slate-800");
      }
    }
  }


  function showSection(sectionId) {
    var sections = document.querySelectorAll(".app-section");
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      if (section.id === sectionId) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    }
    updateActiveLink(sectionId);
  }


  function initNavigation() {
    var navLinks = document.querySelectorAll(".nav-link");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function (e) {
        e.preventDefault();
        var sectionId = this.getAttribute("data-section");
        if (sectionId) {
          showSection(sectionId);
        }
      });
    }

    // Sidebar toggle for mobile
    var sidebarToggle = document.getElementById("sidebar-toggle");
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("sidebar-overlay");

    function closeSidebar() {
      if (sidebar) sidebar.classList.remove("sidebar-open");
      if (overlay) overlay.classList.remove("overlay-open");
    }

    if (sidebarToggle && sidebar && overlay) {
      sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("sidebar-open");
        overlay.classList.toggle("overlay-open");
      });

      overlay.addEventListener("click", closeSidebar);
    }
  }

  // Planet Data
  var planetData = {
    mercury: {
      name: "Mercury",
      description:
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.",
      image: "./assets/images/mercury.png",
      distance: "57.9M km",
      radius: "2,439.7 km",
      mass: "3.285 × 10^23 kg",
      density: "5.43 g/cm³",
      orbitalPeriod: "88 days",
      rotationPeriod: "58.6 days",
      moons: "0",
      gravity: "3.7 m/s²",
      details: {
        discoverer: "Known since antiquity",
        date: "Ancient",
        type: "Terrestrial",
        perihelion: "46.0M km",
        aphelion: "69.8M km",
        eccentricity: "0.205",
        inclination: "7.00°",
        axialTilt: "0.03°",
        temp: "167°C",
        escape: "4.25 km/s",
      },
    },
    venus: {
      name: "Venus",
      description:
        "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows.",
      image: "./assets/images/venus.png",
      distance: "108.2M km",
      radius: "6,051.8 km",
      mass: "4.867 × 10^24 kg",
      density: "5.24 g/cm³",
      orbitalPeriod: "225 days",
      rotationPeriod: "243 days",
      moons: "0",
      gravity: "8.87 m/s²",
      details: {
        discoverer: "Known since antiquity",
        date: "Ancient",
        type: "Terrestrial",
        perihelion: "107.5M km",
        aphelion: "108.9M km",
        eccentricity: "0.007",
        inclination: "3.39°",
        axialTilt: "177.36°",
        temp: "464°C",
        escape: "10.36 km/s",
      },
    },
    earth: {
      name: "Earth",
      description:
        "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands.",
      image: "./assets/images/earth.png",
      distance: "149.6M km",
      radius: "6,371 km",
      mass: "5.97 × 10^24 kg",
      density: "5.51 g/cm³",
      orbitalPeriod: "365.25 days",
      rotationPeriod: "24 hours",
      moons: "1",
      gravity: "9.8 m/s²",
      details: {
        discoverer: "Known since antiquity",
        date: "Ancient",
        type: "Terrestrial",
        perihelion: "147.1M km",
        aphelion: "152.1M km",
        eccentricity: "0.0167",
        inclination: "0.00°",
        axialTilt: "23.44°",
        temp: "15°C",
        escape: "11.2 km/s",
      },
    },
    mars: {
      name: "Mars",
      description:
        "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war.",
      image: "./assets/images/mars.png",
      distance: "227.9M km",
      radius: "3,389.5 km",
      mass: "6.39 × 10^23 kg",
      density: "3.93 g/cm³",
      orbitalPeriod: "687 days",
      rotationPeriod: "24.6 hours",
      moons: "2",
      gravity: "3.71 m/s²",
      details: {
        discoverer: "Known since antiquity",
        date: "Ancient",
        type: "Terrestrial",
        perihelion: "206.6M km",
        aphelion: "249.2M km",
        eccentricity: "0.093",
        inclination: "1.85°",
        axialTilt: "25.19°",
        temp: "-63°C",
        escape: "5.03 km/s",
      },
    },
    jupiter: {
      name: "Jupiter",
      description:
        "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
      image: "./assets/images/jupiter.png",
      distance: "778.5M km",
      radius: "69,911 km",
      mass: "1.898 × 10^27 kg",
      density: "1.33 g/cm³",
      orbitalPeriod: "12 years",
      rotationPeriod: "9.9 hours",
      moons: "79",
      gravity: "24.79 m/s²",
      details: {
        discoverer: "Known since antiquity",
        date: "Ancient",
        type: "Gas Giant",
        perihelion: "740.5M km",
        aphelion: "816.6M km",
        eccentricity: "0.049",
        inclination: "1.31°",
        axialTilt: "3.13°",
        temp: "-108°C",
        escape: "59.5 km/s",
      },
    },
    saturn: {
      name: "Saturn",
      description:
        "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.",
      image: "./assets/images/saturn.png",
      distance: "1.4B km",
      radius: "58,232 km",
      mass: "5.683 × 10^26 kg",
      density: "0.69 g/cm³",
      orbitalPeriod: "29 years",
      rotationPeriod: "10.7 hours",
      moons: "82",
      gravity: "10.44 m/s²",
      details: {
        discoverer: "Known since antiquity",
        date: "Ancient",
        type: "Gas Giant",
        perihelion: "1.35B km",
        aphelion: "1.51B km",
        eccentricity: "0.057",
        inclination: "2.49°",
        axialTilt: "26.73°",
        temp: "-139°C",
        escape: "35.5 km/s",
      },
    },
    uranus: {
      name: "Uranus",
      description:
        "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn).",
      image: "./assets/images/uranus.png",
      distance: "2.8B km",
      radius: "25,362 km",
      mass: "8.681 × 10^25 kg",
      density: "1.27 g/cm³",
      orbitalPeriod: "84 years",
      rotationPeriod: "17 hours",
      moons: "27",
      gravity: "8.69 m/s²",
      details: {
        discoverer: "William Herschel",
        date: "1781",
        type: "Ice Giant",
        perihelion: "2.74B km",
        aphelion: "3.00B km",
        eccentricity: "0.046",
        inclination: "0.77°",
        axialTilt: "97.77°",
        temp: "-197°C",
        escape: "21.3 km/s",
      },
    },
    neptune: {
      name: "Neptune",
      description:
        "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
      image: "./assets/images/neptune.png",
      distance: "4.5B km",
      radius: "24,622 km",
      mass: "1.024 × 10^26 kg",
      density: "1.64 g/cm³",
      orbitalPeriod: "165 years",
      rotationPeriod: "16 hours",
      moons: "14",
      gravity: "11.15 m/s²",
      details: {
        discoverer: "Urbain Le Verrier",
        date: "1846",
        type: "Ice Giant",
        perihelion: "4.44B km",
        aphelion: "4.55B km",
        eccentricity: "0.011",
        inclination: "1.77°",
        axialTilt: "28.32°",
        temp: "-201°C",
        escape: "23.5 km/s",
      },
    },
  };

  function updatePlanetDetails(planetId) {
    var data = planetData[planetId];
    if (!data) return;

    
    document.getElementById("planet-detail-name").textContent = data.name;
    document.getElementById("planet-detail-description").textContent =
      data.description;

   
    var img = document.getElementById("planet-detail-image");
    img.src = data.image;
    img.alt = data.name + " planet detailed realistic render";

    document.getElementById("planet-distance").textContent = data.distance;
    document.getElementById("planet-radius").textContent = data.radius;
    document.getElementById("planet-mass").textContent = data.mass;
    document.getElementById("planet-density").textContent = data.density;
    document.getElementById("planet-orbital-period").textContent =
      data.orbitalPeriod;
    document.getElementById("planet-rotation").textContent =
      data.rotationPeriod;
    document.getElementById("planet-moons").textContent = data.moons;
    document.getElementById("planet-gravity").textContent = data.gravity;

   
    document.getElementById("planet-discoverer").textContent =
      data.details.discoverer;
    document.getElementById("planet-discovery-date").textContent =
      data.details.date;
    document.getElementById("planet-body-type").textContent = data.details.type;

    document.getElementById("planet-perihelion").textContent =
      data.details.perihelion;
    document.getElementById("planet-aphelion").textContent =
      data.details.aphelion;
    document.getElementById("planet-eccentricity").textContent =
      data.details.eccentricity;
    document.getElementById("planet-inclination").textContent =
      data.details.inclination;
    document.getElementById("planet-axial-tilt").textContent =
      data.details.axialTilt;
    document.getElementById("planet-temp").textContent = data.details.temp;
    document.getElementById("planet-escape").textContent = data.details.escape;
  }

  function fetchPlanetsData() {
    var url = "https://solar-system-opendata-proxy.vercel.app/api/planets";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        try {
          var response = JSON.parse(xhr.responseText);
          var bodies = response.bodies;

        
          for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            var key = body.englishName.toLowerCase();

            if (planetData[key]) {
        
              var p = planetData[key];
            
              p.radius = Math.round(body.meanRadius) + " km";
              p.density = body.density + " g/cm³";
              p.gravity = body.gravity + " m/s²";

         
              if (body.mass) {
                p.mass =
                  body.mass.massValue +
                  " × 10^" +
                  body.mass.massExponent +
                  " kg";
              }

          
              if (body.sideralOrbit > 365) {
                p.orbitalPeriod =
                  (body.sideralOrbit / 365.25).toFixed(1) + " years";
              } else {
                p.orbitalPeriod = Math.round(body.sideralOrbit) + " days";
              }

              p.rotationPeriod =
                Math.abs(Math.round(body.sideralRotation)) + " hours";

        
              if (body.semimajorAxis) {
                if (body.semimajorAxis > 1000000000) {
                  p.distance =
                    (body.semimajorAxis / 1000000000).toFixed(1) + "B km";
                } else {
                  p.distance =
                    (body.semimajorAxis / 1000000).toFixed(1) + "M km";
                }
              }

              
              p.details.eccentricity = body.eccentricity.toFixed(3);
              p.details.inclination = body.inclination + "°";
              p.details.axialTilt = body.axialTilt + "°";
              if (body.avgTemp) {
                p.details.temp = (body.avgTemp - 273.15).toFixed(0) + "°C";
              }
              if (body.perihelion)
                p.details.perihelion =
                  (body.perihelion / 1000000).toFixed(1) + "M km";
              if (body.aphelion)
                p.details.aphelion =
                  (body.aphelion / 1000000).toFixed(1) + "M km";
              if (body.moons) {
                p.moons = body.moons.length;
              } else {
                p.moons = 0;
              }
            }
          }
        } catch (e) {
          console.error("Error parsing planets data", e);
        }
      }
    };
    xhr.send();
  }

  function initPlanets() {
   
    fetchPlanetsData();

    var cards = document.querySelectorAll(".planet-card");
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function () {
        var planetId = this.getAttribute("data-planet-id");
        if (planetId) {
          updatePlanetDetails(planetId);
        }
      });
    }
  }

  //APOD Section (Today in Space)

  function fetchAPOD(date) {
    var apiKey = "tWTnzd7mj6dmb88FTQNcdNDJpGKNhKGGRRRDhFwH";
    var url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
    if (date) {
      url += "&date=" + date;
    }

    // UI Loading State
    var loadingEl = document.getElementById("apod-loading");
    var imgEl = document.getElementById("apod-image");

    if (loadingEl) loadingEl.classList.remove("hidden");
    if (imgEl) imgEl.style.opacity = "0.5";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (loadingEl) loadingEl.classList.add("hidden");
        if (imgEl) imgEl.style.opacity = "1";

        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          updateAPODUI(data);
        } else {
          console.error("Error fetching APOD:", xhr.statusText);

          var errorMsg = "Failed to load space image.";
          try {
            var response = JSON.parse(xhr.responseText);
            if (response.msg) errorMsg = response.msg;
          } catch (e) {
            console.error("Could not parse error response", e);
          }

   

          if (date) {
            fetchAPOD();
            return;
          } else if (url.indexOf("2024-01-01") === -1) {
      
            console.log(
              "Latest APOD failed. Switching to static backup date: 2024-01-01.",
            );
            fetchAPOD("2024-01-01");
            return;
          }
          console.error("All APOD attempts failed.");
          alert(errorMsg + " Please try again later.");
        }
      }
    };

    xhr.send();
  }

  function updateAPODUI(data) {
    var titleEl = document.getElementById("apod-title");
    var dateEl = document.getElementById("apod-date");
    var dateDetailEl = document.getElementById("apod-date-detail");
    var dateInfoEl = document.getElementById("apod-date-info");
    var explanationEl = document.getElementById("apod-explanation");
    var copyrightEl = document.getElementById("apod-copyright");
    var imgEl = document.getElementById("apod-image");
    var mediaTypeEl = document.getElementById("apod-media-type");

    if (titleEl) titleEl.textContent = data.title;
    if (dateEl)
      dateEl.textContent = "Astronomy Picture of the Day - " + data.date;
    if (dateDetailEl)
      dateDetailEl.innerHTML =
        '<i class="far fa-calendar mr-2"></i>' + data.date;
    if (dateInfoEl) dateInfoEl.textContent = data.date;
    if (explanationEl) explanationEl.textContent = data.explanation;
    if (mediaTypeEl) mediaTypeEl.textContent = data.media_type;

    if (copyrightEl) {
      copyrightEl.textContent = data.copyright
        ? "© " + data.copyright
        : "© NASA/Public Domain";
    }

    if (imgEl) {
      if (data.media_type === "image") {
        imgEl.src = data.url;
        imgEl.alt = data.title;
      } else if (data.media_type === "video") {
        if (data.thumbnail_url) {
          imgEl.src = data.thumbnail_url;
        } else {
          imgEl.src = data.url;
        }
      }
    }
  }

  function initAPOD() {
    var dateInput = document.getElementById("apod-date-input");
    var loadBtn = document.getElementById("load-date-btn");
    var todayBtn = document.getElementById("today-apod-btn");

    if (loadBtn && dateInput) {
     
        
      var today = new Date().toISOString().split("T")[0];
      dateInput.max = today;
      dateInput.value = today; 

      fetchAPOD(today);

      loadBtn.addEventListener("click", function () {
        if (dateInput.value) {
          fetchAPOD(dateInput.value);
        }
      });
    }

    if (todayBtn) {
      todayBtn.addEventListener("click", function () {
        if (dateInput) {
          var today = new Date().toISOString().split("T")[0];
          dateInput.value = today;
        }
        fetchAPOD();
      });
    }
  }

  // Launches Section


  var mockLaunches = [
    {
      name: "Falcon 9 Block 5 | Starlink Group 7-18",
      provider: "SpaceX",
      rocket: "Falcon 9",
      location: "KSC, LC-39A",
      date: "2024-04-15",
      time: "20:00 UTC",
      status: "Go",
      statusColor: "bg-green-500/90",
      image: "./assets/images/launch-placeholder.png",
    },
    {
      name: "Electron | 'Owl Night Long'",
      provider: "Rocket Lab",
      rocket: "Electron",
      location: "Mahia Peninsula, NZ",
      date: "2024-04-18",
      time: "10:30 UTC",
      status: "TBC",
      statusColor: "bg-yellow-500/90",
      image: "./assets/images/launch-placeholder.png",
    },
    {
      name: "Ariane 6 | Maiden Flight",
      provider: "Arianespace",
      rocket: "Ariane 62",
      location: "Guiana Space Centre",
      date: "2024-06-15",
      time: "TBD",
      status: "TBD",
      statusColor: "bg-blue-500/90",
      image: "./assets/images/launch-placeholder.png",
    },
  ];

  function renderFeaturedLaunch(launch) {
    var container = document.getElementById("featured-launch");
    if (!container) return;


    var daysUntil = "0";
    if (launch.dateObj) {
      var now = new Date();
      var diff = launch.dateObj - now;
      if (diff > 0) {
        daysUntil = Math.floor(diff / (1000 * 60 * 60 * 24));
      }
    }
    const html = `
  <div class="relative bg-slate-800/30 border border-slate-700 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all animate-fade-in">
    <div class="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">

      <!-- Left Column -->
      <div class="flex flex-col justify-between">
        <div>
          <!-- Header -->
          <div class="flex items-center gap-3 mb-4">
            <span class="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2"><i class="fas fa-star"></i>Featured Launch</span>
            <span class="px-4 py-1.5 text-white rounded-full text-sm font-semibold ${launch.statusColor}">${launch.status}</span>
          </div>

          <h3 class="text-3xl font-bold mb-3 leading-tight">${launch.name}</h3>

          <!-- Provider & Rocket -->
          <div class="flex flex-col xl:flex-row xl:items-center gap-4 mb-6 text-slate-400">
            <div class="flex items-center gap-2"><i class="fas fa-building"></i><span>${launch.provider}</span></div>
            <div class="flex items-center gap-2"><i class="fas fa-rocket"></i><span>${launch.rocket}</span></div>
          </div>

          <!-- Countdown -->
          <div class="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-6">
            <i class="fas fa-clock text-2xl text-blue-400"></i>
            <div><p class="text-2xl font-bold text-blue-400">${daysUntil}</p><p class="text-xs text-slate-400">Days Until Launch</p></div>
          </div>

          <!-- Grid Details -->
          <div class="grid xl:grid-cols-2 gap-4 mb-6">
            <div class="bg-slate-900/50 rounded-xl p-4"><p class="text-xs text-slate-400 mb-1 flex items-center gap-2"><i class="fas fa-calendar"></i>Launch Date</p><p class="font-semibold">${launch.date}</p></div>
            <div class="bg-slate-900/50 rounded-xl p-4"><p class="text-xs text-slate-400 mb-1 flex items-center gap-2"><i class="fas fa-clock"></i>Launch Time</p><p class="font-semibold">${launch.time}</p></div>
            <div class="bg-slate-900/50 rounded-xl p-4"><p class="text-xs text-slate-400 mb-1 flex items-center gap-2"><i class="fas fa-map-marker-alt"></i>Location</p><p class="font-semibold text-sm">${launch.location}</p></div>
            <div class="bg-slate-900/50 rounded-xl p-4"><p class="text-xs text-slate-400 mb-1 flex items-center gap-2"><i class="fas fa-globe"></i>Status</p><p class="font-semibold">${launch.status}</p></div>
          </div>

          <p class="text-slate-300 leading-relaxed mb-6">Upcoming mission from ${launch.provider}. Watch live coverage as the launch window opens.</p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col md:flex-row gap-3">
          <button class="flex-1 self-start md:self-center px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center gap-2"><i class="fas fa-info-circle"></i>View Full Details</button>
          <div class="icons self-end md:self-center"><button class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"><i class="far fa-heart"></i></button><button class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"><i class="fas fa-bell"></i></button></div>
        </div>
      </div>

      <!-- Right Column (Image/Icon) -->
      <div class="relative">
        <div class="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-slate-900/50">
          ${
            launch.image
              ? `<img src="${launch.image}" alt="${launch.name}" class="absolute inset-0 w-full h-full object-cover">`
              : `<div class="flex items-center justify-center h-full min-h-[400px] bg-slate-800"><i class="fas fa-rocket text-9xl text-slate-700/50"></i></div>`
          }
          <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
      </div>

    </div>
  </div>
`;

    container.innerHTML = html;
  }

  function renderLaunches(launches) {
    var grid = document.getElementById("launches-grid");
    if (!grid) return;

   
    grid.innerHTML = "";

    var itemsToRender = launches || mockLaunches;

    if (itemsToRender.length > 0) {
     
      renderFeaturedLaunch(itemsToRender[0]);

   
      for (var i = 1; i < itemsToRender.length; i++) {
        var launch = itemsToRender[i];

        var delay = (i - 1) * 100; 
        const cardHTML = `
  <div class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer animate-fade-in-up" style="animation-delay: ${delay}ms">
    <div class="relative h-48 bg-slate-900/50 flex items-center justify-center">
      ${
        launch.image
          ? `<img src="${launch.image}" alt="${launch.name}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">`
          : `<i class="fas fa-rocket text-5xl text-slate-700">​</i>`
      }
      <div class="absolute top-3 right-3">
        <span class="px-3 py-1 text-white backdrop-blur-sm rounded-full text-xs font-semibold ${launch.statusColor || "bg-blue-500/90"}">
          ${launch.status}
        </span>
      </div>
    </div>
    <div class="p-5">
      <div class="mb-3">
        <h4 class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
          ${launch.name}
        </h4>
        <p class="text-sm text-slate-400 flex items-center gap-2">
          <i class="fas fa-building text-xs"></i>${launch.provider}
        </p>
      </div>
      <div class="space-y-2 mb-4">
        <div class="flex items-center gap-2 text-sm">
          <i class="fas fa-calendar text-slate-500 w-4"></i>
          <span class="text-slate-300">${launch.date}</span>
        </div>
        <div class="flex items-center gap-2 text-sm">
          <i class="fas fa-clock text-slate-500 w-4"></i>
          <span class="text-slate-300">${launch.time}</span>
        </div>
        <div class="flex items-center gap-2 text-sm">
          <i class="fas fa-rocket text-slate-500 w-4"></i>
          <span class="text-slate-300">${launch.rocket}</span>
        </div>
        <div class="flex items-center gap-2 text-sm">
          <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
          <span class="text-slate-300 line-clamp-1">${launch.location}</span>
        </div>
      </div>
      <div class="flex items-center gap-2 pt-4 border-t border-slate-700">
        <button class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold">Details</button>
        <button class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"><i class="far fa-heart"></i></button>
      </div>
    </div>
  </div>
`;

        grid.innerHTML += cardHTML;
      }
    }

    var countEl = document.getElementById("launches-count");
    var countMobileEl = document.getElementById("launches-count-mobile");
    if (countEl) countEl.textContent = itemsToRender.length + " Launches";
    if (countMobileEl) countMobileEl.textContent = itemsToRender.length;
  }

  function fetchLaunches() {
    
    var url =
      "https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            var response = JSON.parse(xhr.responseText);
            var apiLaunches = [];

            for (var i = 0; i < response.results.length; i++) {
              var item = response.results[i];
              var launchDate = new Date(item.net); 

              var statusColor = "bg-blue-500/90";
              if (item.status && item.status.name === "Go")
                statusColor = "bg-green-500/90";
              if (item.status && item.status.name === "To Be Determined")
                statusColor = "bg-yellow-500/90";

              apiLaunches.push({
                name: item.name,
                provider: item.launch_service_provider
                  ? item.launch_service_provider.name
                  : "Unknown",
                rocket:
                  item.rocket && item.rocket.configuration
                    ? item.rocket.configuration.name
                    : "Unknown Rocket",
                location:
                  item.pad && item.pad.location
                    ? item.pad.location.name
                    : "Unknown Pad",
                date: launchDate.toLocaleDateString(),
                time: launchDate.toLocaleTimeString(),
                dateObj: launchDate, 
                dateObj: launchDate,
                status: item.status ? item.status.name : "TBD",
                statusColor: statusColor,
                image: item.image ? item.image.image_url : null,
              });
            }
            renderLaunches(apiLaunches);
          } catch (e) {
            console.error("Error parsing launches response:", e);
            renderLaunches(mockLaunches);
          }
        } else {
          console.warn(
            "Launches API failed (" + xhr.status + "), using mock data.",
          );
          renderLaunches(mockLaunches);
        }
      }
    };
    xhr.send();
  }

  function initLaunches() {
    fetchLaunches();
  }

  // Application initialization
  function init() {
    initNavigation();
    initPlanets();
    initAPOD();
    initLaunches();
    // Default to 'today-in-space'
    showSection("today-in-space");
  }

  // Run init when DOM is ready
  document.addEventListener("DOMContentLoaded", init);
})();
