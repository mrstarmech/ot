<script lang="ts" setup>
import BurgerIcon from './icons/BurgerIcon.vue';
import TapingaIcon from './icons/TapingaIcon.vue';
import CupIcon from './icons/CupIcon.vue';
import BagIcon from './icons/BagIcon.vue';
import SearchIcon from './icons/SearchIcon.vue';
import BellIcon from './icons/BellIcon.vue';
import EnterIcon from './icons/EnterIcon.vue';
</script>

<template>
    <header>
        <div class="header-container">
            <div class="header-section header-section__left">
                <BurgerIcon />
                <TapingaIcon />
                <div class="tops">
                    <CupIcon />
                   <span class="w"> Tops</span>
                </div>
                <div class="store">
                    <BagIcon />
                    <span class="w"> T! Store</span>
                </div>
                <div class="input">
                    <input placeholder="Buscar" maxlength="200" class="search" value="" />
                    <SearchIcon />
                </div>
            </div>
            <div class="header-section header-section__right">
                <BellIcon />
                <div class="regist">
                    Registrarme
                </div>
                <button>
                    <EnterIcon />
                    <span class="w"> Iniciar Sesión</span>
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header-container {
    padding: 8px 16px;
    width: 100%;
    min-width: 50px;
    background: var(--header-background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--header-ff);

    svg {
        color: var(--header-menu-icon);
        line-height: 1;
        vertical-align: middle;
        cursor: pointer;

        &:hover {
            color: #fff;
        }
    }

    .header-section {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 50%;

        &__left {
            justify-content: flex-start;
            @media screen and (max-width: 500px) {
                // justify-content: space-between;
                width: 100%;
            }
        }

        &__right {
            justify-content: flex-end;
            @media screen and (max-width: 425px) {
                display: none;
            }
        }

        color: #fff;

        button {
            background: #16c465;
            border: 1px solid transparent;
            border-radius: 4px;
            font-weight: 700;
            height: 34px;
            color: #fff;
            display: flex;
            align-items: center;
            cursor: pointer;
            svg {
                color: #fff;
            }
        }
        .regist {
            cursor: pointer;
        }

        svg {
            flex: 0 0 auto;
        }

        .tops,
        .store {
            padding: 5px 0 5px 20px;
            vertical-align: middle;
            line-height: 1;
            color: var(--header-menu-icon);
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            flex: 0 0 auto;

            &:hover {
                color: #fff;

                svg {
                    color: #fff;
                }
            }
        }
        .w {
            @media screen and (max-width:970px) {
                display: none;
            }
        }

        .input {
            display: block;
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 4px;
            background: var(--header-search-bar);
            padding: 8px 32px 8px 12px;
            outline: none;
            font-size: 14px;
            line-height: 16px;
            margin: 0 0 0 20px;
            color: #fff;
            max-width: 200px;
            position: relative;
            @media screen and (max-width: 500px) {
                display: none;
            }

            svg {
                position: absolute;
                right: 5px;
                font-size: 14px;
                width: 20px;
                height: 20px;
            }

            input {
                width: 100%;
                height: 100%;
                background: transparent;
                outline: none;
                border: 0;
                color: #fff;

                &::placeholder {
                    color: var(--header-menu-icon);
                }
            }
        }
    }
}
</style>