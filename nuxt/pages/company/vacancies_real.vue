<template>
    <NuxtLayout name="default-hero" class="main cabinet" style="background-color: #fff">
        <div>
            <AfHeaderColor />
        </div>
        <section id="responses">
            <div class="container">
                <div class="tabs">
                    <div class="tab-header">
                        <div
                                class="tab-label"
                                :class="{ active: activeTab === 0 }"
                                @click="changeTab(0)"
                        >
                            Вакансии
                        </div>
                        <div
                                class="tab-label"
                                :class="{ active: activeTab === 1 }"
                                @click="changeTab(1)"
                        >
                            Черновики
                        </div>
                        <div
                                class="tab-label"
                                :class="{ active: activeTab === 2 }"
                                @click="changeTab(2)"
                        >
                            Неактуальные вакансии
                        </div>
                    </div>

                    <div
                            v-for="(tabContent, index) in tabContents"
                            :key="index"
                            class="tab-body"
                            v-show="activeTab === index"
                    >
                        <div class="flex-title">
                            <h1>{{ tabContent.title }}</h1>
                            <div>{{ tabContent.count }} вакансии</div>
                        </div>

                        <div class="vacancy-detail__list">
                            <VacancyItem />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AfCustomFooter :lnkStyle="'footer-block footer-block-transparent'"/>
    </NuxtLayout>
</template>

<script setup>
    import { useRouter } from "vue-router";
    import { useCompanyStore } from "~/store/useCompanyStore";
    import VacancyItem from "~/components/list/VacancyItem";
    import { ref, onMounted, watch } from "vue";

    const router = useRouter();
    const { getVacansies } = useCompanyStore();

    const activeTab = ref(0);
    const tabContents = ref([
        { title: "Действующие вакансии", count: 0, vacancies: [] },
        { title: "Черновики", count: 0, vacancies: [] },
        { title: "Неактуальные", count: 0, vacancies: [] },
    ]);

    const changeTab = (index) => {
        activeTab.value = index;
        router.push({ query: { tab: index } });
    };

    onMounted(async () => {
        // await getVacansies();

        const initialTab = Number(router.currentRoute.value.query.tab);
        if (!isNaN(initialTab) && initialTab >= 0 && initialTab < tabContents.value.length) {
            activeTab.value = initialTab;
        }

        tabContents.value.forEach((tab, index) => {
            tab.count = 0;
        });
    });

    watch(
        () => router.currentRoute.value.query.tab,
        (newTab, oldTab) => {
            if (newTab !== undefined) {
                activeTab.value = parseInt(newTab);
            }
        }
    );
</script>

<style lang="scss" scoped></style>
