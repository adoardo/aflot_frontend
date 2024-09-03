<template>
    <div
            class="menu-reg menu-none menu-reg-sailor cabinet"
            id="add-new-ship"
            :class="{ 'menu-show': isOpen }"
    >
        <div class="modal-block">
            <div class="modal-top">
                <h2 class="modal-title">
                    Добавить судно в ручную
                </h2>
                <!-- /.modal-title -->
                <img class="js-modal-close modal-close" src="assets/img/modal/close.png" alt="image">

            </div>
            <!-- /.modal-top -->

            <div class="suda-item__text">
                Заполните данные по судну, которого нет в нашей базе. <a class="suda-item__link">Уточнить характеристики судна вы можете по этой ссылке.</a>
            </div>
            <!-- /.suda-item__text -->

            <div class="vabout-info vabout-info-vak modal-vabout modal-vabout__two modal-vabout__line">
                <div class="vabout-item">
                    <div class="vabout-subtitle">Название судна:</div>
                    <!-- /.vabout-subtitle -->

                    <input value="EVER GIVEN" class="vabout-subtext modal-vabout-input" type="text">
                </div>
                <!-- /.vabout-item -->
                <div class="vabout-item">
                    <div class="vabout-subtitle">IMO судна:</div>
                    <!-- /.vabout-subtitle -->

                    <input value="9811000" class="vabout-subtext modal-vabout-input" type="number">
                </div>
                <!-- /.vabout-item -->
            </div>
            <!-- /.vabout-info -->
            <div class="vabout-info vabout-info-vak modal-vabout modal-vabout__line">

                <div class="vabout-item">
                    <div class="vabout-subtitle">Тип судна:</div>
                    <!-- /.vabout-subtitle -->

                    <input value="Контейнеровоз" class="vabout-subtext modal-vabout-input" type="text">
                </div>
                <!-- /.vabout-item -->
                <div class="vabout-item">
                    <div class="vabout-subtitle">Год постройки:</div>
                    <!-- /.vabout-subtitle -->

                    <input value="2018" class="vabout-subtext modal-vabout-input" type="number">
                </div>
                <!-- /.vabout-item -->
                <div class="vabout-item">
                    <div class="vabout-subtitle">DWT (t) - валовая вместимость:</div>
                    <!-- /.vabout-subtitle -->

                    <input value="199 489" class="vabout-subtext modal-vabout-input" type="text">
                </div>
                <!-- /.vabout-item -->
                <div class="vabout-item">
                    <div class="vabout-subtitle">kW - двигательная установка:</div>
                    <!-- /.vabout-subtitle -->

                    <input value="-" class="vabout-subtext modal-vabout-input" type="text">
                </div>
                <!-- /.vabout-item -->
                <div class="vabout-item">
                    <div class="vabout-subtitle">Длина</div>
                    <!-- /.vabout-subtitle -->

                    <input value="399 m / 1309 ft" class="vabout-subtext modal-vabout-input" type="text">
                </div>
                <!-- /.vabout-item -->


                <div class="vabout-item">
                    <div class="vabout-subtitle">Ширина:</div>
                    <!-- /.vabout-subtitle -->

                    <input value="59 m / 194 ft" class="vabout-subtext modal-vabout-input" type="text">
                </div>
                <!-- /.vabout-item -->
            </div>
            <!-- /.vabout-info -->

            <div class="suda-item modal-item">
                <img src="assets/img/suda/icon.png" alt="image" class="suda-item__img">

                <div class="modal-item__red">
                    Данное IMO уже зарегистрировано в нашей базе «Морского флота».<br>
                    Воспользуйтесь <a class="modal-item__blue">этой формой</a>, чтобы прикрепить судно по данонму IMO к вашим судам.
                </div>
                <!-- /.modal-item__red -->
            </div>
            <!-- /.suda-item -->
        </div>

        <button class="modal-button">
            <img src="assets/img/modal/plus-white.png" alt="image">
            Отправить на модерацию
        </button>
        <!-- /.modal-button -->

    </div>
    <div
            :class="['header-overlay', { 'header-overlay__active': isOpen }]"
            @click="closeModal('newship')"
    ></div>
</template>

<script setup>
    import {useModalStore} from "~/store/modal";
    import AfCloseModal from "@/components/uikit/AfCloseModal";

    const {closeModal, toggleModal} = useModalStore();

    const props = defineProps({
        isOpen: {
            type: Boolean,
        },
    });
</script>