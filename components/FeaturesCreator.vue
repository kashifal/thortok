<template lang="">
  <div class="bg-[#EFF1D9] my-20 sm:p-6 p-4">
    <section class="max-w-7xl mx-auto">
      <div class="underline sm:underline-offset-[16px] underline-offset-4">
        <h2
          class="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4"
        >
          <span class="p-2 bg-[#DBF226] rounded-full"> <Featured /> </span
          >Featured Creators of the Week
        </h2>
      </div>
      <div class="flex justify-between">
        <div class="flex flex-wrap gap-3 mb-8">
          <h1 class="">
            Discover the unique talents and inspiring creations of this week’s
            standout contributors.
          </h1>
        </div>

        <div class="gap-2 -mt-1 hidden sm:flex">
          <div
            @click="goPrev"
            class="p-2 h-8 rounded-full cursor-pointer bg-white"
          >
            <CarouselLeftArrow />
          </div>
          <div
            @click="goNext"
            class="p-2 h-8 rounded-full cursor-pointer bg-white"
          >
            <CarouselRightArrow />
          </div>
        </div>
      </div>

      <Splide
        class="mt-10"
        ref="splideRef"
        :options="{
          type: 'loop',
          gap: '1rem',
          perPage: 4, // Show one slide per view
          pagination: false, // Disable default pagination
          arrows: false, // Disable default arrows (we'll use custom)
          breakpoints: {
            1024: { // Tablet (max-width: 1024px)
              perPage: 2, // Show 3 slides
            },
            768: { // Mobile (max-width: 768px)
              perPage: 1, // Show 1 slide
            },
          }
        }"
      >
        <SplideSlide
          class="bg-black text-white py-5 px-5 shadow-md rounded-lg overflow-hidden"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/c170/c53d/4b485e510001a9353f4535f387f9dc18?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JjIF~2PPSVtCXlmCigWgXcnYyl~HDlRJhYWD1Z5OWn0ROOkAVhhhuM1~SlLk4CXLVa-laqnwmLx-DlGT6G8zcURitAcpwV6Jm6-KyMFSuhz7D7f729CYpr7LBKfUYvafrHCIst3CCLGavBVG-4UTQUGUzZ7vZ5yn8t~0hIX3238kY2rgX72I7VQzvbfENr3cXgP6E1~eH~cy0Ef7N2hT7iYG4WgvZ2WkoPXNnUMT7jrSWTDPwX9In9KDBY3k4kTqgRke8Y9hoyJVDhx-NG8TR~omKHAy~Z~FJk7fNpOdMAlrPnNlSVVXAW7V9z7vuN4-kJjsqfh1oGwhkA9y3-XEiA__"
            alt="Product Image"
            class="w-full rounded-md sm:h-[201px] h-[189px] md:h-[206px] object-cover"
          />
          <div class="py-4 pr-4">
            <div class="flex justify-between">
              <h3
                class="font-semibold items-center flex gap-3 text-sm text-white"
              >
                <span class="flex"
                  ><div class="relative">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/807c/0eb6/d541b89bff8631a874638024a09c19f7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKCGJJnAYY27UHhmC7Qn53IYt9NLiQffQjmilEImFYLlXqfGfWHUa435gS9NaMGxR6MiCInQ0fpq81totZAW7h4VOKUA4ZS8f3z7ZprUvMfQ~umddcXsWGu6GhwX03~AKGyrrgno3aovaQVPoafD~t3~yJE1M2xLSQotB6tyLytxSWdZwBdTJUW1eSQn6Tt1vQqx~RvI4HV6uqE1dkcxOY2hm5dNEB7b63NepztVHOhpIcy5Sr5VPgIejElQc9HiAR10BQQllkaknuy-6Ix15ZH-2sRuZ-1xS2Kymkw0tem8Zjdqw1KPYJdw1gVwZQoQnqlVHQth3vaJrSOSQR8Ojw__"
                      class="w-9 rounded-full"
                      alt=""
                    />
                    <span
                      ><h2
                        class="text-[8px] absolute p-1 text-center flex items-center border-2 border-white -top-2 left-7 h-6 bg-yellow-300 font-bold rounded-full text-black"
                      >
                        Pro
                      </h2></span
                    >
                    <span
                      ><h1
                        class="absolute p-1 bg-[#78BF39] border border-white top-7 left-7 rounded-full"
                      ></h1
                    ></span></div
                ></span>
                Ch. Ratana
              </h3>
              <div class="flex items-center -mr-3">
                <button
                  class="flex items-center gap-1 px-2 py-1 rounded-md border-[#FDE047] border text-[#FDE047] hover:bg-[#DBF226] hover:text-black"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <h1 class="mt-3 -mb-2 text-xl font-bold">Sala Blue</h1>
            <div class="mt-4 flex flex-wrap items-center w-full gap-2 -mb-3">
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Graphics
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                PSD
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Templates
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Mockups
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Marketing
              </button>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide
          class="bg-black text-white py-5 px-5 rounded-lg overflow-hidden"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/a4d3/3630/f00982a2a13bf0df4fba4f557c466924?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SC3tB4brB~BFvr~Y4QZbTG1pA4q02eczFJFAoWtdkvO54y4OmU5cHZKdYhYpiheJV83EtXc812A7lwuQpe-MlI9ue9INUgGA4Ji6lj5TdxVxH3JGwtNIX42AzftLys~kVG6FW~Sr7UzgTcyGH0XBmRAvSsXWyrtN3hc2kcm~O-kPkQAGJy2feGCA0-NfFrcz4fRDGItcKGJqTOxwF9i1xKh4mrdPGa-YPR9meSlNTuPWN4ARJo5aCn4ob~QslRgGmE6Ly9lYswzXImc0fa9OBrslvKLwGjqOLDzK0zpRkGhTDx3BVLegT3GmTujNfyUVCyhlsvhCgz0MdPzIIhKNqA__"
            alt="Product Image"
                        class="w-full rounded-md sm:h-[201px] h-[189px] md:h-[206px] object-cover"

            
          />
          <div class="py-4 pr-4">
            <div class="flex justify-between">
              <h3
                class="font-semibold items-center flex gap-3 text-sm text-white"
              >
                <span class="flex"
                  ><div class="relative">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/5ccc/df80/219777ad8315a65d20880d40025bd1ac?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ojqXgiwGA8~sXoIyEu590gG7Z0WLTyIseJtt2j0kAQi7J8bNi2Tdd077fTHAUPuPe1M49bdKC67eam-BWDxB3LrWuXubEzdY5GEDJZjUvxkQG5ELEPstPDb~vrGUfwcbByzJeGaffEKygcgerJwm4OI8gi-EDUh-Hnuz-2zuo7ax8wtO1EiGgS4w1oa7UBsKO9TiR2v0FCuROTUPZAirt8oJavt~gIqe0P-rX8ZqALQkeNokF5eoW1--0nNA7HdFzyvJPzU~ZqPDfmhqpCWkWjFRN1UOMZyEPuDrF43-mv7M1W5YUtyyXU-8M2QG6WpBRcHJU2pSd8xvj9Xih-JlFw__"
                      class="w-9 rounded-full"
                      alt=""
                    /></div
                ></span>
                K. Net
              </h3>
              <div class="flex items-center -mr-3">
                <button
                  class="flex items-center gap-1 px-2 py-1 rounded-md border-[#FDE047] border text-[#FDE047] hover:bg-[#DBF226] hover:text-black"
                >
                  <Plus class="w-4" />
                  Follow
                </button>
              </div>
            </div>
            <h1 class="mt-3 -mb-2 text-xl font-bold">Organic Orange</h1>
            <div class="mt-4 flex flex-wrap items-center w-full gap-2 -mb-3">
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Graphics
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Vectors
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Drawings
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Logo
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Mockups
              </button>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide
          class="bg-black text-white py-5 px-5 rounded-lg overflow-hidden"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/ff12/6386/1b7e4071299e965383b02ecb2bd7e751?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZHErrS8qpyRmfFOL6dxL4ruGSRfWhJekZSudePD7D1a-8az4Ux~HVHhcbEGTPXtTqwYTKmN6jo4rGG-AVYcCyPCtUmPWxYe2UNWwErEDv6QwgkQWZc3Q9PhRbay3DEwI0FXTjjNlMGuaQTc39cXFoyKYH1ebX-Por~j-7hqcnwxV913enfomhNXJn5fhdGDYaqUGP2LpGBSwoEWs-SYhC0bn1o6jBBrC5HoCBLYrd3GfpmI5jtHDv-I6~fjx41nZRHBoM~9ePOEadnpnKIdum9hTI19LBs0ToZn57bHg~thP-r2m4rKr0z4e8FpfZOUWoZw04rqQUI-bGR0U8zTGSQ__"
            alt="Product Image"
                        class="w-full rounded-md sm:h-[201px] h-[189px] md:h-[206px] object-cover"

            
          />
          <div class="py-4 pr-4">
            <div class="flex justify-between">
              <h3
                class="font-semibold items-center flex gap-3 text-sm text-white"
              >
                <span class="flex"
                  ><div class="relative">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/3ca3/4594/808da96cd62fb323d430518048a0596b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S8zQIMGOtt-7uOF579ALJX-eTp-b6hWSCpADmIep0zX8p5nsAyyLGMc6QCFasccZicn084JomNOX9cSxzsiDLvXEYA8WEI0AeR-jj3wxRr6UxvHIIWEqDJszFToiw-troxf9rtl0TDIZhXLXvHLs0LX8tBpxJ3M-BeyD4UhC7zTICgSKFw7NFdqfkfmkiKPA6HCygyKlW8l6msJqQyKG0bAO12sR9KpcFNDEcIZnYFEC06CVfGCSfqRRYDnMJs2JxMfrZfW7ZjG2GdDV2Yhz6eOVJhQm1kB-NHadK0HI6vk3yKkfROAeJPvNj96RGbx53u9aCZR~FfzUjmVtXucIhw__"
                      class="w-9 rounded-full"
                      alt=""
                    /></div
                ></span>
                Na. Rith
              </h3>
              <div class="flex items-center -mr-3">
                <button
                  class="flex items-center gap-1 px-2 py-1 rounded-md border-[#FDE047] border text-[#FDE047] hover:bg-[#DBF226] hover:text-black"
                >
                  <Plus class="w-4" />
                  Follow
                </button>
              </div>
            </div>
            <h1 class="mt-3 -mb-2 text-xl font-bold">Geo Art</h1>
            <div class="mt-4 flex flex-wrap items-center w-full gap-2 -mb-3">
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Graphics
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Illustrations
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Cartoons
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Social Media
              </button>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide
          class="bg-black text-white py-5 px-5 rounded-lg overflow-hidden"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/bff9/d1fc/948b1c5ebc0440eb4211f9c557c51183?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GH3glp1c4EC0grqv0UfXXIvsVxl37T7q1tMkXnpFEM-tijQ9byUKs2iLl8Kz5Bx1FvNUQkGl0XXoMv~RscfAHDtbEylswQ8b5TFZOefL3fo6k5h8Mvh-Ad4xgw~eME-ctAg4xsOp-QuBD04R9-ThJ2QOBj0nkVTTTdnZiSuDw58-ldF-oxVDnG9o69s6c1KicDgo54ncfsS11YemTpEMC~oHELdL2aSBqreMb8hpfVUVm0B2oIjzbZonab2dOm4nkhT2j2IMtkLxQRo3XWr2JuJuCFA5iSKHPLCKauVy7PYub5TUNZk1NrO70OxrRF1J50sup-gdDqhy~JhEZoWDkQ__"
            alt="Product Image"
               class="w-full rounded-md sm:h-[201px] h-[189px] md:h-[206px] object-cover"
            
          />
          <div class="py-4 pr-4">
            <div class="flex justify-between">
              <h3
                class="font-semibold items-center flex gap-3 text-sm text-white"
              >
                <span class="flex"
                  ><div class="relative">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/1686/0e45/afe7dcf014ded8c355c3e096dc9523ed?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OpupSnMiktRirKSlcuCoqZ4Vi1HiMNCA0hFMNC9rE1FsR75p~Nt52zd-MgxvF6jAoFYndHrAXkBxp4EgvFLq9j8VCqnKyPLIbI~kL3bAxwl2HbySAoHlwYY8itK5XoDfvqnL6im7VOuCZcT7W2kiqlKKZO~nxvl~6nWgMmQ4H5X3H57f0gjJa8JPe-qIstBmSk8qkxo4cdfvrtp88TpypE~UxUOulC-lFX6dZbq1eaXpr4gGcWHFcbf73IqZX8673NoLjRI70iNVkR6EohnMHnOHFMbUY~2Mz15fc8XZ-izi75ZJVc6EGKej5sBwCJk8GvTYGS6k44VmVZi~T5ZmQw__"
                      class="w-9 rounded-full"
                      alt=""
                    /></div
                ></span>
                L. Sreyka
              </h3>
              <div class="flex items-center -mr-3">
                <button
                  class="flex items-center gap-1 px-2 py-1 rounded-md border-[#FDE047] border text-[#FDE047] hover:bg-[#DBF226] hover:text-black"
                >
                  <Plus class="w-4" />
                  Follow
                </button>
              </div>
            </div>
            <h1 class="mt-3 -mb-2 text-xl font-bold">Passion Crea</h1>
            <div class="mt-4 flex flex-wrap items-center w-full gap-2 -mb-3">
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Graphics
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Illustrations
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Cartoons
              </button>
              <button
                class="hover:bg-[#DBF226] bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Social Media
              </button>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide
          class="bg-black text-white py-5 px-5 shadow-md rounded-lg overflow-hidden"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/9f38/a05b/f1eb9614d6a01323ef322be0c43a38d0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKxzBrYEMkFe~UjX5e8viJUbgyfwtfIOj-s5giUvZwozosJv0nvPNPr5HIDt5lkq0rd40FfQbl-IMEdCYwG0kWuGhW-VCHpzCQv2dlK25BbzXYB6tPwR2B~Z4nemO0T7g4RerXlOGSMvSFfgybkPwEWMG-vZpDz8l4EMuuYLhFwrgYdosKT0AWIF8HWSLRlK-6YfsDzV9ROUJYJWy3ahJDX0ALkswqhYyo01JVBsPDtEYxUSh28bksWU3ZfDMnBjiAQWYBEmzIIHpi1BDwMcvB0cirfExWbFz3EwhGfqTIHmGSc2wOLETKjDKBv-B~kiOuqQqaNViTjDb33lBu00kA__"
            alt="Product Image"
            class="w-full rounded-md h-50 object-cover"
          />
          <div class="p-4">
            <div class="flex justify-between">
              <h3
                class="font-semibold items-center flex gap-3 text-sm text-white"
              >
                <span class="flex"
                  ><div class="relative">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/807c/0eb6/d541b89bff8631a874638024a09c19f7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKCGJJnAYY27UHhmC7Qn53IYt9NLiQffQjmilEImFYLlXqfGfWHUa435gS9NaMGxR6MiCInQ0fpq81totZAW7h4VOKUA4ZS8f3z7ZprUvMfQ~umddcXsWGu6GhwX03~AKGyrrgno3aovaQVPoafD~t3~yJE1M2xLSQotB6tyLytxSWdZwBdTJUW1eSQn6Tt1vQqx~RvI4HV6uqE1dkcxOY2hm5dNEB7b63NepztVHOhpIcy5Sr5VPgIejElQc9HiAR10BQQllkaknuy-6Ix15ZH-2sRuZ-1xS2Kymkw0tem8Zjdqw1KPYJdw1gVwZQoQnqlVHQth3vaJrSOSQR8Ojw__"
                      class="w-9 rounded-full"
                      alt=""
                    />
                    <span
                      ><h2
                        class="text-[8px] absolute p-1 text-center flex items-center border-2 border-white -top-2 left-7 h-6 bg-yellow-300 font-bold rounded-full text-white"
                      >
                        Pro
                      </h2></span
                    >
                    <span
                      ><h1
                        class="absolute p-1 bg-[#78BF39] border border-white top-7 left-7 rounded-full"
                      ></h1
                    ></span></div
                ></span>
                Ch. Ratana
              </h3>
              <div class="flex items-center -mr-3">
                <button
                  class="flex items-center gap-1 px-2 py-1 rounded-md bg-[#DBF226] text-black"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <h1 class="mt-3 -mb-2 text-xl font-bold">Sala Blue</h1>
            <div class="mt-4 flex flex-wrap items-center w-full gap-2 -mb-3">
              <button
                class="bg-black text-white border border-white px-3 sm:text-sm text-[11px] shadow-md py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Graphics
              </button>
              <button
                class="px-2 py-2 bg-black sm:text-sm text-[11px] font-semibold text-white flex gap-1 justify-center items-center border border-white rounded-md"
              >
                PSD
              </button>
              <button
                class="px-2 py-2 bg-black sm:text-sm text-[11px] font-semibold text-white flex gap-1 justify-center items-center border border-white rounded-md"
              >
                Templates
              </button>
              <button
                class="px-2 py-2 bg-black sm:text-sm text-[11px] font-semibold text-white flex gap-1 justify-center items-center border border-white rounded-md"
              >
                Mockups
              </button>
              <button
                class="px-2 py-2 bg-black sm:text-sm text-[11px] font-semibold text-white flex gap-1 justify-center items-center border border-white rounded-md"
              >
                Marketing
              </button>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide
          class="bg-black text-white py-5 px-5 rounded-lg overflow-hidden"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/c159/c83c/023c559457b8a530ba49c382e9576e9d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CG~Vz~54KvXsg9TwVzSqO7Zw8051kEchvsIDlkHrbNQpuJPXlBsXGMVwRRo2W31iFhnBaxd9A4E0Dhsol2wEEDxI1Z07I9oCO8eFiyD8qyVLedaQKhP8Gsu5wVW0dR~IEvRRUjuK-3oa0eckzhoxlsCFhnFqBvKIED98L5i9vMBA6w39NZ-xTqHFaen80TnxtaLgOb1qypx8QDszVsTtVjctGTfOH31klJEbsvnpi3zgpjpHKA94Qkt0TZ3seMQOZ0Kbw-do681kKdV23TJ4rWodCYYa2gE8gkhr7DyJ9s6bl6UcL1QgWgQir5Xhxf~yRs27QofIz5DV3rNa0OAT4Q__"
            alt="Product Image"
            class="w-full rounded-md h-50 object-cover"
          />
          <div class="p-4">
            <div class="flex justify-between">
              <h3
                class="font-semibold items-center flex gap-3 text-sm text-white"
              >
                <span class="flex"
                  ><div class="relative">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/5ccc/df80/219777ad8315a65d20880d40025bd1ac?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ojqXgiwGA8~sXoIyEu590gG7Z0WLTyIseJtt2j0kAQi7J8bNi2Tdd077fTHAUPuPe1M49bdKC67eam-BWDxB3LrWuXubEzdY5GEDJZjUvxkQG5ELEPstPDb~vrGUfwcbByzJeGaffEKygcgerJwm4OI8gi-EDUh-Hnuz-2zuo7ax8wtO1EiGgS4w1oa7UBsKO9TiR2v0FCuROTUPZAirt8oJavt~gIqe0P-rX8ZqALQkeNokF5eoW1--0nNA7HdFzyvJPzU~ZqPDfmhqpCWkWjFRN1UOMZyEPuDrF43-mv7M1W5YUtyyXU-8M2QG6WpBRcHJU2pSd8xvj9Xih-JlFw__"
                      class="w-9 rounded-full"
                      alt=""
                    /></div
                ></span>
                K. Net
              </h3>
              <div class="flex items-center -mr-3">
                <button
                  class="border flex items-center gap-1 px-2 py-1 rounded-md text-yellow-300 bg-black border-yellow-300"
                >
                  <span class="text-yellow-300">
                    <Plus class="w-4" />
                  </span>
                  Follow
                </button>
              </div>
            </div>
            <h1 class="mt-3 -mb-2 text-xl font-bold">Organic Orange</h1>
            <div class="mt-4 flex flex-wrap items-center w-full gap-2 -mb-3">
              <button
                class="bg-black text-white px-3 sm:text-sm text-[11px] border border-white py-2 rounded-md flex gap-1 justify-center items-center"
              >
                Graphics
              </button>
              <button
                class="px-2 py-2 bg-black sm:text-sm text-[11px] font-semibold text-white flex gap-1 justify-center items-center border border-white rounded-md"
              >
                Vectors
              </button>
              <button
                class="px-2 py-2 bg-black sm:text-sm text-[11px] font-semibold text-white flex gap-1 justify-center items-center border border-white rounded-md"
              >
                Drawings
              </button>
              <button
                class="px-2 py-2 bg-black sm:text-sm text-[11px] font-semibold text-white flex gap-1 justify-center items-center border border-white rounded-md"
              >
                Logo
              </button>
              <button
                class="px-2 py-2 bg-black sm:text-sm text-[11px] font-semibold text-white flex gap-1 justify-center items-center border border-white rounded-md"
              >
                Mockups
              </button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  </div>
</template>
<script setup>
import Featured from "../icons/Featured.vue";
import CarouselRightArrow from "../icons/CarouselRightArrow.vue";
import CarouselLeftArrow from "../icons/CarouselLeftArrow.vue";
import Plus from "../icons/Plus.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ref } from "vue";

const splideRef = ref(null); // Reference to Splide instance

const goNext = () => {
  const splideInstance = splideRef.value?.splide;
  if (splideInstance) splideInstance.go(">"); // Move to next slide
};

const goPrev = () => {
  const splideInstance = splideRef.value?.splide;
  if (splideInstance) splideInstance.go("<"); // Move to previous slide
};
</script>
<style lang=""></style>
