'use client';

export const ScrollToTopButton = () => (
  <button
    className="bg-white shadow-sm fixed w-12 h-12 flex items-center justify-center bottom-5 right-5 z-10 rounded-full"
    onClick={() =>
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      })
    }
  >
    TOP
  </button>
);
