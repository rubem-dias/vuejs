<template>
    <div>
        <h1> {{ titulo }} </h1>
        <input type="text" class="v-model">
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                titulo: 'Ola vue'
            }
        }
    }
</script>