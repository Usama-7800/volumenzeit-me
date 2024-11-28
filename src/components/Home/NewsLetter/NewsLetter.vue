<script setup></script>

<template>
  <div class="chance mt-[2.5rem] bg-[url('@/assets/images/form/bg.jpg')] bg-cover bg-center pb-[2.1875rem] pt-[3.75rem] sm:pb-[4.3597560976rem] sm:pt-[3.6280487805rem] lg:pb-[3.75rem] lg:pt-[4.0625rem]">
    <div class="chance__container mx-auto box-content flex max-w-[69.375rem] flex-col items-center justify-center gap-7 px-[0.9375rem]">
      <h4 data-aos="fade-up" class="text-center text-[1.75rem] font-[700] capitalize leading-[2.8125rem] text-white sm:text-[1.875rem] lg:text-[2.25rem]">Don't miss your chance to get free Giveaway Sing up to our newsletter</h4>
      <p data-aos="fade-up" class="text-center font-[.875rem] leading-7 text-white">We will inform you about coming Giveaways, Offers, Online Store preparation progress and start of sales</p>
      <form action="files/sendmail/sendmail.php" method="POST" class="flex flex-col items-center justify-center gap-7">
        <div class="chance__form-top grid grid-cols-1 gap-5 lg:grid-cols-2">
          <input data-aos="fade-right" type="text" name="form[name]" data-error="Error" placeholder="Name" class="input max-w-[20rem] rounded-md bg-white px-[1.8125rem] py-[1.375rem]" />
          <input data-aos="fade-left" type="text" name="form[email]" data-error="Error" placeholder="Email" class="input max-w-[20rem] rounded-md bg-white px-[1.8125rem] py-[1.375rem]" />
        </div>
        <span data-aos="fade-up">
          <button type="submit" class="button chance__button rounded-md border-b-2 border-black bg-black px-[3.375rem] py-[1.375rem] text-white hover:bg-white hover:text-black">Sign Up</button>
        </span>
        <p data-aos="fade-up" class="chance__text text-center font-[.875rem] leading-7 text-white">You agree to our <a href="#">Terms and Conditions</a></p>
      </form>
    </div>
  </div>
</template>
<!-- "@/assets/images/watches/Volumenzeit_S-1.png -->
