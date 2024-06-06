const products = [
    {
        id: '1',
        name: 'ASYNCPostre Napoleon',
        price: 12000,
        category: 'postres',
        img: 'https://static.solopostres.com/uploads/2012/10/postre-napoleon.jpg',
        stock: 10,
        description: 'Delicioso postre Napoleon para 1 persona' 
    },
    {
        id: '2',
        name: 'ASYNCPostre Tres Leches',
        price: 10000,
        category: 'postres',
        img: 'https://cdn0.recetasgratis.net/es/posts/0/1/9/torta_tres_leches_8910_orig.jpg',
        stock: 20,
        description: 'Delicioso postre Tres Leches para deleitar el paladar'
    },
    {
        id: '3',
        name: 'ASYNCPudín Chocolate Blanco',
        price: 15000,
        category: 'pudines',
        img: 'https://www.deliciosi.com/images/2200/2274/tarta-de-oreo-y-chocolate-blanco.jpg',
        stock: 5,
        description: 'Exclusivo pudín de Chocolate Blanco para los más exigentes'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },300)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },400)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },400)
    })
}