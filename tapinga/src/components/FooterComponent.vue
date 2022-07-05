<script lang="ts" setup>
import EnterIcon from './icons/EnterIcon.vue';
const scrollUp = function(){
    document.querySelector('#order-form')?.scrollIntoView({
        behavior: 'smooth'
    })
}
</script>

<template>
    <header>
        <div class="footer-container">
            <button @click="scrollUp">
                <EnterIcon />
                &nbsp;
                <span class="w"> Ir Arriba</span>
            </button>
        </div>
    </header>
</template>

<style lang="scss">
.footer-container {
    padding: 8px 16px;
    width: 100%;
    min-width: 50px;
    background: var(--header-background);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--header-ff);
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
            justify-content: center;
        }

        color: #fff;

        
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