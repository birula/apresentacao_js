define(["vue"], function (Vue) {

    var template = `<div>
        <label>Nome</label>
        <input type="text" v-model="dadosUsuario.nome" />
    </div>`;

    return Vue.component('dados-basicos', {

        'template': template,

        data: function () {
            return {
                dadosUsuario: {
                    nome: '',
                    idade: ''
                }
            };
        },

        props: {
            usuario: {
                type: Object,
                required: true
            }
        },

        mounted: function () {
            this.dadosUsuario = Object.assign({}, this.usuario);
        },

        watch: {
            dadosUsuario: {
                deep: true,
                handler: function() {
                    this.$emit('changed', this.dadosUsuario);
                }
            }
        }

    });
});