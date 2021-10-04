<template>
    <div>
        This is a button!
        <button @click="handleClick">Button</button >
    </div>
</template>

<script>

export default {
    methods: {
        handleClick() {
            console.log("你好")
        }
    }
}
</script>
<style scoped>

</style>