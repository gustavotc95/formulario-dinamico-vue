<template>
    <div class="quiz">
        <div class="quiz-container">
            <nav class="mainNavbar navbar navbar-expand-lg" style="display:block;">
                <div class="container">
                    <img src="../assets/images/back.svg" alt="Back" class="btn-back" @click="back()">
                    <div class="navbar-brand">
                        <img src="../assets/images/logo.svg" alt="KetoCycle.Diet" class="regular-logo">
                    </div>
                </div>
            </nav>
            <div class="subheader">
                <div class="progress-bar">
                    <div class="progress" :style="`width: ${progress}%;`"></div>
                </div>
            </div>
            <div class="container">
                <div v-for="(question, index) of questions" :key="index" >
                    <Question :question="question" :dataStep="index" v-if="step === index"/>
                </div>
                <QuestionForm :dataStep="questions.length" v-if="step === questions.length"/>
            </div>
        </div>
    </div>
</template>

<script>
import Question from '@/components/Question.vue'
import QuestionForm from '@/components/QuestionForm.vue'

export default {
    name: 'Quiz',
    components: {
        Question,
        QuestionForm
    },
    data () {
        return {
            step: 0,
            quizGender: this.$route.params.gId,
            progress: 0,
            questions: [
                {
                    'id': 1,
                    'type': 1,
                    'title': 'How familiar are you with the Keto diet?',
                    'text': '',
                    'options': [
                        'Expert',
                        'I\'ve heard a thing or two',
                        'Beginner'
                    ]
                },
                {
                    'id': 2,
                    'type': 2,
                    'title': 'What is Keto diet?',
                    'text': 'The ketogenic diet is a very low-carb, high-fat diet. To achieve positive results, this diet has to be very low in carbohydrates, high in dietary fat and include a moderate amount of proteins. This reduction in carbs puts your body into a metabolic state called ketosis. When this happens, your body becomes incredibly efficient at burning fat for energy. Ketogenic diet can cause massive reductions in blood sugar, insulin levels and help with weight loss.',
                    'subTitle': 'Benefits of keto diet:',
                    'list': [
                        'Weight loss',
                        'Reduced blood pressure',
                        'Slower ageing process',
                        'Improved sleep and mood',
                        'Increased energy efficiency'
                    ],
                    'button': 'Got it'
                },
                {
                    'id': 3,
                    'type': 1,
                    'title': 'How much time do you have for meal preparation each day?',
                    'text': '',
                    'options': [
                        'Up to 30 minutes',
                        'Up to 1 hour',
                        'More than 1 hour'
                    ]
                },
                {
                    'id': 4,
                    'type': 3,
                    'title': 'Meat',
                    'text': 'Please select which products you would like included in the plan?',
                    'options': [
                        'chicken',
                        'pork',
                        'beef',
                        'fish',
                        'lamb',
                        'veal',
                        'I am vegetarian'
                    ]
                },
            ],
        }
    },

    methods: {
        listener () {
            this.$bus.$on('NEXT_STEP', () => {
                this.step += 1
                this.progress += 100/this.questions.length-1;
            })
        },
        back (){
            if (this.step > 0) {
                this.step -= 1
                this.progress -= 100/this.questions.length-1;
            } else {
                this.$router.push({ path: '/' })
            }
        }
    },

    mounted () {
        this.listener()
        this.progress = 100/this.questions.length-1
        localStorage.removeItem('answers')
    }
}
</script>

<style>

</style>