<template>
    <div class="step step-form" :data-step="dataStep">
        <div class="question">Measurements</div>
        <div class="input-holder">
            <input id="age-value" type="number" name="age" placeholder="Age">
            <div class="units">years</div>
        </div>
        <div class="metric-height" style="">
            <div class="input-holder">
                <input id="metric-height-value" type="number" name="height" placeholder="Height">
                <div class="units height">cm</div>
            </div>
        </div>

        <div class="input-holder">
            <input id="weight-value" type="number" name="weight" placeholder="Weight (kg)">
            <div class="units weight">kg</div>
        </div>

        <div class="input-holder">
            <input id="targetWeight-value" type="number" name="target_weight" placeholder="Target weight (kg)">
            <div class="units weight">kg</div>
        </div>

        <div class="error-msg" style="display: none;">Please select an answer</div>

        <button class="btn btn-primary btn-next-step">Next</button>
</div>
</template>

<script>
export default {
    name: 'QuestionForm',
    props: {
        dataStep: Number
    },
    data () {
        return {

        }
    },

    methods: {

    }
}
</script>
