<script setup></script>
<template>
  <div data-watch="navigator" data-watch-margin="-42%" class="about overflow-hidde box-border bg-[#fff] pt-[3.125rem]">
    <div class="about__container relative mx-auto grid grid-cols-1 items-center justify-between gap-7 px-[.9375rem] lg:max-w-[60.375rem] lg:grid-cols-[40%_60%]">
      <div class="about__left box-border lg:w-[24.75rem]">
        <h3 class="about__text-nav mb-[2.8125rem] text-center font-spaceAge text-[1.75rem] font-[400] leading-6 text-black sm:text-[2rem] lg:text-start lg:text-[2.625rem]" data-aos="fade-right" data-aos-anchor=".about__left">About us</h3>
        <p class="about__text-nav box-border break-words text-center leading-7 lg:text-start" data-aos="fade-right" data-aos-delay="50" data-aos-anchor=".about__left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan volutpat tristique metus, nibh massa quam iaculis lectus. A dui nam phasellus porttitor nisi. Eget a quam est, eget dictum nisi. Sit donec aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci risus, velit. Lectus tellus amet</p>
      </div>
      <div data-aos="fade-left" class="about__right group relative p-6 lg:w-[39.375rem]">
        <a href="#" data-popup="#popup" data-popup-youtube="s-x_HVCwKgI" class="before:absolute before:h-[88%] before:w-[92%] before:rounded-md before:bg-gradient-to-t before:from-[#735cff] before:to-[#735cff] before:opacity-80 before:transition-opacity before:duration-500 before:ease-in-out before:content-[''] before:group-hover:opacity-50">
          <img class="about__video w-full" src="@/assets/images/about/video.png" alt="" />
          <span class="about__poligon absolute z-10 h-[80px] w-[80px] transform rounded-full bg-[#f5f9ff] transition-transform duration-500 ease-in-out before:absolute before:left-[calc(50%-51px)] before:top-[calc(50%-51px)] before:h-[102px] before:w-[102px] before:rounded-full before:bg-[#f5f9ff] before:opacity-20 before:content-[''] group-hover:scale-110" style="top: calc(50% - 39px); left: calc(50% - 39px)">
            <img class="absolute left-[24%] top-[20%] h-[50px] w-[50px] transition-transform duration-500 ease-in-out group-hover:scale-110" src="@/assets/images/about/Polygon 1.svg" alt="" />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
