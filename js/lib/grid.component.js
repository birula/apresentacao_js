define(['vue'], function (Vue) {

    var templateGrid = `
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th 
                        v-for="(coluna, indice) in colunas" 
                        v-bind:width="coluna.width">
                        {{indice}} - {{coluna.titulo}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="linha in dados">
                    <td v-for="coluna in colunas">
                        {{linha[coluna.propriedade]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>`;

    return Vue.component("grid", {
        
        template: templateGrid,

        data: function() {
            return {
                nome: "birula"
            }
        },

        props: {
            colunas: {
                type: Array
            },
            dados: {
                type: Array
            }
        }
        
    });
});