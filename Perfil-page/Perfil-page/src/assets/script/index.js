Vue.component('perfil-knowledges', {
    props: ['name'],
    template: '<span>{{name}}</span>'

})

Vue.component('what-i-do', {
    props: {
        title: String,
        img: String
    },
    template: '#i-do'
})

Vue.component('my-education', {
    props: {
        name: String,
        img: String,
        link: String
    },
    template: '#education'
})
var app = new Vue({
    el: '#app',
    data: {
        knowledges: ['PHP', 'CSS3', 'HTML5','JavaScript','Python','RubyOnRails', 'C/C++']
    },
     methods: {

     }
})

