<template>
  <NuxtLayout name="custom">
    <section class="section-about" v-if="sailor || company">
      <div class="container">
        <div class="about">
          <div class="tarif-top">
            <h1 class="about-title">Тарифы:</h1>
            <ul class="tarif-list" id="tabNav">
              <li v-if="role === 'Моряк'" @click="currentTab = 'sailor'">
                <a :class="{ 'tarif-active': currentTab === 'sailor' }">Моряка</a>
              </li>
              <li @click="currentTab = 'company'" v-if="role === 'Компания'">
                <a :class="{ 'tarif-active': currentTab === 'company' }">Компании</a>
              </li>
            </ul>
          </div>
          <div id="tabsWrap" class="tarif-block">
            <div
              class="tarif-tab"
              :class="{ 'tarif-active': currentTab === 'sailor' }"
              id="tab1"
            >
              <div class="tarif-all">
                <div class="tarif-cart">
                  <div class="tarif-cart__info">
                    <div class="tarif-cart__images">
                      <img src="assets/img/tarif/image.svg" alt="image" />
                      <div class="tarif-cart__item">
                        <div class="tarif-cart__title">Статус:</div>

                        <div class="tarif-cart__text">{{ isSailorTariff[0].status }}</div>
                      </div>
                    </div>

                    <div class="tarif-cart__block">
                      <div class="tarif-cart__item">
                        <div class="tarif-cart__title">Статус:</div>

                        <div class="tarif-cart__text">
                          {{ isSailorTariff[0].status }}
                        </div>
                      </div>

                      <div class="tarif-cart__item">
                        <div class="tarif-cart__title">Период</div>

                        <div class="tarif-cart__text">
                          {{ isSailorTariff[0].period }}
                        </div>
                      </div>

                      <div class="tarif-cart__item">
                        <div class="tarif-cart__title">Стоимость</div>

                        <div class="tarif-cart__text">
                          {{ isSailorTariff[0].cost }}
                          <span>рублей</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button class="tarif-cart__button">
                    <img src="assets/img/tarif/cart.svg" alt="image" />
                    Приобрести
                  </button>
                </div>

                <div class="tarif-info">
                  <div class="tarif-info__title">
                    Статус «Ищу работу» открывает следующие возможности:
                  </div>

                  <div class="tarif-ol">
                    <div
                      class="tarif-li"
                      v-for="item in isSailorTariffInfo[0]?.description_list"
                    >
                      <span class="tarif-li__number">{{ item.number }}</span>

                      <div class="tarif-li__text">{{ item.description }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tarif-dop">
                <div class="tarif-icon">!</div>

                <div class="tarif-dop__text">
                  Для получения статуса необходимо полностью заполнить резюме, если Вы еще
                  этого не сделали - воспользуйтесь <a href="#">этой ссылкой</a>
                </div>
              </div>
            </div>
            <div
              class="tarif-tab"
              :class="{ 'tarif-active': currentTab === 'company' }"
              id="tab2"
            >
              <div
                class="rat-block"
                style="margin: 0; width: 100%"
                v-if="company && company[0]"
              >
                <div
                  class="rat-item"
                  v-for="(item, i) in company[0]?.description"
                  :key="'company-tariff-item-' + i"
                >
                  <div class="rat-item-content">
                    <img
                      src="assets/img/dop-page/rat-1.svg"
                      alt="image"
                      class="rat-item-img"
                    />
                    <div class="rat-item-top">
                      <div class="rat-item-pretitle">тариф</div>

                      <div class="rat-item-title">{{ item.title }}</div>
                    </div>

                    <div class="rat-item-info">
                      <div class="rat-item-text">
                        Количество<br />
                        публикаций вакансий:
                      </div>

                      <div class="rat-item-num">{{ item.count_publications }}</div>
                    </div>

                    <div class="rat-item-line"></div>

                    <div class="rat-item-info">
                      <div class="rat-item-text">
                        Количество возможностей<br />
                        «Предложить вакансию»:
                      </div>

                      <div class="rat-item-num">{{ item.count_possibilities }}</div>
                    </div>

                    <div class="rat-item-end">
                      <div class="rat-item-price">{{ item.price }}</div>

                      <div class="rat-item-dop">рублей</div>
                    </div>
                  </div>

                  <button class="rat-item-button">
                    <img src="assets/img/dop-page/cart.svg" alt="image" />
                    <span>Приобрести</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import api from "@/api/api";
import { useUsersStoreRefs } from "~/store/useUserStore";

const sailor = ref(null);
const company = ref(null);
const currentTab = ref("sailor");
const role = ref("");

const { user } = useUsersStoreRefs();

const isSailorTariff = computed(() => (sailor.value ? sailor.value[0] : null));
const isSailorTariffInfo = computed(() => (sailor.value ? sailor.value[1] : null));

async function getTariffSailor() {
  try {
    const { data } = await api.get("/get_tariffs/sailor");
    sailor.value = data;
  } catch (error) {
    console.error(error);
  }
}

async function getTariffCompany() {
  try {
    const { data } = await api.get("/get_tariffs/company");
    company.value = data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(async () => {
  role.value = user.value.info.role;
  if (role.value === "Моряк") {
    await getTariffSailor();
  } else if (role.value === "Компания") {
    await getTariffCompany();
  }
});
</script>

<style lang="scss" scoped></style>
