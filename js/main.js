
    $("#mainmenu").click(function(){
        $(".headerin--gnb").slideToggle();
    });
    
    $(document).ready(function(){
              $('.works3--sliderBox__slider').bxSlider({
                  auto:true,/* 자동슬라이드 진행 */
                  controls:false,/* prev next 버튼 생성 여부*/
                  speed:1000,/* 1000=1초, 200=0.2프레임 */
                  responsive:false,/* 슬라이드 구성이 적응형으로 설정 */
                  /* pause:1000, *//* 일시멈추는 속도 */
                  });
            });

    var myIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) { myIndex = 1 }
            x[myIndex - 1].style.display = "block";
            setTimeout(carousel, 3000); // Change image every 2 seconds
        }

    