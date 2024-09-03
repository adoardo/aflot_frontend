<template>
    <NuxtLayout name="custom">
        <section class="section-about">
            <div class="container">
                <div class="about">
                    <div class="tarif-top">
                        <h1 class="about-title">
                            Тарифы:
                        </h1>
                        <!-- /.about-title -->

                        <ul class="tarif-list" id="tabNav">
                            <li><a @click="sm=true,sc=false" id="#tab1" :class="{ tactive: sm }">Моряк</a></li>
                            <li><a @click="sm=false,sc=true" id="#tab2" :class="{ tactive: sc }">Компании</a></li>

                        </ul>

                    </div>
                    <!-- /.tarif-top -->

                    <div id="tabsWrap" class="tarif-block">
                        <div class="tarif-tab tarif-active" v-if="sm" id="tab1">
                            <div class="tarif-all">
                                <div class="tarif-cart">
                                    <div class="tarif-cart__info">
                                        <div class="tarif-cart__images">
                                            <img src="assets/img/tarif/image.svg" alt="image">
                                            <div class="tarif-cart__item">
                                                <div class="tarif-cart__title">Статус:</div>
                                                <!-- /.tarif-cart__title -->
                                                <div class="tarif-cart__text">Ищу работу</div>
                                                <!-- /.tarif-cart__text -->
                                            </div>
                                            <!-- /.tarif-cart__item -->
                                        </div>
                                        <!-- /.tarif-cart-images -->
                                        <div class="tarif-cart__block">
                                            <div class="tarif-cart__item">
                                                <div class="tarif-cart__title">Статус:</div>
                                                <!-- /.tarif-cart__title -->
                                                <div class="tarif-cart__text">Ищу работу</div>
                                                <!-- /.tarif-cart__text -->
                                            </div>
                                            <!-- /.tarif-cart__item -->
                                            <div class="tarif-cart__item">
                                                <div class="tarif-cart__title">Период</div>
                                                <!-- /.tarif-cart__title -->
                                                <div class="tarif-cart__text">
                                                    1
                                                    <span>месяц</span>
                                                </div>
                                                <!-- /.tarif-cart__text -->
                                            </div>
                                            <!-- /.tarif-cart__item -->
                                            <div class="tarif-cart__item">
                                                <div class="tarif-cart__title">Стоимость</div>
                                                <!-- /.tarif-cart__title -->
                                                <div class="tarif-cart__text">
                                                    199
                                                    <span>рублей</span>
                                                </div>
                                                <!-- /.tarif-cart__text -->
                                            </div>
                                            <!-- /.tarif-cart__item -->
                                        </div>
                                        <!-- /.tarif-cart__block -->
                                    </div>
                                    <!-- /.tarif-cart__info -->
                                    <button class="tarif-cart__button">
                                        <img src="assets/img/tarif/cart.svg" alt="image">
                                        Приобрести
                                    </button>
                                    <!-- /.tarif-cart__button -->
                                </div>
                                <!-- /.tarif-cart -->
                                <div class="tarif-info">
                                    <div class="tarif-info__title">
                                        Статус «Ищу работу» открывает следующие возможности:
                                    </div>
                                    <!-- /.tarif-info__title -->

                                    <div class="tarif-ol">
                                        <div class="tarif-li">

                                            <span class="tarif-li__number">1</span>
                                            <!-- /.tarif-li__number -->
                                            <div class="tarif-li__text">
                                                <span>Приоритет в отображении</span> по отношению к остальным кандидатам со статусом «Рассматрю предложения» Это отдельная группа сортировки, расположенная выше;
                                            </div>
                                            <!-- /.tarif-li__text -->
                                        </div>
                                        <!-- /.tarif-li -->
                                        <div class="tarif-li">
                                            <span class="tarif-li__number">2</span>
                                            <!-- /.tarif-li__number -->
                                            <div class="tarif-li__text">
                                                <span>Возможность получение уведомлений о новых вакансиях</span> компаний, добавленных в «избранное»;
                                            </div>
                                            <!-- /.tarif-li__text -->
                                        </div>
                                        <!-- /.tarif-li -->
                                        <div class="tarif-li">
                                            <span class="tarif-li__number">3</span>
                                            <!-- /.tarif-li__number -->
                                            <div class="tarif-li__text">
                                                <span>Приоритет в получении личных приглашений на работу,</span> компании больше заинтересованы в пользователях с данным статусом.
                                            </div>
                                            <!-- /.tarif-li__text -->
                                        </div>
                                        <!-- /.tarif-li -->
                                    </div>
                                    <!-- /.tarif-ol -->
                                </div>
                                <!-- /.tarif-info -->
                            </div>
                            <!-- /.tarif-all -->
                            <div class="tarif-dop">
                                <div class="tarif-icon">
                                    !
                                </div>
                                <!-- /.tarif-icon -->
                                <div class="tarif-dop__text">
                                    Для получения статуса необходимо полностью заполнить резюме, если Вы еще этого не сделали -   воспользуйтесь <a href="#">этой ссылкой</a>
                                </div>
                                <!-- /.tarif-dop-text -->
                            </div>
                            <!-- /.tarif-dop -->

                        </div>
                        <div class="tarif-tab tarif-active" v-if="sc" id="tab2">
                            <div class="rat-block" style="margin: 0; width: 100%;">
                                <div class="rat-item">
                                    <div class="rat-item-content">
                                        <img src="assets/img/dop-page/rat-1.svg" alt="image" class="rat-item-img">
                                        <div class="rat-item-top">
                                            <div class="rat-item-pretitle">тариф</div>
                                            <!-- /.rat-item-pretitle -->
                                            <div class="rat-item-title">«базовый»</div>
                                            <!-- /.rat-item-title -->
                                        </div>
                                        <!-- /.rat-item-top -->

                                        <div class="rat-item-info">
                                            <div class="rat-item-text">Количество<br>
                                                публикаций вакансий:</div>
                                            <!-- /.rat-item-text -->
                                            <div class="rat-item-num">15</div>
                                            <!-- /.rat-item-num -->
                                        </div>
                                        <!-- /.rat-item-info -->

                                        <div class="rat-item-line"></div>
                                        <!-- /.rat-item-line -->

                                        <div class="rat-item-info">
                                            <div class="rat-item-text">
                                                Количество возможностей<br>
                                                «Предложить вакансию»:
                                            </div>
                                            <!-- /.rat-item-text -->
                                            <div class="rat-item-num">600</div>
                                            <!-- /.rat-item-num -->
                                        </div>
                                        <!-- /.rat-item-info -->

                                        <div class="rat-item-end">
                                            <div class="rat-item-price">4 990</div>
                                            <!-- /.rat-item-price -->
                                            <div class="rat-item-dop">рублей</div>
                                            <!-- /.rat-item-dop -->
                                        </div>
                                        <!-- /.rat-item-end -->
                                    </div>
                                    <!-- /.rat-item-content -->

                                    <button class="rat-item-button">
                                        <img src="assets/img/dop-page/cart.svg" alt="image">
                                        <span>Приобрести</span>
                                    </button>
                                    <!-- /.rat-item-button -->
                                </div>
                                <!-- /.rat-item -->


                                <div class="rat-item">
                                    <div class="rat-item-content">
                                        <img src="assets/img/dop-page/rat-2.svg" alt="image" class="rat-item-img">
                                        <div class="rat-item-top">
                                            <div class="rat-item-pretitle">тариф</div>
                                            <!-- /.rat-item-pretitle -->
                                            <div class="rat-item-title">«оптимальный»</div>
                                            <!-- /.rat-item-title -->
                                        </div>
                                        <!-- /.rat-item-top -->

                                        <div class="rat-item-info">
                                            <div class="rat-item-text">Количество<br>
                                                публикаций вакансий:</div>
                                            <!-- /.rat-item-text -->
                                            <div class="rat-item-num">50</div>
                                            <!-- /.rat-item-num -->
                                        </div>
                                        <!-- /.rat-item-info -->

                                        <div class="rat-item-line"></div>
                                        <!-- /.rat-item-line -->

                                        <div class="rat-item-info">
                                            <div class="rat-item-text">
                                                Количество возможностей<br>
                                                «Предложить вакансию»:
                                            </div>
                                            <!-- /.rat-item-text -->
                                            <div class="rat-item-num">3000</div>
                                            <!-- /.rat-item-num -->
                                        </div>
                                        <!-- /.rat-item-info -->

                                        <div class="rat-item-end">
                                            <div class="rat-item-price">16 990</div>
                                            <!-- /.rat-item-price -->
                                            <div class="rat-item-dop">рублей</div>
                                            <!-- /.rat-item-dop -->
                                        </div>
                                        <!-- /.rat-item-end -->
                                    </div>
                                    <!-- /.rat-item-content -->

                                    <button class="rat-item-button">
                                        <img src="assets/img/dop-page/cart.svg" alt="image">
                                        <span>Приобрести</span>
                                    </button>
                                    <!-- /.rat-item-button -->
                                </div>
                                <!-- /.rat-item -->


                                <div class="rat-item">
                                    <div class="rat-item-content">
                                        <img src="assets/img/dop-page/rat-3.svg" alt="image" class="rat-item-img">
                                        <div class="rat-item-top">
                                            <div class="rat-item-pretitle">тариф</div>
                                            <!-- /.rat-item-pretitle -->
                                            <div class="rat-item-title">«Максимум»</div>
                                            <!-- /.rat-item-title -->
                                        </div>
                                        <!-- /.rat-item-top -->

                                        <div class="rat-item-info">
                                            <div class="rat-item-text">Количество<br>
                                                публикаций вакансий:</div>
                                            <!-- /.rat-item-text -->
                                            <div class="rat-item-num">100</div>
                                            <!-- /.rat-item-num -->
                                        </div>
                                        <!-- /.rat-item-info -->

                                        <div class="rat-item-line"></div>
                                        <!-- /.rat-item-line -->

                                        <div class="rat-item-info">
                                            <div class="rat-item-text">
                                                Количество возможностей<br>
                                                «Предложить вакансию»:
                                            </div>
                                            <!-- /.rat-item-text -->
                                            <div class="rat-item-num">8000</div>
                                            <!-- /.rat-item-num -->
                                        </div>
                                        <!-- /.rat-item-info -->

                                        <div class="rat-item-end">
                                            <div class="rat-item-price">29 990</div>
                                            <!-- /.rat-item-price -->
                                            <div class="rat-item-dop">рублей</div>
                                            <!-- /.rat-item-dop -->
                                        </div>
                                        <!-- /.rat-item-end -->
                                    </div>
                                    <!-- /.rat-item-content -->

                                    <button class="rat-item-button">
                                        <img src="assets/img/dop-page/cart.svg" alt="image">
                                        <span>Приобрести</span>
                                    </button>
                                    <!-- /.rat-item-button -->
                                </div>
                                <!-- /.rat-item -->
                            </div>

                        </div>
                    </div>

                </div>
                <!-- /.about -->
            </div>
            <!-- /.container -->
        </section>
    </NuxtLayout>
</template>

<script>
    export default {
        data() {
            return {
                sm: true,
                sc: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tarif-list a.tactive {
        color: #9b2719;
        border-bottom: 2px solid #9b2719;
    }
</style>
