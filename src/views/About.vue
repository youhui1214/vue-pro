<template>
    <div class="about">
        <!--为echarts准备一个具备大小的容器dom-->
        <div id="main" style="width: 1000px;height: 400px;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    methods: {
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id))
            // 指定图表的配置项和数据
            let option = {
                color: [ '#FE6464', '#9A7CE4' ],
                title: {
                    text: '折线图堆叠'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['交易金额', '支付金额'],
                    left: 'right'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        lineStyle:{
                            color: '',
                            type: 'solid'
                        }
                    },
                    data: ['01:00', '03:00', '05:00', '07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00', '23:00']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '交易金额',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210, 191, 234, 290, 330, 310, 120, 132]
                    },
                    {
                        name: '支付金额',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 134, 90, 230, 210]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            this.charts.setOption(option);
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.drawLine('main')
        })


    }


}

</script>

<style scoped>



</style>
