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

$(document).ready(function()
{
    $(".slider-one").owlCarousel(
        {
            items: 1,
            loop: true,
            margin: 10
        }
    );
});
