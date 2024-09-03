<template>
    <NuxtLayout name="default-hero">
        <div class="main cabinet">
            <div>
                <AfHeaderColor/>
            </div>
            <section id="resume">
                <div class="container">
                    <div class="tabs">
                        <div class="tab-header">
                            <div
                                    class="tab-label"
                                    :class="{ active: activeTab === 'company' }"
                                    @click="setActiveTab('company')"
                            >
                                О компании
                            </div>
                            <div
                                    class="tab-label"
                                    :class="{ active: activeTab === 'ships' }"
                                    @click="setActiveTab('ships')"
                            >
                                Мои суда
                            </div>
                            <div
                                    class="tab-label"
                                    :class="{ active: activeTab === 'settings' }"
                                    @click="setActiveTab('settings')"
                            >
                                Другие настройки
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-body" v-show="activeTab === 'company'">
                    <div class="container">
                        <h1 class="title-none">О компании</h1>

                        <div class="resume-main resume-main-margin">
                            <div class="resume-avatar">
                                <div class="bordered">
                                    <img src="assets/img/company/logo-color-png.png" alt="avatar"/>
                                </div>
                            </div>
                            <div>
                                <h2 style="margin: 0 0 20px">Основные данные:</h2>
                                <div class="resume-grid col2">
                                    <div class="input">
                                        <label for="">Название компании</label>
                                        <input type="text" value="Orion Star Group"/>
                                    </div>

                                    <div class="input">
                                        <label for="">ИНН компании</label>
                                        <input type="text" value="7736340111"/>
                                    </div>

                                    <div class="input">
                                        <label for="">Адрес компании</label>
                                        <input type="text" value="Россия, Владивосток"/>
                                    </div>

                                    <div class="resume-content-all">
                                        <h2 style="margin: 0">Контактная информация вакансий:</h2>
                                        <p>
                                            Информация, которая будет автоматически заполняться при создании
                                            вакансии. Принявшие предложение о вакансии моряки, будут видеть
                                            данную информацию.
                                        </p>
                                    </div>

                                    <div class="input">
                                        <label for="">ФИО контактного лица</label>
                                        <input type="text" value="Иванов Иван Иванович"/>
                                    </div>

                                    <div class="input">
                                        <label for="">E-mail</label>
                                        <input type="text" value="manager@mail.ru"/>
                                    </div>

                                    <div class="input">
                                        <label for="">Телефон №1</label>
                                        <input type="text" value="+7 912 863 89 41"/>
                                    </div>

                                    <div class="input">
                                        <label for="">Телефон №2</label>
                                        <input type="text" value="+7 812 777 77 77"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="resume-buttons">
                        <button class="primary">Сохранить</button>
                        <button class="secondary">Сбросить</button>
                    </div>
                </div>
                <div class="tab-body" v-show="activeTab === 'ships'">
                    <div class="container">
                        <div class="suda">
                            <div class="suda-top">
                                <div class="suda-top__item js-open-modal" @click="toggleModal('existingship')">
                                    <div class="suda-top__plus">+</div>
                                    <!-- /.suda-top__plus -->
                                    <div class="suda-top__content">
                                        <div class="suda-top__title">
                                            Добавить судно из «Морского флота»
                                        </div>
                                        <!-- /.suda-top__title -->
                                        <div class="suda-top__text">
                                            Выберите судно из нашей базы данных
                                        </div>
                                        <!-- /.suda-top__text -->
                                    </div>
                                    <!-- /.suda-top__content -->
                                </div>
                                <!-- /.suda-top__item -->
                                <div class="suda-top__item js-open-modal" @click="toggleModal('newship')">
                                    <div class="suda-top__plus">+</div>
                                    <!-- /.suda-top__plus -->
                                    <div class="suda-top__content">
                                        <div class="suda-top__title">
                                            Добавить судно в ручную
                                        </div>
                                        <!-- /.suda-top__title -->
                                        <div class="suda-top__text">
                                            Заполните данные по судну, которого нет в нашей базе
                                        </div>
                                        <!-- /.suda-top__text -->
                                    </div>
                                    <!-- /.suda-top__content -->
                                </div>
                                <!-- /.suda-top__item -->
                            </div>
                            <!-- /.suda-top -->


                            <div class="suda-part">
                                <h3 class="suda-title">
                                    Мои суда:
                                </h3>
                                <!-- /.suda-title -->

                                <div class="suda-table-block">
                                    <table class="suda-table">
                                        <tbody>
                                        <tr class="suda-tr">
                                            <td class="suda-td">
                                                <div class="suda-td__number">1</div>
                                                <!-- /.suda-td__number -->
                                            </td>
                                            <!-- /.suda-td -->
                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Судно:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        НИКОЛАЙ ПСОМИАДИ
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">IMO</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        8858439
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Тип судна:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        Генгруз
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->


                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Год постройки:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        1986
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->
                                            <td class="suda-td">
                                                <div @click="toggleModal('shipinfo')"
                                                     class="vacancy__button red js-open-modal" data-modal="5"><img
                                                        src="assets/img/dop-page/red-info.svg" alt="">
                                                    Подробнее
                                                </div>
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="vacancy__button red"><img src="assets/img/suda/delete.svg"
                                                                                      alt="">
                                                    Удалить
                                                </div>
                                            </td>
                                            <!-- /.suda-td -->
                                        </tr>
                                        <!-- /.suda-tr -->

                                        <tr class="suda-tr">
                                            <td class="suda-td">
                                                <div class="suda-td__number">2</div>
                                                <!-- /.suda-td__number -->
                                            </td>
                                            <!-- /.suda-td -->
                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Судно:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        НИКОЛАЙ ПСОМИАДИ
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">IMO</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        8858439
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Тип судна:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        Генгруз
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->


                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Год постройки:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        1986
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->
                                            <td class="suda-td">
                                                <div @click="toggleModal('shipinfo')"
                                                     class="vacancy__button red js-open-modal" data-modal="5"><img
                                                        src="assets/img/dop-page/red-info.svg" alt="">
                                                    Подробнее
                                                </div>
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="vacancy__button red"><img src="assets/img/suda/delete.svg"
                                                                                      alt="">
                                                    Удалить
                                                </div>
                                            </td>
                                            <!-- /.suda-td -->
                                        </tr>
                                        <!-- /.suda-tr -->

                                        <tr class="suda-tr">
                                            <td class="suda-td">
                                                <div class="suda-td__number">3</div>
                                                <!-- /.suda-td__number -->
                                            </td>
                                            <!-- /.suda-td -->
                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Судно:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        НИКОЛАЙ ПСОМИАДИ
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">IMO</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        8858439
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Тип судна:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        Генгруз
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->


                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Год постройки:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        1986
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->
                                            <td class="suda-td">
                                                <div @click="toggleModal('shipinfo')"
                                                     class="vacancy__button red js-open-modal" data-modal="5"><img
                                                        src="assets/img/dop-page/red-info.svg" alt="">
                                                    Подробнее
                                                </div>
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="vacancy__button red"><img src="assets/img/suda/delete.svg"
                                                                                      alt="">
                                                    Удалить
                                                </div>
                                            </td>
                                            <!-- /.suda-td -->
                                        </tr>
                                        <!-- /.suda-tr -->
                                        </tbody>
                                    </table>
                                    <!-- /.suda-table -->

                                </div>
                                <!-- /.suda-table-block -->
                            </div>
                            <!-- /.suda-part -->


                            <div class="suda-part">
                                <h3 class="suda-title">
                                    Суда на модерации:
                                </h3>
                                <!-- /.suda-title -->

                                <div class="suda-item">
                                    <img src="assets/img/suda/icon.png" alt="image" class="suda-item__img">
                                    <div class="suda-item__text">
                                        Судна, которых нет в нашей базе, проходят модерацию в течении 24 часов. Наши
                                        специалисты проверят информацию,
                                        а при неточностях, проведут изменения. В случае возниконвения вопросов
                                        пожалуйста <a
                                            class="suda-item__link">воспользуйтесь этой формой.</a>
                                    </div>
                                    <!-- /.suda-item__text -->
                                </div>
                                <!-- /.suda-item -->
                                <div class="suda-table-block">
                                    <table class="suda-table">
                                        <tbody>
                                        <tr class="suda-tr">
                                            <td class="suda-td">
                                                <div class="suda-td__number">1</div>
                                                <!-- /.suda-td__number -->
                                            </td>
                                            <!-- /.suda-td -->
                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Судно:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        НИКОЛАЙ ПСОМИАДИ
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">IMO</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        8858439
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Тип судна:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        Генгруз
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->


                                            <td class="suda-td">
                                                <div class="suda-td__item">
                                                    <div class="suda-td__subtitle">Год постройки:</div>
                                                    <!-- /.suda-td__subtitle -->
                                                    <div class="suda-td__text">
                                                        1986
                                                    </div>
                                                    <!-- /.suda-td__text -->
                                                </div>
                                                <!-- /.suda-td__item -->
                                            </td>
                                            <!-- /.suda-td -->
                                            <td class="suda-td">
                                                <div @click="toggleModal('shipinfo')"
                                                     class="vacancy__button red js-open-modal" data-modal="5"><img
                                                        src="assets/img/dop-page/red-info.svg" alt="">
                                                    Подробнее
                                                </div>
                                            </td>
                                            <!-- /.suda-td -->

                                            <td class="suda-td">
                                                <div class="vacancy__button red"><img src="assets/img/suda/delete.svg"
                                                                                      alt="">
                                                    Отменить<br>
                                                    запрос
                                                </div>
                                            </td>
                                            <!-- /.suda-td -->
                                        </tr>
                                        <!-- /.suda-tr -->

                                        </tbody>
                                    </table>
                                    <!-- /.suda-table -->

                                </div>
                                <!-- /.suda-table-block -->
                            </div>
                            <!-- /.suda-part -->
                        </div>
                    </div>
                    <div class="resume-buttons">
                        <button class="primary">Сохранить</button>
                        <button class="secondary">Сбросить</button>
                    </div>
                </div>
                <div class="tab-body" v-show="activeTab === 'settings'">
                    <div class="container">
                        <h1>Контактные данные аккаунта и уведомления</h1>

                        <div class="resume-grid col2 resume-contact-setting">
                            <div class="resume-contact">
                                <div class="resume-contact__icon">
                                    <img src="assets/img/resume/icon-phone.png" alt="phone"/>
                                </div>
                                <div class="resume-contact__content completed">
                                    +7 812 777 77 77
                                    <img src="assets/img/resume/check.svg" alt="done"/>
                                </div>
                            </div>
                            <div class="resume-contact__second">
                                <label class="custom-checkbox">
                                    <input type="checkbox" checked/>
                                    <span class="checkmark"></span>
                                    Присылайте мне <a href="#">уведомления на телефон</a>
                                </label>
                            </div>

                            <div class="resume-contact">
                                <div class="resume-contact__icon">
                                    <img src="assets/img/resume/icon-mail.png" alt="phone"/>
                                </div>
                                <div class="resume-contact__content pending">
                                    captain@mail.ru
                                    <a href="#">Подвтердить</a>
                                </div>
                            </div>
                            <div class="resume-contact__second">
                                <label class="custom-checkbox">
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                    Присылайте мне <a href="#">уведомления на почту</a>
                                </label>
                            </div>

                            <div class="resume-contact">
                                <div class="resume-contact__icon">
                                    <img src="assets/img/resume/icon-tg.png" alt="phone"/>
                                </div>
                                <div class="resume-contact__content empty">Подключить Telegram</div>
                            </div>
                            <div class="resume-contact__second">
                                <label class="custom-checkbox">
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                    Присылайте мне <a href="#">уведомления в Telegram</a>
                                </label>
                            </div>
                        </div>

                        <h2 class="with-subtitle">Рассылка</h2>

                        <label class="custom-checkbox">
                            <input type="checkbox" checked/>
                            <span class="checkmark"></span>
                            Хочу получать <a href="#">рассылку о новых моряках</a>, по должностям,
                            соответствующих актуальным (действующим)<br/>
                            вакансиям компании
                        </label>

                        <h2>Безопасность</h2>

                        <div class="resume-password">
                            <div class="resume-password__input">
                                <div class="resume-password__icon">
                                    <img src="assets/img/resume/icon-pass.png" alt="pass"/>
                                </div>
                                <input type="password"/>
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
        </div>
    </NuxtLayout>
</template>

<script setup>
    import api from "@/api/api";

    import {useModalStore} from "~/store/modal";

    const {closeModal, toggleModal} = useModalStore();

    const activeTab = ref("company");
    const profile = ref(null);

    function setActiveTab(tab) {
        activeTab.value = tab;
    }

    async function getProfile() {
        try {
            const {data} = await api.get(`/profile`);
            profile.value = data;
        } catch (error) {
            console.log(error);
        }
    }

    onMounted(() => {
        document.body.classList.add('bg-white');
        getProfile();
    });

</script>

<style lang="scss" scoped>
    .tab-label.tactive {
        border-bottom: 4px solid #3b45a9;
        color: #3b45a9;
    }

    .tab-body {
        display: block;
    }
</style>