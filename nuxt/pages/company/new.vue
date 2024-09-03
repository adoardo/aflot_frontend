<template>
  <NuxtLayout name="default-hero" class="main cabinet">
    <div>
      <AfHeaderColor />
    </div>
    <main class="main cabinet vak-edit">


      <div class="container">
        <div class="flex-title">
          <h1>Создать новую вакансию:</h1>
          <div>доступно 3 вакансии</div>
        </div>
        <div class="vak-edit-block sudno-edit-block">
          <div class="vak-edit-left">
            <h2>Основные данные:</h2>
            <div class="resume-grid col2">
              <div class="tag-input">
                <div class="tag-input__label">Должность</div>
                <div class="tag-input__list">

                  <div class="tag-input__item">
                    Старший помощник капитана
                    <button class="tag-input__delete">
                      <img src="assets/img/resume/close.svg" alt="delete">
                    </button>
                  </div>
                </div>
              </div>

              <div class="input">
                <label for="">Зарплата</label>
                <div class="input-block-zp">
                  <input type="number" value="" placeholder="От">
                  <input type="number" value="" placeholder="До">
                </div>
              </div>

              <div class="input">
                <label for="">Дата посадки:</label>
                <input type="date" value="">
              </div>
              <div class="input input-date-contract">
                <label for="">Длительность контракта:</label>
                <select name="" id="">
                  <option value="">1 месяц</option>
                  <option value="">1-2 месяца</option>
                  <option value="">2-3 месяца</option>
                  <option value="">3-4 месяца</option>
                  <option value="">4-5 месяцев</option>
                  <option value="">5-6 месяцев</option>
                  <option value="">6 месяцев и более</option>
                </select>
              </div>


            </div>
          </div>
          <!-- /.vak-edit-left -->



        </div>
        <!-- /.vak-edit-block -->

        <div class="vak-sudno-list sudno-list">
          <h2 class="sudno-list-subtitle">Судно:</h2>
          <p>
            Выберите судно из вашего списка «Мои суда», либо из списка «Морского флота»
          </p>
        </div>
        <!-- /.vak-sudno-list -->



        <div class="sudno-group">
          <div class="sudno-group-item">
            <div @click="tab1=true,tab2=false,tab3=false" class="sudno-top" :class="{ sactive: tab1 }">
              <div class="sudno-top__text">Выбрать судно из списка «Мои суда»</div>
              <!-- /.sudno-top__text -->
              <img src="assets/img/sudno/white-cursor.svg" alt="image" class="sudno-top__img">
            </div>
            <!-- /.sudno-top -->
            <div v-if="tab1" class="sudno-content" :class="{ active: tab1 }">
              <div class="sudno-info">
                <div class="sudno-info__top">
                  <h3 class="sudno-info__title">
                    Выбрать судно из списка «Мои суда»
                  </h3>
                  <!-- /.sudno-info__title -->
                  <div class="sudno-info__check">
                    <img src="assets/img/sudno/green.svg" alt="image" class="sudno-info__icon">
                    <div class="sudno-info__text">
                      Судно выбрано
                    </div>
                    <!-- /.sudno-info__text -->
                  </div>
                  <!-- /.sudno-info__check -->
                </div>
                <!-- /.sudno-info__top -->


                <div class="cabinet tag-input modal-tag-input">
                  <div class="tag-input__label">Судно:</div>
                  <div class="tag-input__list">

                    <div class="tag-input__item">
                      EVER GIVEN    <span class="modal-tag__gray">IMO 9811000</span>
                      <button class="tag-input__delete">
                        <img src="assets/img/resume/close.svg" alt="delete">
                      </button>
                    </div>
                  </div>
                </div>
                <!-- /.tag-input -->
                <div class="vabout-info vabout-info-vak">
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Название судна:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">EVER GIVEN</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Тип судна:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">Контейнеровоз</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">DWT (t) - валовая вместимость:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">199 489</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Длина</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">399 m / 1309 ft</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">IMO:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">9811000</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->

                  <div class="vabout-item">
                    <div class="vabout-subtitle">Год постройки:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">2018</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->

                  <div class="vabout-item">
                    <div class="vabout-subtitle">kW - двигательная установка:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">-</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->

                  <div class="vabout-item">
                    <div class="vabout-subtitle">Ширина:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">59 m / 194 ft</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                </div>
                <!-- /.vabout-info -->

              </div>
              <!-- /.sudno-info -->
            </div>
            <!-- /.sudno-content -->
          </div>
          <!-- /.sudno-group-item -->
          <div class="sudno-group-item">
            <div @click="tab1=false,tab2=true,tab3=false" class="sudno-top" :class="{ sactive: tab2 }">
              <div class="sudno-top__text">Выбрать судно из списка «Морского флота»</div>
              <!-- /.sudno-top__text -->
              <img src="assets/img/sudno/white-cursor.svg" alt="image" class="sudno-top__img">
            </div>
            <!-- /.sudno-top -->
            <div v-if="tab2" class="sudno-content" :class="{ active: tab2 }">
              <div class="sudno-info">
                <div class="sudno-info__top">
                  <h3 class="sudno-info__title">
                    Выбрать судно из списка «Морского флота»
                  </h3>
                  <!-- /.sudno-info__title -->
                  <div class="sudno-info__check sudno-info__checkred">
                    <img src="assets/img/sudno/red.svg" alt="image" class="sudno-info__icon">
                    <div class="sudno-info__text">
                      Судно не выбрано
                    </div>
                    <!-- /.sudno-info__text -->
                  </div>
                  <!-- /.sudno-info__check -->
                </div>
                <!-- /.sudno-info__top -->


                <div class="cabinet tag-input modal-tag-input">
                  <div class="tag-input__label">Судно:</div>
                  <div class="tag-input__list">

                    <div class="tag-input__item">
                      EVER GIVEN    <span class="modal-tag__gray">IMO 9811000</span>
                      <button class="tag-input__delete">
                        <img src="assets/img/resume/close.svg" alt="delete">
                      </button>
                    </div>
                  </div>
                </div>
                <!-- /.tag-input -->
                <div class="vabout-info vabout-info-vak">
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Название судна:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">EVER GIVEN</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Тип судна:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">Контейнеровоз</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">DWT (t) - валовая вместимость:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">199 489</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Длина</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">399 m / 1309 ft</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">IMO:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">9811000</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->

                  <div class="vabout-item">
                    <div class="vabout-subtitle">Год постройки:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">2018</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->

                  <div class="vabout-item">
                    <div class="vabout-subtitle">kW - двигательная установка:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">-</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->

                  <div class="vabout-item">
                    <div class="vabout-subtitle">Ширина:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">59 m / 194 ft</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                </div>
                <!-- /.vabout-info -->


                <div class="resume-contact__second">
                  <label class="custom-checkbox">
                    <input type="checkbox" checked="">
                    <span class="checkmark"></span>
                    По окончании публикации, добавить это судно в список <a href="#">«Мои суда»</a>
                  </label>
                </div>

              </div>
              <!-- /.sudno-info -->

              <div class="sudno-end">
                <img src="assets/img/sudno/icon-end.png" alt="image" class="sudno-end__icon">
                <div class="sudno-end__text">
                  Данное IMO/судно уже добавлено в ваш список «Мои суда»<br>
                  Воспользуйтесь функционалом <a class="sudno-end__link">Выбрать судно из списка «Мои суда»</a>
                </div>
                <!-- /.sudno-end__text -->
              </div>
              <!-- /.sudno-end -->
            </div>
            <!-- /.sudno-content -->
          </div>
          <!-- /.sudno-group-item -->
          <div class="sudno-group-item">
            <div @click="tab1=false,tab2=false,tab3=true" class="sudno-top" :class="{ sactive: tab3 }">
              <div class="sudno-top__text">Добавить судно в ручную</div>
              <!-- /.sudno-top__text -->
              <img src="assets/img/sudno/white-cursor.svg" alt="image" class="sudno-top__img">
            </div>
            <!-- /.sudno-top -->
            <div v-if="tab3" class="sudno-content" :class="{ active: tab3 }">
              <div class="sudno-info">
                <div class="sudno-info__top">
                  <h3 class="sudno-info__title">
                    Добавить судно в ручную
                  </h3>
                  <!-- /.sudno-info__title -->
                  <div class="sudno-info__check">
                    <img src="assets/img/sudno/green.svg" alt="image" class="sudno-info__icon">
                    <div class="sudno-info__text">
                      Данные заполнены
                    </div>
                    <!-- /.sudno-info__text -->
                  </div>
                  <!-- /.sudno-info__check -->
                </div>
                <!-- /.sudno-info__top -->
                <div class="suda-item__text">
                  Заполните данные по судну, которого нет в нашей базе. После публикации, объявление будет скрыто в ожидании проверки данных нашими
                  сотрудниками. В соответствиями с правилами сайта такая проверка будет занимать не более 24 часов.
                  <br>
                  <a class="suda-item__link">Уточнить характеристики судна вы можете по этой ссылке.</a>
                </div>


                <div class="vabout-info vabout-info-vak modal-vabout modal-vabout__two modal-vabout__line">
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Название судна:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">EVER GIVEN</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">IMO судна:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">9811000</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                </div>
                <div class="vabout-info vabout-info-vak modal-vabout modal-vabout__line">

                  <div class="vabout-item">
                    <div class="vabout-subtitle">Тип судна:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">Контейнеровоз</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Год постройки:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">2018</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">DWT (t) - валовая вместимость:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">199 489</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">kW - двигательная установка:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">-</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Длина</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">399 m / 1309 ft</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->


                  <div class="vabout-item">
                    <div class="vabout-subtitle">Ширина:</div>
                    <!-- /.vabout-subtitle -->
                    <div class="vabout-subtext">59 m / 194 ft</div>
                    <!-- /.vabout-subtext -->
                  </div>
                  <!-- /.vabout-item -->
                </div>

                <div class="resume-contact__second">
                  <label class="custom-checkbox">
                    <input type="checkbox" checked="">
                    <span class="checkmark"></span>
                    По окончании публикации, добавить это судно в список <a href="#">«Мои суда»</a>
                  </label>
                </div>

              </div>
              <!-- /.sudno-info -->

              <div class="sudno-end">
                <img src="assets/img/sudno/icon-end.png" alt="image" class="sudno-end__icon">
                <div class="sudno-end__text">
                  Данное IMO/судно уже зарегистрировано в нашей базе «Морского флота».<br>
                  Воспользуйтесь функционалом Выбрать судно из списка «Морского флота»
                </div>
                <!-- /.sudno-end__text -->
              </div>
              <!-- /.sudno-end -->
            </div>
            <!-- /.sudno-content -->
          </div>
          <!-- /.sudno-group-item -->
        </div>
        <!-- /.sudno-group -->





        <h2 class="with-subtitle">Контактная информация вакансий:</h2>
        <div class="resume-grid col2 vak-edit-contact">
          <div class="input">
            <label for="">ФИО контактного лица</label>
            <input type="text" value="Иванов Иван Иванович" placeholder="">
          </div>
          <div class="input">
            <label for="">E-mail</label>
            <input type="text" value="ivanov@company.ru" placeholder="">
          </div>
          <div class="input">
            <label for="">Телефон №1</label>
            <input type="text" value="+7 912 863 89 41" placeholder="+7 812 777 77 77">
          </div>
          <div class="input">
            <label for="">Телефон №2</label>
            <input type="text" value="" placeholder="+7 812 777 77 77">
          </div>
        </div>
      </div>

    </main>


    <div class="resume-buttons sudno-buttons">
      <button class="primary">Сохранить</button>
      <button class="secondary">Сохранить в черновиках</button>
      <button class="secondary">Сбросить</button>
    </div>
  </NuxtLayout>
</template>

<script>
  export default {
    data() {
      return {
        tab1: false,
        tab2: false,
        tab3: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sudno-top.sactive {
    display: none;
  }
</style>
