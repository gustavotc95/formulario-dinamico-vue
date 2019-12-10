<template>
    <div class="step" :data-step="dataStep">
        <div class="step-container" v-if="question.type == 1" >
            <div class="question">
                {{question.title}}
            </div>
            <div class="fancy-radio-holder">
                <div class="fancy-radio" 
                    v-for="(option, index) of question.options" 
                    :key="index" 
                    :data-answer="option"
                    @click="nextStepWithSelect($event.target)"
                >
                    {{option}}
                    <div class="status"></div>
                    <div class="status-icon off">-</div>
                    <div class="status-icon on">+</div>
                </div>
            </div>
        </div>

        <div class="step-container" v-if="question.type == 2" >
            <div class="question">
                {{question.title}}
            </div>
            <p>
                {{question.text}}
            </p>
            <h3 class="question">{{question.subTitle}}</h3>
            <ul>
                <li v-for="(item, index) of question.list" :key="index">
                    <i class="la la-check-circle"></i>
                    {{item}}
                </li>
            </ul>
            <button class="btn btn-primary btn-next-step" @click="nextStep()">{{question.button}}</button>
        </div>

        <div class="step-container" v-if="question.type == 3">
            <div class="question">
                {{question.title}}
            </div>
            <div class="question-description">
                Please select which products you would like included in the plan?
            </div>
            <div class="fancy-radio-holder">
                <div class="fancy-radio with-icon" 
                    v-for="(option, index) of question.options" 
                    :key="index" 
                    :data-answer="option"
                    :data-index="index"
                    @click="selectMore($event.target)"
                >
                    <div class="icon">
                        <i :class="option"></i>
                    </div>
                    {{option}}
                    <div class="status"></div>
                    <div class="status-icon off">-</div>
                    <div class="status-icon on">+</div>
                </div>
            </div>
            <div class="error-msg" v-if="showError">Please select an answer</div>
            <button class="btn btn-primary btn-next-step" @click="checkSubimit()">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Question',
    props: {
        question: Object,
        dataStep: Number
    },
    data () {
        return {
            answers: [],
            showError: false,
            selection: 0,
            selectionItems: ['','','','',''],
        }
    },

    methods: {
        checkSubimit() {
            if(this.selection > 0) {
                let items = this.selectionItems
                this.salveAndNext(items)
            } else {
                this.showError = true
            }
        },

        nextStepWithSelect (e) {
            e.classList.toggle('active');
            let items = e.getAttribute('data-answer')
            this.salveAndNext(items)
        },

        salveAndNext(items){
            if (localStorage.answers){
                this.answers = JSON.parse(localStorage.getItem('answers'))
            }
            this.answers.push(items)
            localStorage.answers = JSON.stringify(this.answers)
            this.$bus.$emit('NEXT_STEP')
        },

        nextStep() {
            this.$bus.$emit('NEXT_STEP')
        },

        selectMore(e) {
            if (e.classList.contains('active')){
                e.classList.toggle('active')
                this.selection -= 1
                this.selectionItems[e.getAttribute('data-index')] = ''
            } else {
                e.classList.toggle('active')
                this.selection += 1
                this.selectionItems[e.getAttribute('data-index')] = e.getAttribute('data-answer')
            }
        }
    }
}
</script>
