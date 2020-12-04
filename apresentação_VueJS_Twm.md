# Apresentação VueJS

## Histórico Javascript
  - javascript direto na página
  - **Bundle** -> juntar e distribuir os arquivos de forma otimizada
    - javascript e css são carregados na inicialização da página
    - `<script />`
    - `<style />`
    - formata_cpf('111111111')

  - **RequireJS** -> distribuir os arquivos
    - javascript é carregado por demanda
    - `require(["controllers/common/fatura/lista"]);`
    - `define(['jquery'], function(jQuery) { })` 
    - `jQuery('#birula').val()`
    - RequireJs.Net -> Controller/Action
      - scripts/controllers/nomeController/nomeAction

    - `formHelper.formata_cpf('11111111111');`
    - `formata_cpf('11111111111');`

  

# Mão na massa

## Tema
- Criar componente grid básico

## Requirimentos
 - Utilizar estrutura parecida com o TWM

## Etapas
  - [ ] Adicionar dependências em pasta local (não usar node_modules)
  - [ ] Configurar requireJS para buscar arquivos locais 
  - [ ] Apresentação básica requireJs
  - [ ] Criar componente grid



