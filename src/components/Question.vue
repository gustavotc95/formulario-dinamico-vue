<template>
    <div class="step">
        <div v-if="question.type == 1" class="step-container">
            <div class="question">
                {{question.title}}
            </div>
            <div class="fancy-radio-holder">
                <div class="fancy-radio" v-for="(option, index) of question.options" :key="index" :data-answer="index">
                    {{option}}
                    <div class="status"></div>
                    <div class="status-icon">-</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Question',
    props: {
        question: Object
    }
}
</script>
