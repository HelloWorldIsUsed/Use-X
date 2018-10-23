<template>
    <div>
        <div class='xleftnav-container'>
            <xLeftNav :initOption='initOption'></xLeftNav>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'XLeftNavCon',    
    data () {
        return {
            initOption:{
                data:[
                    {
                        name: '网站配置',
                        url: 'www.baidu.com',  
                        showSubItem: false,                      
                        subItem:[
                            {
                                name:'网址配置',
                                url:''
                            },
                            {
                                name:'网址配置',
                                url:''
                            },
                            {
                                name:'网址配置',
                                url:''
                            },
                            {
                                name:'网址配置',
                                url:''
                            }   
                        ]
                    },
                    {
                        name: '文章管理',
                        url: 'www.baidu.com',
                        showSubItem: false,
                        subItem:[
                            {
                                name:'散文',
                                url:''
                            },
                            {
                                name:'小说',
                                url:''
                            } 
                        ]
                    },
                    {
                        name: '订单管理',
                        url: 'www.baidu.com',
                        showSubItem: false,
                        subItem:[
                            {
                                name:'二级',
                                url:''
                            }    
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<style scoped lang='scss'>
.xleftnav-container{
}
</style>