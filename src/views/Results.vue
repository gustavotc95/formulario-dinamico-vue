<template>
    <div class="results">
        <nav class="mainNavbar navbar navbar-expand-lg" style="margin-top:10px;">
            <div class="container">
                <div class="navbar-brand" style="margin: auto;">
                    <img src="../assets/images/logo.svg" alt="KetoCycle.Diet" class="regular-logo">
                </div>
            </div>
        </nav>
        <div class="results results-2 results-3 c-content">
            <div class="summary-container c-maincontent">
                <div class="container container-intro">
                    <h3 style="max-width: 740px;">Get your personalized Keto Diet</h3>
                    <p class="subheading">
                        Based on your answers, you will be...
                    </p>
                    <div class="b-blocks-featured">
                        <div class="b-result b-result--weight">
                            <div class="b-stats">
                                <div class="b-stats--header">
                                    <p>{{Number(infos.targetWeight) + 2}}</p>
                                    <p>{{Number(infos.targetWeight) + 1}}</p>
                                    <p class="e-special">{{infos.targetWeight}} <span>kg</span></p>
                                    <p>{{Number(infos.targetWeight) - 1}}</p>
                                    <p>{{Number(infos.targetWeight) - 2}}</p>
                                </div>
                                <div class="b-stats--footer">
                                    <p>by
                                        <span class="e-month">{{monthNames[d.getMonth()]}}</span>,
                                        <span class="e-year">{{d.getFullYear()}}</span></p>
                                </div>
                            </div>
                            <div class="b-months">
                                <div class="b-stats--header">
                                    <p>{{monthSmallNames[d.getMonth()]}}</p>
                                    <p>
                                        <b>{{monthSmallNames[d.getMonth()]}}</b>
                                    </p>
                                </div>
                                <div class="b-stats--results">
                                    <div class="b-stats--results--from">
                                        {{infos.weight}}
                                        <span>kg</span>
                                    </div>
                                    <div class="b-stats--results--to">
                                        {{infos.targetWeight}} 
                                        <span>kg</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="b-result b-result--text">
                            <div class="b-stats--header">
                                87 <span>%</span>
                            </div>
                            <div class="b-stats--footer">
                                Similar people
                                <b>lost</b> more than
                                <span class="e-special">
                                    5
                                </span>
                                <b>kg</b> on Keto
                            </div>
                        </div>
                        <div class="b-result b-result--firstweek">
                            <div class="b-stats--header">
                                <div class="b-days">
                                    <div class="b-day">
                                        <span class="e-name">Mon</span>
                                        <span class="e-number">1</span>
                                    </div>
                                    <div class="b-day">
                                        <span class="e-name">Tue</span>
                                        <span class="e-number">2</span>
                                    </div>
                                    <div class="b-day">
                                        <span class="e-name">Web</span>
                                        <span class="e-number">3</span>
                                    </div>
                                    <div class="b-day">
                                        <span class="e-name">Thu</span>
                                        <span class="e-number">4</span>
                                    </div>
                                    <div class="b-day">
                                        <span class="e-name">Fri</span>
                                        <span class="e-number">5</span>
                                    </div>
                                    <div class="b-day">
                                        <span class="e-name">Sat</span>
                                        <span class="e-number">6</span>
                                    </div>
                                    <div class="b-day">
                                        <span class="e-name">Sun</span>
                                        <span class="e-number">7</span>
                                    </div>
                                </div>
                            </div>
                            <div class="b-stats--footer">
                                <div class="e-special">
                                    <span>--{{Number(infos.weight) - Number(infos.targetWeight)}}</span> kg
                                </div>
                                <p>After first week</p>
                            </div>
                        </div>
                        <button class="btn btn-primary scroll-btn"><span>Get your plan</span>
                        </button>
                    </div>
                    <div class="summary">
                        <h2>Personal summary</h2>
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div id="bmi" class="b-result results-box">
                                    <div class="e-row ">
                                        <span class="e-value"><span class="e-number">19.53</span> BMI</span>
                                        <span class="e-name">Overweight</span>
                                    </div>
                                    <div class="e-row is-selected">
                                        <span class="e-value"><span class="e-number">19.53</span> BMI</span>
                                        <span class="e-name">Normal</span>
                                    </div>
                                    <div class="e-row ">
                                        <span class="e-value"><span class="e-number">19.53</span> BMI</span>
                                        <span class="e-name">Underweight</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div id="intake" class="b-result results-box">
                                    <div class="e-heading">
                                        Daily calorie intake
                                    </div>
                                    <div class="e-value">
                                        <div class="daily-norm">
                                            <span>1125-1275</span>
                                        </div>
                                    </div>
                                    <div class="e-measurement">kCal</div>
                                    <img src="../assets/images/daily-calorie.png" alt="">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 cr">
                                <div id="body-parts" class="b-result results-box">
                                    <div class="e-heading">
                                        Body change estimations
                                    </div>
                                    <img src="../assets/images/body-change-estimations.png" alt="">
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div id="meals" class="results-box">
                                    <div class="meal-count" style="max-width: 240px;width: 100%;margin: auto;left: 0;right: 0;">
                                        <span>1000+</span>
                                    </div>
                                    <img src="../assets/images/unique-recipes.png">
                                    <p>Unique food variations for you</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Results',

    data() {
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        const monthSmallNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const d = new Date();
        return{
            d, monthNames, monthSmallNames, 
            infos: ''
        }
    },

    mounted () {
        if(!localStorage.infosForm ){
            this.$router.push({ path: '/' })
        }
        this.infos = JSON.parse(localStorage.getItem('infosForm'))
    }
}
</script>

<style>

</style>