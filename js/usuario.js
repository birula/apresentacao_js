define(["vue", "grid.component"], function (Vue, grid) {

    return new Vue({

        el: "#usuario",

        components: {
            grid: grid
        },

        data: function () {
            return {
                nome: "Lucas",
                idade: "jovem",
                colunas: [
                    { titulo: 'total', propriedade: 'total', width: 120 }, 
                    { titulo: 'Fatura', propriedade: 'numFatura', width: 220 }
                ],
                dados: [
                    { total: 130.00, numFatura: '111222333-202003' },
                    { total: 185.00, numFatura: '111222333-202004' },
                ]
            };
        }

    });

});