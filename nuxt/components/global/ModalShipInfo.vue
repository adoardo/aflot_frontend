<template>
    <div
            class="menu-reg menu-none menu-reg-sailor cabinet"
            id="ship-info"
            :class="{ 'menu-show': isOpen }"
    >
        <div class="modal-block">
            <div class="modal-top">
                <h2 class="modal-title">
                    Подробнее о судне EVER GIVEN:
                </h2>
                <!-- /.modal-title -->
                <img class="js-modal-close modal-close" src="assets/img/modal/close.png"
                     @click="closeModal('shipinfo')">
            </div>
            <!-- /.modal-top -->



            <div class="vabout-info vabout-info-vak modal-vabout">
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
        <!-- /.modal-block -->

        <button @click="closeModal('shipinfo');toggleModal('errorReporting')" class="modal-button js-open-modal js-modal-close modal-button-open" data-modal="6">
            Сообщить об ошибке
            <img src="assets/img/modal/plus-cursor.svg" alt="image">
        </button>
        <!-- /.modal-button -->

    </div>
    <div
            :class="['header-overlay', { 'header-overlay__active': isOpen }]"
            @click="closeModal('shipinfo')"
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