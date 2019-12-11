<template>
    <div class="step step-form" :data-step="dataStep">
        <div class="question">Measurements</div>
        <div class="input-holder">
            <input 
                id="age-value" 
                type="number" 
                name="age" 
                placeholder="Age" 
                v-model="infos.years" 
                required
            >
            <div class="units">years</div>
        </div>
        <div class="metric-height" style="">
            <div class="input-holder">
                <input 
                    id="metric-height-value" 
                    type="number" 
                    name="height" 
                    placeholder="Height" 
                    v-model="infos.height" 
                    required
                >
                <div class="units height">cm</div>
            </div>
        </div>

        <div class="input-holder">
            <input 
                id="weight-value" 
                type="number" 
                name="weight" 
                placeholder="Weight (kg)" 
                v-model="infos.weight" 
                required
            >
            <div class="units weight">kg</div>
        </div>

        <div class="input-holder">
            <input 
                id="targetWeight-value" 
                type="number" 
                name="target_weight" 
                placeholder="Target weight (kg)" 
                v-model="infos.targetWeight" 
                required
            >
            <div class="units weight">kg</div>
        </div>

        <div class="error-msg" v-if="showError">Please select an answer</div>

        <button class="btn btn-primary btn-next-step" @click="nextStep()">{{msgBtn}}</button>
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
            showError: false,
            msgBtn: 'Next',
            infos: {}
        }
    },

    methods: {
        nextStep() {
            if (this.infos.years && this.infos.height && this.infos.weight && this.infos.targetWeight ) {
                this.$bus.$emit('NEXT_STEP_FORM', this.infos)
                this.msgBtn = 'Processing...'
                this.showResult()
            }
            this.showError = true
        },

        showResult(){
            setTimeout( () => this.$router.push({ path: '/results', params: { infos: this.infos } }), 1000);
        }
    }
}
</script>
