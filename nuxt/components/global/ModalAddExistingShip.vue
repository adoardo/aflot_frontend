<template>
    <div
            class="menu-reg menu-none menu-reg-sailor cabinet"
            id="add-existing-ship"
            :class="{ 'menu-show': isOpen }"
    >
        <div class="modal-block">
            <div class="modal-top">
                <h2 class="modal-title">
                    Добавить судно из «Морского флота»
                </h2>
                <!-- /.modal-title -->
                <img class="js-modal-close modal-close" src="assets/img/modal/close.png"
                     @click="closeModal('existingship')">
            </div>
            <!-- /.modal-top -->

            <div class="suda-item__text">
                Для добавления судна, введите IMO или название корабля в строку поиска, затем выберите
                соответствующее судно
                из списка выдачи. В случае, если вы не найдете подходящее судно воспользуйтесь <a
                    class="suda-item__link">данной формой.</a>
            </div>
            <!-- /.suda-item__text -->
            <div class="cabinet tag-input modal-tag-input">
                <div class="tag-input__label">Судно:</div>
                <div class="tag-input__list">

                    <div class="tag-input__item">
                        EVER GIVEN <span class="modal-tag__gray">IMO 9811000</span>
                        <button class="tag-input__delete">
                            <img src="assets/img/resume/close.svg" alt="delete">
                        </button>
                    </div>
                </div>
            </div>
            <!-- /.tag-input -->

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

        <button class="modal-button">
            <img src="assets/img/modal/plus-white.png" alt="image">
            Добавить в «мои суда»
        </button>
        <!-- /.modal-button -->

    </div>
    <div
            :class="['header-overlay', { 'header-overlay__active': isOpen }]"
            @click="closeModal('existingship')"
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