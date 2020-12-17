define(["vue", "grid.component", "./components/dados-basicos.component"], function (Vue, grid, dadosBasicos) {

    return new Vue({

        el: "#usuario",

        components: {
            grid: grid,
            dadosBasicos: dadosBasicos
        },

        data: function () {
            return {

                colunas: [
                    { titulo: 'total', propriedade: 'total', width: 120 },
                    { titulo: 'Fatura', propriedade: 'numFatura', width: 220 }
                ],
                usuario: {
                    nome: "Lucas",
                    idade: "jovem"
                },
                faturas: []
            };
        },

        mounted: function () {
            this.carregarFaturas();
        },

        methods: {
            carregarFaturas: function () {
                // http.get()
                this.faturas = [
                    { total: 130.00, numFatura: '111222333-202003' },
                    { total: 185.00, numFatura: '111222333-202004' },
                ];
            },
            logBirula: function (parametro) {
                console.log(parametro);
            }
        }

    });

});