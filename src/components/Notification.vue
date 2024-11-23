<script>
export default {
    props: ['data', 'type'],
    computed: {
        notificationType() {
            return {
                'notification-container': true,
                'notification-error': this.$props.type === 'error',
                'notification-success': this.$props.type === 'success'
            }
        }
    }
}
</script>

<template>
    <div :class="notificationType">
        <p class="notification-text">{{ this.$props.data }}</p>
        <div class="notification-close" @click="this.$emit('close')">
            <img src="/close.svg" title="Close" />
        </div>
    </div>
</template>

<style scoped>
.notification-container {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
}
.notification-text {
    margin: 0;
}
.notification-close {
    display: flex;
    border: 1px solid #2e2e3a;
    border-radius: 5px;
    margin-left: 10px;
    padding:10px;
    cursor: pointer;
}
.notification-error {
    background-color: #f8d7da;
    color: #721c24;
}
.notification-success {
    background-color: #a0d2db;
    color: #2e2e3a;
}
</style>