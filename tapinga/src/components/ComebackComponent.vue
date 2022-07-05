<script setup="" lang="ts">
import formbg from '@/assets/form-bg.jpg';

const emit = defineEmits(['close']);
const go = function() {
    document.querySelector('#order-form')?.scrollIntoView({behavior:'smooth'});
    emit('close');
}
</script>
<template>
    <div class="comeback-container" @click="emit('close')">
        <div @click.stop class="comebacker" :style="`background: url(${formbg}) center center / cover no-repeat`">
            <div class="cbk-overlay">
                <div class="cbk-title">
                    ¡Atención!
                </div>
                <div class="cbk-subtitle">
                    ¡<span>30%</span> en todo el pedido!
                </div>
                <div class="cbk-o-block">
                    <div class="txt">¡Obtenga un descuento <span>exclusivo del 30% ahora!</span></div>
                    <div class="btn">
                        <button @click="go" class="submit-btn">PEDIR >></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.comeback-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: .65);
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:655px) {
            padding: 20px;
        }

    .cbk-title {
        font-size: 64px;
        font-family: 'Arial', 'Lato';
        color: #fff;
        font-weight: 700;
        margin-bottom: .5em;

        @media screen and (max-width:655px) {
            text-align: center;
            font-size: 36px;
        }

    }

    .cbk-subtitle {
        font-size: 32px;
        max-width: 50%;
        font-family: 'Arial', 'Lato';
        font-weight: 700;
        color: #fff;

        span {
            color: #FCFF74;
        }

        @media screen and (max-width:655px) {
            text-align: center;
            max-width: 100%;
            font-size: 24px;
        }
    }

    .cbk-o-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        .txt {
            color: #fff;
            font-size: 20px;
            line-height: 1.3;
            font-family: 'Arial', 'Lato';
            font-weight: 400;
        }

        span {
            color: #FCFF74;
        }

        .txt,
        .btn {
            flex: 0 0 50%;
        }

        @media screen and (max-width:655px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            .txt,.btn {
                flex: 0 0 100%;
                text-align: center;
            }
        }
    }

    .comebacker {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
        border-radius: 40px;
        overflow: hidden;

        .cbk-overlay {
            padding: 70px;
            background: linear-gradient(180deg, #e30000c4 0%, #fb3333d8 100%);

            @media screen and (max-width:655px) {
                padding: 40px;
            }

        }
    }

    .submit-btn {
        height: 65px;
        background: #6dd42d;
        border-radius: 200px;
        border: 0;
        color: #fff;
        font-family: "Lato";
        font-weight: 700;
        font-size: 24px;
        line-height: 65px;
        width: 200px;
        margin-top: 20px;
        margin-bottom: 20px;
        max-width: 100%;
        cursor: pointer;
        animation: flash 1s ease-in-out 1.2s;
        box-shadow: 0 5px 6px #444;
        display: block;
        margin: 0 0 0 auto;

        @media screen and (max-width: 655px) {
            margin-top: 5px;
            margin-bottom: 15px;
        }
    }
}
</style>