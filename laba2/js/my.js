// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("burger").addEventListener("click", function()
//     {
//         document.querySelector(".header").classList.toggle("open")
//     })
// }) 

// var divVisible = false;

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("burger").addEventListener("click", function () {
//     document.querySelector(".header").classList.toggle("open");
//     document.querySelector("html").classList.toggle("overflow-hidden");
//     document.querySelector("body").classList.toggle("overflow-hidden");
//     var show__all = document.getElementById("adaptiv");
//     if (divVisible) {
//       adaptiv.style.display = "none";
//       divVisible = false;
//     } else {
//       adaptiv.style.display = "block";
//       divVisible = true;
//     }
//   });
// });

    document.addEventListener("DOMContentLoaded", function () {
        // Объявление и инициализация переменной
        var divVisible = false;

        document.getElementById("burger").addEventListener("click", function () {
            document.querySelector(".navigatiom-mob").classList.toggle("open");
            document.querySelector("html").classList.toggle("overflow-hidden");
            document.querySelector("body").classList.toggle("overflow-hidden");
            var show__all = document.getElementById("adaptiv");
            // Обновление состояния переменной
            if (divVisible) {
                adaptiv.style.display = "none";
                divVisible = false;
            } else {
                adaptiv.style.display = "block";
                divVisible = true;
            }
        });
    }); 
