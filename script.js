// let sliderImagesColor = document.querySelectorAll(".slide-color"),
//     sliderImagesCards = document.querySelectorAll(".slide-cards"),
//     arrowLeft = document.querySelector("#arrow-left"),
//     arrowRight = document.querySelector("#arrow-right"),
//     current = 0;

//     function reset()
//     {
//         for(let i = 0; i < sliderImages.length; i++)
//         {
//             sliderImages[i].style.display = "none";
//         }
//     }

//     function startSlide(sliderImages)
//     {
//         reset();
//         sliderImages[0].style.display = "block";
//     }

//     function sliderLeft()
//     {
//         reset();
//         sliderImages[current-1].style.display = "block";
//         current--;
//     }

//     function sliderRight()
//     {
//         reset();
//         sliderImages[current+1].style.display = "block";
//         current++;
//     }

//     arrowLeft.addEventListener("click", function()
//     {
//         if (current === 0)
//         {
//             current = sliderImages.length;
//         }
//         sliderLeft();
//     });

//     arrowRight.addEventListener("click", function()
//     {
//         if (current === sliderImages.length - 1)
//         {
//             current = -1;
//         }
//         sliderRight();
//     });

//     startSlide(sliderImagesColor);
//     startSlide(sliderImagesCards);

var swiper1 = new Swiper('.swiper1',
{
    spaceBetween: 30,
    navigation:
    {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1", 
    },
    loop: true
});

var swiper2 = new Swiper('.swiper2',
    {
        spaceBetween: 30,
        navigation:
        {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2", 
        },
        loop: true
    });

var swiper3 = new Swiper('.swiper3',
    {
        spaceBetween: 30,
        navigation:
        {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3", 
        },
        loop: true
    });

var swiper4 = new Swiper('.swiper4',
    {
        spaceBetween: 30,
        navigation:
        {
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4", 
        },
        loop: true
    });