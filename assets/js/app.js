new Vue({
    el: '#app',
    data: {
        page : ''
    },
    watch: {
        page:  function () {
            setTimeout(function() {
                Prism.highlightAll();
            }, 100);
        }
    },
    mounted: function () {
        this.load('index');
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.page);
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