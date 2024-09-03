<template>
    <NuxtLayout name="admin" style="background-color: #fff">
        <main class="main cabinet">
            <section id="resume">
                <div class="container">
                    <div class="tabs">
                        <div class="tab-header">
                            <div
                                    class="tab-label"
                                    :class="{ active: activeTab === 1 }"
                                    @click="activeTab = 1"
                            >
                                Резюме
                            </div>
                            <div
                                    class="tab-label"
                                    :class="{ active: activeTab === 2 }"
                                    @click="activeTab = 2"
                            >
                                Настройки профиля
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="activeTab === 1" class="tab-body">
                    <div class="container">
                        <h1>Резюме</h1>
                        <div class="resume-main">
                            <div class="resume-avatar">
                                <img src="assets/img/resume/avatar.png" alt="avatar" />
                            </div>
                            <div class="resume-grid">
                                <AfInput label="Фамилия" id="lastname_input" v-model="resume.last_name" />
                                <AfInput label="Имя" id="firstname_input" v-model="resume.first_name" />
                                <AfInput label="Отчество" id="father_input" v-model="resume.patronymic" />
                                <AfInput
                                        label="Страна (где находитесь)"
                                        id="country_input"
                                        v-model="resume.country"
                                />
                                <AfInput label="Регион" id="region_input" v-model="resume.region" />
                                <AfInput label="Город" id="city_input" v-model="resume.city" />
                                <AfInput
                                        label="Дата рождения"
                                        id="date_input"
                                        type="date"
                                        v-model="resume.patronymic"
                                />
                                <AfInput
                                        label="Контактный телефон"
                                        id="tel_input"
                                        type="tel"
                                        v-model="resume.phone_number"
                                />
                            </div>
                        </div>
                        <AfDropDox
                                style="margin-top: 30px"
                                v-model="resume.worked"
                                :options-list="seilorList"
                                title="Должность, которую рассматриваете (выбор из списка)"
                        />
                        <AfDropDox
                                style="margin-top: 30px"
                                v-model="resume.positions"
                                :options-list="professionalList"
                                title="Работал на судах (выбрать типа судов из списка)"
                        />
                        <h2>Основные документы:</h2>
                        <div class="docs-block-table">
                            <div class="docs">
                                <div class="docs__head">Название:</div>
                                <div class="docs__head">Действительно до:</div>
                                <div class="docs__label">Заграничный паспорт</div>
                                <div class="docs__value alert">
                                    <div class="date">18.10.23</div>
                                    <div class="info">
                                        <img src="assets/img/resume/alert.svg" alt="" />
                                        <span>Срок действия истек! Заменить можно <a href="#">здесь</a></span>
                                    </div>
                                </div>
                                <div class="docs__label">Удостоверение личности моряка</div>
                                <div class="docs__value">
                                    <input type="text" placeholder="Введите данные" />
                                </div>
                                <div class="docs__label">Диплом/ Свидетельство</div>
                                <div class="docs__value">
                                    <div class="date">24.10.24</div>
                                </div>
                                <div class="docs__label">Начальная подготовка по безопасности</div>
                                <div class="docs__value">
                                    <input type="text" placeholder="Введите данные" />
                                </div>
                                <div class="docs__label">Назначенные обязанности по охране</div>
                                <div class="docs__value">
                                    <input type="text" placeholder="Введите данные" />
                                </div>
                                <div class="docs__label">Специалист по шлюпкам и плотам</div>
                                <div class="docs__value">
                                    <input type="text" placeholder="Введите данные" />
                                </div>
                            </div>
                            <div class="docs">
                                <div class="docs__head">Название:</div>
                                <div class="docs__head">Действительно до:</div>
                                <div class="docs__label">Борьба с пожаром по расширенной программе</div>
                                <div class="docs__value">
                                    <input type="text" placeholder="Введите данные" />
                                </div>
                                <div class="docs__label">Оказание первой медицинской помощи</div>
                                <div class="docs__value">
                                    <input type="text" placeholder="Введите данные" />
                                </div>
                                <div class="docs__label">Предотвращение загрязнения моря</div>
                                <div class="docs__value">
                                    <input type="text" placeholder="Введите данные" />
                                </div>
                                <div class="docs__label">Танкерное свидетельство</div>
                                <div class="docs__value">
                                    <input type="text" placeholder="Введите данные" />
                                </div>
                                <div class="docs__label">Охрана труда</div>
                                <div class="docs__value">
                                    <input type="text" placeholder="Введите данные" />
                                </div>
                                <div class="docs__label">Медицинская комиссия</div>
                                <div class="docs__value">
                                    <input type="text" placeholder="Введите данные" />
                                </div>
                            </div>
                        </div>
                        <div class="docs-block-table">
                            <div class="docs-block-item">
                                <h2>
                                    <div class="check">
                                        <img src="assets/img/resume/check.svg" alt="check" />
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
                                            <img src="assets/img/resume/alert.svg" alt="" />
                                            <span
                                            >Срок действия истек! Заменить можно <a href="#">здесь</a></span
                                            >
                                        </div>
                                    </div>
                                    <div class="docs__label">ЭКНИС</div>
                                    <div class="docs__value">
                                        <input type="text" placeholder="Введите данные" />
                                    </div>
                                    <div class="docs__label">РЛТ</div>
                                    <div class="docs__value">
                                        <div class="date">24.10.24</div>
                                    </div>
                                    <div class="docs__label">САРП</div>
                                    <div class="docs__value">
                                        <input type="text" placeholder="Введите данные" />
                                    </div>
                                </div>
                            </div>
                            <div class="docs-block-item">
                                <h2>
                                    <div class="check">
                                        <img src="assets/img/resume/check.svg" alt="check" />
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
                                            <img src="assets/img/resume/alert.svg" alt="" />
                                            <span
                                            >Срок действия истек! Заменить можно <a href="#">здесь</a></span
                                            >
                                        </div>
                                    </div>
                                    <div class="docs__label">Военно-морская подготовка</div>
                                    <div class="docs__value">
                                        <input type="text" placeholder="Введите данные" />
                                    </div>
                                    <div class="docs__label">Транспортная безопасность</div>
                                    <div class="docs__value">
                                        <div class="date">24.10.24</div>
                                    </div>
                                    <div class="docs__label">Танкерное свидетельство</div>
                                    <div class="docs__value">
                                        <input type="text" placeholder="Введите данные" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 class="with-subtitle">Опыт работы:</h2>
                        <div class="cabinet-subtitle">
                            <img src="assets/img/resume/info.png" alt="info" />
                            Система автоматически сортирует вакансии по периоду работы, в порядке
                            убывания, от сегоднянешго (последнего) к годам ранее. Заполняйте информацию,
                            в удобном для Вас порядке.
                        </div>
                        <AddWork v-model:form="experience" />
                        <h2 class="with-subtitle">Ваши файлы:</h2>
                        <div class="cabinet-subtitle">
                            Вы можете прикрепить дополнительную информацию, к примеру файл с резюме, эти
                            файлы будут видны работодателю.
                        </div>
                        <AddFiles v-model:files="filesData" />
                        <h2 v-if="resumeData.name || resumeData.link" class="with-subtitle">
                            Ваше резюме:
                        </h2>
                        <div v-if="resumeData.name || resumeData.link" class="cabinet-subtitle">
                            На основе заполненных Вами данных, мы сформировали для Вас резюме, которое
                            вы можете скачать в формате Word.
                        </div>
                        <div class="files" v-if="resumeData.name || resumeData.link">
                            <a :href="resumeData.link" download>
                                <div class="file">
                                    <div class="file__icon">
                                        <img src="assets/img/resume/word.png" alt="doc" />
                                    </div>
                                    <div class="file__label">{{ resumeData.name }}</div>
                                    <div class="file__action">
                                        <img
                                                src="assets/img/resume/delete.png"
                                                alt="delete"
                                                @click.prevent="removeResumeDoc"
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="resume-buttons">
                        <button class="primary">Сохранить</button>
                        <button class="secondary">Сбросить</button>
                    </div>
                </div>

                <div v-if="activeTab === 2" class="tab-body">
                    <div class="container">
                        <h1>Контактные данные и уведомления</h1>
                        <div class="resume-grid col2 resume-contact-setting">
                            <div class="resume-contact">
                                <div class="resume-contact__icon">
                                    <img src="assets/img/resume/icon-phone.png" alt="phone" />
                                </div>
                                <div class="resume-contact__content completed">
                                    +7 812 777 77 77
                                    <img src="assets/img/resume/check.svg" alt="done" />
                                </div>
                            </div>
                            <div class="resume-contact__second">
                                <label class="custom-checkbox">
                                    <input type="checkbox" checked />
                                    <span class="checkmark"></span>
                                    Присылайте мне <a href="#">уведомления на телефон</a>
                                </label>
                            </div>
                            <div class="resume-contact">
                                <div class="resume-contact__icon">
                                    <img src="assets/img/resume/icon-mail.png" alt="phone" />
                                </div>
                                <div class="resume-contact__content pending">
                                    captain@mail.ru
                                    <a href="#">Подтвердить</a>
                                </div>
                            </div>
                            <div class="resume-contact__second">
                                <label class="custom-checkbox">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                    Присылайте мне <a href="#">уведомления на почту</a>
                                </label>
                            </div>
                            <div class="resume-contact">
                                <div class="resume-contact__icon">
                                    <img src="assets/img/resume/icon-vk.png" alt="phone" />
                                </div>
                                <div class="resume-contact__content empty">Подключить Вконтакте</div>
                            </div>
                            <div class="resume-contact__second"></div>
                            <div class="resume-contact">
                                <div class="resume-contact__icon">
                                    <img src="assets/img/resume/icon-tg.png" alt="phone" />
                                </div>
                                <div class="resume-contact__content empty">Подключить Telegram</div>
                            </div>
                            <div class="resume-contact__second">
                                <label class="custom-checkbox">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                    Присылайте мне <a href="#">уведомления в Telegram</a>
                                </label>
                            </div>
                            <div class="resume-contact__second"></div>
                        </div>
                        <h2 class="with-subtitle">Рассылка</h2>
                        <label class="custom-checkbox">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                            Хочу получать <a href="#">рассылку по новым вакансиям</a> для выбранных
                            должностей
                        </label>
                        <h2>Безопасность</h2>
                        <div class="resume-password">
                            <div class="resume-password__input">
                                <div class="resume-password__icon">
                                    <img src="assets/img/resume/icon-pass.png" alt="pass" />
                                </div>
                                <input type="password" />
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
        </main>
    </NuxtLayout>
