// Place project screenshots in: imgs/projects/
// You can replace or add real screenshots later without changing the modal markup.
const projectGalleries = {
  condomanager: {
    title: "CondoManager",
    images: [
      { src: "imgs/projects/condomanager-1.png", alt: "CondoManager admin dashboard screenshot" },
      { src: "imgs/projects/condomanager-2.png", alt: "CondoManager owner dashboard screenshot" },
      { src: "imgs/projects/condomanager-3.png", alt: "CondoManager AI document Q and A screenshot" },
      { src: "imgs/projects/condomanager-4.png", alt: "CondoManager additional view screenshot" },
      { src: "imgs/projects/condomanager-5.png", alt: "CondoManager additional view screenshot" }
    ]
  },
  missan: {
    title: "Missan Group Website",
    images: [
      { src: "imgs/projects/missan-1.png", alt: "Missan Group homepage screenshot" },
      { src: "imgs/projects/missan-2.png", alt: "Missan Group services section screenshot" },
      { src: "imgs/projects/missan-3.png", alt: "Missan Group additional page screenshot" }
    ]
  },
  "angular-champion": {
    title: "Angular Champion Manager",
    images: [
      { src: "imgs/projects/angular-champion-1.png", alt: "Angular Champion Manager champion list screenshot" },
      { src: "imgs/projects/angular-champion-2.png", alt: "Angular Champion Manager additional view screenshot" },
      { src: "imgs/projects/angular-champion-3.png", alt: "Angular Champion Manager additional view screenshot" }
    ]
  },
  "enactus-cms": {
    title: "Enactus CMS",
    images: [
      { src: "imgs/projects/enactus-cms-1.png", alt: "Enactus CMS admin dashboard screenshot" },
      { src: "imgs/projects/enactus-cms-2.png", alt: "Enactus CMS additional view screenshot" },
      { src: "imgs/projects/enactus-cms-3.png", alt: "Enactus CMS additional view screenshot" }
    ]
  },
  "laravel-articles": {
    title: "Laravel Articles and Categories",
    images: [
      { src: "imgs/projects/laravel-articles-1.png", alt: "Laravel Articles and Categories API project screenshot" },
      { src: "imgs/projects/laravel-articles-2.png", alt: "Laravel Articles and Categories additional view screenshot" },
      { src: "imgs/projects/laravel-articles-3.png", alt: "Laravel Articles and Categories additional view screenshot" }
    ]
  },
  "la-liga-tracker": {
    title: "La Liga Tracker",
    images: [
      { src: "imgs/projects/la-liga-tracker-1.png", alt: "La Liga Tracker standings screen screenshot" },
      { src: "imgs/projects/la-liga-tracker-2.png", alt: "La Liga Tracker team detail screen screenshot" },
      { src: "imgs/projects/la-liga-tracker-3.png", alt: "La Liga Tracker match list screen screenshot" }
    ]
  },
  "expense-tracker": {
    title: "Android Expense Tracker",
    images: [
      { src: "imgs/projects/expense-tracker-1.png", alt: "Android Expense Tracker app screenshot" },
      { src: "imgs/projects/expense-tracker-2.png", alt: "Android Expense Tracker additional screen screenshot" },
      { src: "imgs/projects/expense-tracker-3.png", alt: "Android Expense Tracker additional screen screenshot" }
    ]
  },
  "movie-app": {
    title: "Android Movie App",
    images: [
      { src: "imgs/projects/movie-app-1.png", alt: "Android Movie App home screen screenshot" },
      { src: "imgs/projects/movie-app-2.png", alt: "Android Movie App detail screen screenshot" },
      { src: "imgs/projects/movie-app-3.png", alt: "Android Movie App additional screen screenshot" }
    ]
  },
  "product-management": {
    title: "Product Management System",
    images: [
      { src: "imgs/projects/product-management-1.png", alt: "Product Management System main window screenshot" },
      { src: "imgs/projects/product-management-2.png", alt: "Product Management System product edit form screenshot" },
      { src: "imgs/projects/product-management-3.png", alt: "Product Management System additional view screenshot" }
    ]
  },
  auction: {
    title: "PHP Auction Project",
    images: [
      { src: "imgs/projects/auction-1.png", alt: "PHP Auction Project listing page screenshot" },
      { src: "imgs/projects/auction-2.png", alt: "PHP Auction Project additional view screenshot" },
      { src: "imgs/projects/auction-3.png", alt: "PHP Auction Project additional view screenshot" }
    ]
  },
  quadline: {
    title: "QUADLINE",
    images: [
      { src: "imgs/projects/quadline-1.png", alt: "QUADLINE gameplay screenshot" },
      { src: "imgs/projects/quadline-2.png", alt: "QUADLINE additional view screenshot" },
      { src: "imgs/projects/quadline-3.png", alt: "QUADLINE additional view screenshot" }
    ]
  },
  "event-management": {
    title: "Event Management System",
    images: [
      { src: "imgs/projects/event-management-1.png", alt: "Event Management System desktop application screenshot" },
      { src: "imgs/projects/event-management-2.png", alt: "Event Management System additional view screenshot" },
      { src: "imgs/projects/event-management-3.png", alt: "Event Management System additional view screenshot" }
    ]
  },
  "chess-page": {
    title: "Chess Hobby Page",
    images: [
      { src: "imgs/projects/chess-page-1.png", alt: "Chess Hobby Page website screenshot" },
      { src: "imgs/projects/chess-page-2.png", alt: "Chess Hobby Page additional view screenshot" },
      { src: "imgs/projects/chess-page-3.png", alt: "Chess Hobby Page additional view screenshot" }
    ]
  },
  "portfolio-v1": {
    title: "Portfolio Website v1",
    images: [
      { src: "imgs/projects/portfolio-v1-1.png", alt: "Portfolio Website v1 homepage screenshot" },
      { src: "imgs/projects/portfolio-v1-2.png", alt: "Portfolio Website v1 additional page screenshot" },
      { src: "imgs/projects/portfolio-v1-3.png", alt: "Portfolio Website v1 additional page screenshot" }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const modalElement = document.getElementById("projectGalleryModal");

  if (!modalElement || typeof bootstrap === "undefined") {
    return;
  }

  const titleElement = document.getElementById("projectGalleryTitle");
  const mainImage = document.getElementById("galleryMainImage");
  const captionElement = document.getElementById("galleryCaption");
  const countElement = document.getElementById("galleryCount");
  const thumbnailsElement = document.getElementById("galleryThumbnails");
  const prevButton = document.getElementById("galleryPrev");
  const nextButton = document.getElementById("galleryNext");
  const galleryButtons = document.querySelectorAll(".project-gallery-trigger");

  let activeGalleryKey = null;
  let activeIndex = 0;
  let lastTrigger = null;

  const escapeHtml = (value) => value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");

  const createPlaceholderImage = (title, alt) => {
    const label = escapeHtml(title);
    const description = escapeHtml(alt);
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#16212b" />
            <stop offset="100%" stop-color="#0b1117" />
          </linearGradient>
        </defs>
        <rect width="1200" height="760" fill="url(#bg)" />
        <rect x="60" y="60" width="1080" height="640" rx="28" fill="none" stroke="rgba(255,255,255,0.18)" />
        <text x="600" y="310" fill="#f3f7f8" font-size="46" font-family="Arial, sans-serif" text-anchor="middle">${label}</text>
        <text x="600" y="380" fill="#9caeb8" font-size="26" font-family="Arial, sans-serif" text-anchor="middle">${description}</text>
        <text x="600" y="450" fill="#22d3ee" font-size="22" font-family="Arial, sans-serif" text-anchor="middle">Add your real screenshot at imgs/projects/</text>
      </svg>
    `)}`;
  };

  const getActiveGallery = () => projectGalleries[activeGalleryKey];

  const setImageSource = (image, galleryTitle) => {
    mainImage.onerror = null;
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    mainImage.onerror = () => {
      mainImage.onerror = null;
      mainImage.src = createPlaceholderImage(galleryTitle, image.alt);
      mainImage.alt = `${image.alt} placeholder`;
    };
  };

  const renderThumbnails = (gallery) => {
    thumbnailsElement.innerHTML = "";

    gallery.images.forEach((image, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "gallery-thumbnail";
      button.setAttribute("aria-label", `View screenshot ${index + 1} for ${gallery.title}`);

      if (index === activeIndex) {
        button.classList.add("is-active");
      }

      const thumbnail = document.createElement("img");
      thumbnail.src = image.src;
      thumbnail.alt = image.alt;
      thumbnail.loading = "lazy";
      thumbnail.onerror = () => {
        thumbnail.onerror = null;
        thumbnail.src = createPlaceholderImage(gallery.title, image.alt);
      };

      button.addEventListener("click", () => {
        activeIndex = index;
        updateGallery();
      });

      button.appendChild(thumbnail);
      thumbnailsElement.appendChild(button);
    });
  };

  const updateGallery = () => {
    const gallery = getActiveGallery();

    if (!gallery || !gallery.images.length) {
      return;
    }

    const image = gallery.images[activeIndex];

    titleElement.textContent = gallery.title;
    captionElement.textContent = image.alt;
    countElement.textContent = `${activeIndex + 1} / ${gallery.images.length}`;
    setImageSource(image, gallery.title);
    renderThumbnails(gallery);

    const hasMultipleImages = gallery.images.length > 1;
    prevButton.disabled = !hasMultipleImages;
    nextButton.disabled = !hasMultipleImages;
  };

  const openGallery = (galleryKey, trigger) => {
    const gallery = projectGalleries[galleryKey];

    if (!gallery) {
      return;
    }

    activeGalleryKey = galleryKey;
    activeIndex = 0;
    lastTrigger = trigger;
    updateGallery();
  };

  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openGallery(button.dataset.gallery, button);
    });
  });

  prevButton.addEventListener("click", () => {
    const gallery = getActiveGallery();

    if (!gallery) {
      return;
    }

    activeIndex = (activeIndex - 1 + gallery.images.length) % gallery.images.length;
    updateGallery();
  });

  nextButton.addEventListener("click", () => {
    const gallery = getActiveGallery();

    if (!gallery) {
      return;
    }

    activeIndex = (activeIndex + 1) % gallery.images.length;
    updateGallery();
  });

  modalElement.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prevButton.click();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextButton.click();
    }
  });

  modalElement.addEventListener("hidden.bs.modal", () => {
    activeIndex = 0;

    if (lastTrigger) {
      lastTrigger.focus();
    }
  });
});
