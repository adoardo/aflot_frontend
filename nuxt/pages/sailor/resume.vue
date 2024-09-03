<template>
  <NuxtLayout name="default-hero">
    <div style="background-color: #fff">
      <AfHeaderColor />
    </div>
    <section id="resume" class="main cabinet">
      <div class="container">
        <div class="tabs">
          <div class="tab-header">
            <div class="tab-label" @click="sr=true,sc=false" :class="{ tactive: sr }">Резюме</div>
            <div class="tab-label" @click="sr=false,sc=true" :class="{ tactive: sc }">Настройки профиля</div>
          </div>
        </div>
      </div>

      <div class="tab-body" v-if="sr" data-id="1" >
        <div class="container">
          <h1>
            Резюме
          </h1>

          <div class="resume-main">

            <div class="resume-avatar">
              <img src="assets/img/resume/avatar.png" alt="avatar">
            </div>
            <div class="resume-grid">
              <div class="input">
                <label for="">Фамилия</label>
                <input type="text" value="Иванов">
              </div>

              <div class="input">
                <label for="">Имя</label>
                <input type="text" value="Иван">
              </div>

              <div class="input">
                <label for="">Отчество</label>
                <input type="text" value="Иванович">
              </div>

              <div class="input">
                <label for="">Страна (где находитесь)</label>
                <input type="text" value="Россия">
              </div>

              <div class="input">
                <label for="">Регион</label>
                <input type="text" value="Приморский край">
              </div>

              <div class="input">
                <label for="">Город</label>
                <input type="text" value="Владивосток">
              </div>

              <div class="input">
                <label for="">Дата рождения</label>
                <input type="date" value="1998-10-12">
              </div>

              <div class="input">
                <label for="">Контактный телефон</label>
                <input type="text" value="+7 812 777 77 77">
              </div>
            </div>
          </div>

          <div class="tag-input" style="margin-top: 30px;">
            <div class="tag-input__label">Должность, которую рассматриваете (выбор из списка)</div>
            <div class="tag-input__list">
              <div class="tag-input__item">
                Капитан
                <button class="tag-input__delete">
                  <img src="assets/img/resume/close.svg" alt="delete">
                </button>
              </div>
              <div class="tag-input__item">
                Старший помощник капитана
                <button class="tag-input__delete">
                  <img src="assets/img/resume/close.svg" alt="delete">
                </button>
              </div>
              <div class="tag-input__add">
                <span>
                  +
                </span>
              </div>
            </div>
          </div>

          <div class="tag-input" style="margin-top: 30px;">
            <div class="tag-input__label">Работал на судах (выбрать типа судов из списка)</div>
            <div class="tag-input__list">
              <div class="tag-input__item">
                Контейнеровозы
                <button class="tag-input__delete">
                  <img src="assets/img/resume/close.svg" alt="delete">
                </button>
              </div>
              <div class="tag-input__item">
                Танкеры
                <button class="tag-input__delete">
                  <img src="assets/img/resume/close.svg" alt="delete">
                </button>
              </div>
              <div class="tag-input__item">
                Буксиры
                <button class="tag-input__delete">
                  <img src="assets/img/resume/close.svg" alt="delete">
                </button>
              </div>
              <div class="tag-input__item">
                Ледоколы
                <button class="tag-input__delete">
                  <img src="assets/img/resume/close.svg" alt="delete">
                </button>
              </div>
              <div class="tag-input__item">
                Пассажирские
                <button class="tag-input__delete">
                  <img src="assets/img/resume/close.svg" alt="delete">
                </button>
              </div>
              <div class="tag-input__item">
                Рыболовные
                <button class="tag-input__delete">
                  <img src="assets/img/resume/close.svg" alt="delete">
                </button>
              </div>
              <div class="tag-input__item">
                Военные
                <button class="tag-input__delete">
                  <img src="assets/img/resume/close.svg" alt="delete">
                </button>
              </div>
              <div class="tag-input__add">
                <span>
                  +
                </span>
              </div>
            </div>
          </div>

          <h2>Основные документы:</h2>
          <div class="docs-block-table">
            <div class="docs">
              <div class="docs__head">Название:</div>
              <div class="docs__head">Действительно до:</div>
              <div class="docs__label">Заграничный паспорт</div>
              <div class="docs__value alert">
                <div class="date">18.10.23</div>
                <div class="info">
                  <img src="assets/img/resume/alert.svg" alt="">
                  <span>Срок действия истек! Заменить можно <a href="#">здесь</a></span>
                </div>
              </div>

              <div class="docs__label">Удостоверение личности моряка</div>
              <div class="docs__value">
                <input type="text" placeholder="Введите данные">
              </div>

              <div class="docs__label">Диплом/ Свидетельство</div>
              <div class="docs__value">
                <div class="date">24.10.24</div>
              </div>

              <div class="docs__label">Начальная подготовка по безопасности</div>
              <div class="docs__value">
                <input type="text" placeholder="Введите данные">
              </div>

              <div class="docs__label">Назначенные обязанности по охране</div>
              <div class="docs__value">
                <input type="text" placeholder="Введите данные">
              </div>

              <div class="docs__label">Специалист по шлюпкам и плотам</div>
              <div class="docs__value">
                <input type="text" placeholder="Введите данные">
              </div>


            </div>




            <div class="docs">
              <div class="docs__head">Название:</div>
              <div class="docs__head">Действительно до:</div>





              <div class="docs__label">Борьба с пожаром по расширенной программе</div>
              <div class="docs__value">
                <input type="text" placeholder="Введите данные">
              </div>

              <div class="docs__label">Оказание первой медицинской помощи</div>
              <div class="docs__value">
                <input type="text" placeholder="Введите данные">
              </div>

              <div class="docs__label">Предотвращение загрязнения моря</div>
              <div class="docs__value">
                <input type="text" placeholder="Введите данные">
              </div>

              <div class="docs__label">Танкерное свидетельство</div>
              <div class="docs__value">
                <input type="text" placeholder="Введите данные">
              </div>

              <div class="docs__label">Охрана труда</div>
              <div class="docs__value">
                <input type="text" placeholder="Введите данные">
              </div>

              <div class="docs__label">Медицинская комиссия</div>
              <div class="docs__value">
                <input type="text" placeholder="Введите данные">
              </div>
            </div>
          </div>
          <!-- /.docs-block-table -->

          <div class="docs-block-table">
            <div class="docs-block-item">
              <h2>
                <div class="check">
                  <img src="assets/img/resume/check.svg" alt="check">
                </div>
                Документы судоводителей:
              </h2>

              <div class="docs">
                <div class="docs__head">Название:</div>
                <div class="docs__head">Действительно до:</div>

                <div class="docs__label">ГМССБ</div>
                <div class="docs__value alert">
                  <div class="date">18.10.23</div>
                  <div class="info">
                    <img src="assets/img/resume/alert.svg" alt="">
                    <span>Срок действия истек! Заменить можно <a href="#">здесь</a></span>
                  </div>
                </div>

                <div class="docs__label">ЭКНИС</div>
                <div class="docs__value">
                  <input type="text" placeholder="Введите данные">
                </div>

                <div class="docs__label">РЛТ</div>
                <div class="docs__value">
                  <div class="date">24.10.24</div>
                </div>

                <div class="docs__label">САРП</div>
                <div class="docs__value">
                  <input type="text" placeholder="Введите данные">
                </div>

              </div>
            </div>
            <div class="docs-block-item">
              <h2>
                <div class="check">
                  <img src="assets/img/resume/check.svg" alt="check">
                </div>
                Дополнительные документы:
              </h2>

              <div class="docs">
                <div class="docs__head">Название:</div>
                <div class="docs__head">Действительно до:</div>

                <div class="docs__label">Изолирующие дыхательные приборы</div>
                <div class="docs__value alert">
                  <div class="date">18.10.23</div>
                  <div class="info">
                    <img src="assets/img/resume/alert.svg" alt="">
                    <span>Срок действия истек! Заменить можно <a href="#">здесь</a></span>
                  </div>
                </div>

                <div class="docs__label">Военно-морская подготовка</div>
                <div class="docs__value">
                  <input type="text" placeholder="Введите данные">
                </div>

                <div class="docs__label">Транспортная безопасность</div>
                <div class="docs__value">
                  <div class="date">24.10.24</div>
                </div>

                <div class="docs__label">Танкерное свидетельство</div>
                <div class="docs__value">
                  <input type="text" placeholder="Введите данные">
                </div>

              </div>
            </div>
          </div>
          <h2 class="with-subtitle">Опыт работы:</h2>

          <div class="cabinet-subtitle">
            <img src="assets/img/resume/info.png" alt="info">
            Система автоматически сортирует вакансии по периоду работы, в порядке убывания, от сегоднянешго (последнего)
            к годам ранее. Заполняйте информацию, в удобном для Вас порядке.
          </div>

          <div class="resume-experience">
            <table>
              <thead>
              <tr>
                <th>Судовладелец</th>
                <th>Тип судна</th>
                <th>Название судна</th>
                <th>Должность</th>
                <th>Период работы</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td data-title="Судовладелец"><input type="text" placeholder="Введите данные"></td>
                <td data-title="Тип судна"><input type="text" placeholder="Введите данные"></td>
                <td data-title="Название судна"><input type="text" placeholder="Введите данные"></td>
                <td data-title="Должность"><input type="text" placeholder="Введите данные"></td>
                <td data-title="Период работы"><input type="text" placeholder="Введите данные"></td>
                <td class="resume-experience__delete">
                  <button>
                    <img src="assets/img/resume/delete.png" alt="delete">
                  </button>
                </td>
              </tr>
              <tr>
                <td data-title="Судовладелец"><input type="text" placeholder="Введите данные"></td>
                <td data-title="Тип судна"><input type="text" placeholder="Введите данные"></td>
                <td data-title="Название судна"><input type="text" placeholder="Введите данные"></td>
                <td data-title="Должность"><input type="text" placeholder="Введите данные"></td>
                <td data-title="Период работы"><input type="text" placeholder="Введите данные"></td>
                <td class="resume-experience__delete">
                  <button>
                    <img src="assets/img/resume/delete.png" alt="delete">
                  </button>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <button class="resume-experience__add">
                    <span>+</span>
                    Добавить место работы
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          <h2 class="with-subtitle">Ваши файлы:</h2>

          <div class="cabinet-subtitle">
            Вы можете прикрепить дополнительную информацию, к примеру файл с резюме, эти файлы будут видны работодателю.
          </div>

          <div class="files">
            <div class="file">
              <div class="file__icon">
                <img src="assets/img/resume/doc.png" alt="doc">
              </div>
              <div class="file__label">Резюме Иванов Иван Иванович.doc</div>
              <div class="file__action">
                <img src="assets/img/resume/delete.png" alt="delete">
              </div>
            </div>

            <div class="file upload">
              <div class="file__icon">
                <img src="assets/img/resume/file.png" alt="file">
              </div>
              <div class="file__label">Загрузить файл</div>
            </div>
          </div>

          <h2 class="with-subtitle">Ваше резюме:</h2>

          <div class="cabinet-subtitle">
            На основе заполненных Вами данных, мы сформировали для Вас резюме, которое вы можете скачать в формате Word.
          </div>

          <div class="files">
            <div class="file">
              <div class="file__icon">
                <img src="assets/img/resume/word.png" alt="doc">
              </div>
              <div class="file__label">Резюме Иванов Иван Иванович.doc</div>
              <div class="file__action">
                <img src="assets/img/resume/delete.png" alt="delete">
              </div>
            </div>
          </div>
        </div>

        <div class="resume-buttons">
          <button class="primary">Сохранить</button>
          <button class="secondary">Сбросить</button>
        </div>
      </div>
      <div class="tab-body" v-if="sc" >
        <div class="container">
          <h1>Контактные данные и уведомления</h1>

          <div class="resume-grid col2 resume-contact-setting">
            <div class="resume-contact">
              <div class="resume-contact__icon">
                <img src="assets/img/resume/icon-phone.png" alt="phone">
              </div>
              <div class="resume-contact__content completed">
                +7 812 777 77 77
                <img src="assets/img/resume/check.svg" alt="done">
              </div>
            </div>
            <div class="resume-contact__second">
              <label class="custom-checkbox">
                <input type="checkbox" checked="">
                <span class="checkmark"></span>
                Присылайте мне <a href="#">уведомления на телефон</a>
              </label>
            </div>

            <div class="resume-contact">
              <div class="resume-contact__icon">
                <img src="assets/img/resume/icon-mail.png" alt="phone">
              </div>
              <div class="resume-contact__content pending">
                captain@mail.ru
                <a href="#">Подвтердить</a>
              </div>
            </div>
            <div class="resume-contact__second">
              <label class="custom-checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
                Присылайте мне <a href="#">уведомления на почту</a>
              </label>
            </div>

            <div class="resume-contact">
              <div class="resume-contact__icon">
                <img src="assets/img/resume/icon-vk.png" alt="phone">
              </div>
              <div class="resume-contact__content empty">
                Подключить Вконтакте
              </div>
            </div>
            <div class="resume-contact__second"></div>

            <div class="resume-contact">
              <div class="resume-contact__icon">
                <img src="assets/img/resume/icon-tg.png" alt="phone">
              </div>
              <div class="resume-contact__content empty">
                Подключить Telegram
              </div>
            </div>
            <div class="resume-contact__second">
              <label class="custom-checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
                Присылайте мне <a href="#">уведомления в Telegram</a>
              </label>
            </div>



          </div>

          <h2 class="with-subtitle">Рассылка</h2>

          <label class="custom-checkbox">
            <input type="checkbox" checked="">
            <span class="checkmark"></span>
            Хочу получать <a href="#">рассылку по новым вакансиям</a> для выбранных должностей
          </label>

          <h2>Безопасность</h2>

          <div class="resume-password">
            <div class="resume-password__input">
              <div class="resume-password__icon">
                <img src="assets/img/resume/icon-pass.png" alt="pass">
              </div>
              <input type="password">
            </div>
            <button>Сменить пароль <strong>⭢</strong></button>
          </div>

        </div>

        <div class="resume-buttons">
          <button class="primary">Сохранить</button>
          <button class="secondary">Сбросить</button>
        </div>
      </div>

    </section>
  </NuxtLayout>
</template>

<script>
  export default {
    data() {
      return {
        sr: true,
        sc: false
      }
    },
    mounted() {
      document.body.classList.add('bg-white');
    }
  }
</script>

<style scoped>
  .tab-label.tactive {
    border-bottom: 4px solid #3b45a9;
    color: #3b45a9;
  }
  .tab-body {
    display: block;
  }
</style>
