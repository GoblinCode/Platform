new Vue({
    el: '#app',
    data: {
        page : ''
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.page)
        }
    },
    methods: {
        load: function (docs) {
            this.$http.get('https://raw.githubusercontent.com/TheOrchid/Platform/gh-pages/docs/'+ docs + '.md').then(function (response) {
                this.page = response.data;
            });
        }
    },

});