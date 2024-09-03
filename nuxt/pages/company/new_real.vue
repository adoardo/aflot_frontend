<template>
    <NuxtLayout name="admin">
        <main class="main cabinet vak-edit">
            <div class="container">
                <div class="flex-title">
                    <h1>Создать новую вакансию:</h1>
                    <div>доступно 3 вакансии</div>
                </div>
                <div class="vak-edit-block">
                    <div class="vak-edit-left">
                        <h2>Основные данные:</h2>
                        <div class="resume-grid col2">
                            <AfDropDox
                                    style="margin-top: -5px"
                                    title="Должность"
                                    v-model="formData.positions"
                                    :options-list="professionalList"
                                    :single="true"
                            />

                            <div class="input">
                                <label for="">Зарплата</label>
                                <div class="input-block-zp">
                                    <input type="number" placeholder="От" v-model="formData.from" />
                                    <input type="number" placeholder="До" v-model="formData.to" />
                                </div>
                            </div>

                            <div class="input">
                                <label for="">Дата посадки:</label>
                                <input type="date" v-model="formData.date" />
                            </div>
                            <div class="input input-date-contract">
                                <label for="contractDuration">Длительность контракта:</label>
                                <select id="contractDuration" v-model="formData.duration">
                                    <option value="">Выберите длительность</option>
                                    <option value="1 месяц">1 месяц</option>
                                    <option value="1-2 месяца">1-2 месяца</option>
                                    <option value="2-3 месяца">2-3 месяца</option>
                                    <option value="3-4 месяца">3-4 месяца</option>
                                    <option value="4-5 месяцев">4-5 месяцев</option>
                                    <option value="5-6 месяцев">5-6 месяцев</option>
                                    <option value="более 6 месяцев">более 6 месяцев</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="vak-sudno-list">
                        <h2 class="with-subtitle">
                            Судно:
                            <AfDropDox
                                    class="custom-tag"
                                    style="margin-top: -5px"
                                    title=""
                                    v-model="formData.navy"
                                    :options-list="seilorList"
                                    :single="true"
                            />
                        </h2>
                        <p>
                            Для добавления коробля, введите IMO или название корабля в строку поиска, а
                            далее, выберите подходящий из списка.
                        </p>
                    </div>
                </div>
                <div class="vabout-info vabout-info-vak">
                    <div class="vabout-item">
                        <div class="vabout-subtitle">Название коробля:</div>
                        <div class="vabout-subtext">EVER GIVEN</div>
                    </div>
                    <div class="vabout-item">
                        <div class="vabout-subtitle">Тип судна:</div>
                        <div class="vabout-subtext">Контейнеровоз</div>
                    </div>
                    <div class="vabout-item">
                        <div class="vabout-subtitle">DWT (t) - валовая вместимость:</div>
                        <div class="vabout-subtext">199 489</div>
                    </div>
                    <div class="vabout-item">
                        <div class="vabout-subtitle">Длина</div>
                        <div class="vabout-subtext">399 m / 1309 ft</div>
                    </div>
                    <div class="vabout-item">
                        <div class="vabout-subtitle">IMO:</div>
                        <div class="vabout-subtext">9811000</div>
                    </div>
                    <div class="vabout-item">
                        <div class="vabout-subtitle">Год постройки:</div>
                        <div class="vabout-subtext">2018</div>
                    </div>
                    <div class="vabout-item">
                        <div class="vabout-subtitle">kW - двигательная установка:</div>
                        <div class="vabout-subtext">-</div>
                    </div>
                    <div class="vabout-item">
                        <div class="vabout-subtitle">Ширина:</div>
                        <div class="vabout-subtext">59 m / 194 ft</div>
                    </div>
                </div>

                <h2 class="with-subtitle">Контактная информация вакансий:</h2>
                <div class="resume-grid col2 vak-edit-contact">
                    <AfInput
                            label="ФИО контактного лица"
                            place="Иванов Иван Иванович"
                            v-model="formData.name"
                    />
                    <AfInput
                            label="E-mail"
                            place="ivanov@company.ru"
                            type="email"
                            v-model="formData.email"
                    />
                    <AfInput
                            label="Телефон №1"
                            place="+7 912 863 89 41"
                            type="tel"
                            v-model="formData.phone1"
                    />
                    <AfInput
                            label="Телефон №2"
                            place="+7 912 863 89 41"
                            type="tel"
                            v-model="formData.phone2"
                    />
                </div>
            </div>
        </main>

        <div class="resume-buttons">
            <button class="primary">Сохранить</button>
            <button class="secondary" @click="removeInfo()" :disabled="isResetDisabled">
                Сбросить
            </button>
        </div>
    </NuxtLayout>
</template>

<script setup>
    import AfInput from "~/components/uikit/AfInput.vue";
    import { useCompanyStore } from "~/store/useCompanyStore";
    import AfDropDox from "~/components/uikit/AfDropDox.vue";
    import api from "@/api/api";

    const formData = ref({
        positions: "",
        navy: "",
        from: "",
        to: "",
        date: "",
        duration: "",
        name: "",
        email: "",
        phone1: "",
        phone2: "",
    });

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

    const isResetDisabled = computed(() => {
        return Object.values(formData.value).every((x) => !x || x === "");
    });

    const { getVacansies } = useCompanyStore();

    function removeInfo() {
        formData.value = {
            positions: "",
            navy: "",
            from: "",
            to: "",
            date: "",
            duration: "",
            name: "",
            email: "",
            phone1: "",
            phone2: "",
        };
    }

    // async function createVacancies() {}
    onMounted(() => {
        getVacansies();
    });
</script>

<style lang="scss" scoped></style>
