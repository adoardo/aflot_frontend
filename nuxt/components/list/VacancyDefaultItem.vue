<template>
  <div class="vacancy">
    <div class="vacancy__label-top">
      <div class="vacancy__label">
        {{ data.position }} <img src="assets/img/responses/fav.png" alt="" />
      </div>
      <div class="vacancy__logo">
        <img src="assets/img/flot/logo-cart.png" alt="logo" />
      </div>
    </div>
    <div class="vacancy__meta">
      <div class="vacancy__company">
        <img src="assets/img/responses/company.png" alt="" />OJ Crew
      </div>
      <div class="vacancy__ship">
        <img src="assets/img/responses/ship.png" alt="" />{{ data.ship_name }}
      </div>
    </div>

    <div class="vacancy__info">
      <div class="vi-item">
        <div class="vi-label">Зарплата:</div>
        <strong>2000 - 2300 USD</strong>
      </div>
      <div class="vi-item">
        <div class="vi-label">Дата посадки:</div>
        {{ data.date_of_departure }}
      </div>
      <div class="vi-item">
        <div class="vi-label">Длит-ть контракта:</div>
        {{ data.contract_duration }}
      </div>
    </div>

    <div class="vacancy__buttons">
      <div class="vacancy__button blue">
        <img src="assets/img/dop-page/blue-info.svg" alt="" />Подробнее
      </div>
      <div class="vacancy__button red">
        <img src="assets/img/search/link.png" alt="" />Отправить отклик
      </div>
    </div>

    <div class="vacancy__date new">13 декабря 2023</div>
  </div>
</template>

<script setup>
defineProps({
  data: {},
});
</script>

<style lang="scss" scoped></style>
