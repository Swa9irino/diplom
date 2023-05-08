const app={
    data(){
        return{
            currentPage:"home",
            links:[
                {id:1,img:'phone.png',name:"Мобильные"},
                {id:2,img:'power-bank.png',name:"Powerbank"},
                {id:3,img:'phone case.png',name:"Phone case"},
                {id:4,img:'GPU.png',name:"MSI GeForce GTX 1660 SUPER Gaming"},
                {id:5,img:'cpu.png',name:"I7-7700K"},
                {id:6,img:'bicyсle.png',name:"Велосипед Altair AL 27.5 V FR"},

            ],
            isVisible:false,
            isVisiblee:false,
            isVisibleee:false

        }
    },
    methods:{
        showElement(a) {

            this.isVisible = true;
        },
        hideElement(a) {
            this.isVisible = false;
        },
        showElements(b) {

            this.isVisiblee = true;
        },
        hideElements(b) {
            this.isVisiblee = false;
        },
        showElementss(c) {

            this.isVisibleee = true;
        },
        hideElementss(c) {
            this.isVisibleee = false;
        }

    }
}




Vue.createApp(app).mount('#app')
