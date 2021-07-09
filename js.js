var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


    function validate(){
      var name = document.getElementById("name").value;
      var phoneNumber = document.getElementById("phoneNumber").value;
      var address = document.getElementById("address").value;
      var error_message = document.getElementById("error_message");
      
      error_message.style.padding = "10px";
      
      var text;
      if(name.length < 5){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
      }
      if(phoneNumber.length < 10){
        text = "Please Enter Correct PhoneNumber";
        error_message.innerHTML = text;
        return false;
      }
      
      if(address.length <= 10){
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
      }
      alert("Form Submitted Successfully!");
      return true;
    }

    