</template>

<script setup>
    import { ref } from "vue";
    import api from "@/api/api";
    import AfInput from "./../../components/uikit/AfInput.vue";
    import AfDropDox from "./../../components/uikit/AfDropDox.vue";
    import AddWork from "~/components/resume/AddWork.vue";
    import AddFiles from "~/components/resume/AddFiles.vue";

    const resume = ref(null);
    const filesData = ref([]);
    const resumeData = ref({
        name: "Резюме Иванов Иван Иванович.doc",
        link: "/",
    });
    const experience = ref([
        { owner: "", type: "", name: "", position: "", period: "" },
        { owner: "", type: "", name: "", position: "", period: "" },
    ]);

    const professionalList = ref([
        "Капитан",
        "Старший помощник капитана",
        "Матрос",
        "Боцман",
        "Штурман",
    ]);
    const seilorList = ref([
        "Контейнеровозы",
        "Танкеры",
        "Буксиры",
        "Ледоколы",
        "Пассажирские",
        "Рыболовные",
        "Военные",
    ]);

    const positions = ref([]);
    const worked = ref([]);

    const activeTab = ref(1);

    function removeResumeDoc(index) {
        resumeData.value = ref({});
    }

    async function getResume() {
        const { data } = await api.get("/resume");
        resume.value = data;
        console.log(resume.value);
    }

    onMounted(async () => {
        await getResume();
    });
</script>
