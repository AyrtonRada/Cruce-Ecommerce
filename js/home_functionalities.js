window.addEventListener('load', () => {
    
    let d = document
    /**
     ** Ocultar el Top Banner Mobile
     */
    let botonBanner = d.getElementById('cerrado')
    let topBanner = d.getElementById('top_banner')

    botonBanner.addEventListener('click', () => {
        topBanner.style.display = 'none'
    })

    /**
     ** Ocultar Pestaña
     */

    let pestana = d.getElementById('pestana')
    let botonControl = d.getElementById('control')

    botonControl.addEventListener('click', () => {
        pestana.style.display = 'none'
    })
    
    /**
     * *Buscador Mobile
     */

    let buscador = d.getElementById('sugerencia')
    let lista = d.getElementById('lista_buscador')

    // Articulos
    let articulo1 = d.getElementById('nombre').textContent
    let articulo2 = d.getElementById('nombre_2').textContent
    let articulo3 = d.getElementById('nombre_3').textContent
    let articulo4 = d.getElementById('nombre_4').textContent

    buscador.addEventListener('keyup', () => {

        let textoMinuscula = buscador.value.toLowerCase()
        let articulos = (articulo1 + articulo2 + articulo3 + articulo4)
        let arrayArticulos = articulos.split(' ')

        //console.log(arrayArticulos)

        //let arrayLista = arrayArticulos.filter( a => a !== ' ')

        console.log(arrayArticulos)

        lista.innerHTML = ""
        
        for ( let articulo of arrayArticulos){
            let palabra = articulo.toLowerCase()

            //console.log(palabra)

            if (palabra.indexOf(textoMinuscula) !== -1){
                lista.innerHTML += `<li>`+`${articulo}`+`<li>`
            } 
        }
        
        if( buscador.value == ""){
            lista.innerHTML = ""
        }

    })


    //***** Escritorio *****/

     /**
     ** Ocultar el Top Banner 
     */
     let bBannerDesk = d.getElementById('cerrado_desk')
     let tpBannerDesk = d.getElementById('top_banner_desk')
 
     bBannerDesk.addEventListener('click', () => {
         tpBannerDesk.style.display = 'none'
     })

})