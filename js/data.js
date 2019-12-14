/*
 * Arquivo: data.js
 * Autor: Paulo Alves
 * Descrição: módulo responsável pelos dados de pesquisa dos repositórios
 * Data: 13/12/2019
*/

import * as $ from './template.js'

const searchInput = document.querySelector('#search')
searchInput.addEventListener('keyup', search)

async function search(event) {
    if (event && event.keyCode === 13) {
        const searchQuery = searchInput.value
        let response = await fetch(`https://api.github.com/search/repositories?q=${searchQuery}`)
        response = await response.json()
        $.setList(response.items)
    }
}

export default{ search }