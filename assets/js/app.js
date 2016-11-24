new Vue({
    el: '#app',
    data: {
        page: ''
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.page, { sanitize: true })
        }
    },
    methods: {
        load: function (docs) {
            console.log('/docs/'+ docs);
                this.$http.get('/docs/'+ docs).then(function (response) {
                    this.$set('page', response.data);
                });

        }
    },

});