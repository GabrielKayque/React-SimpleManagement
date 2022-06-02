 const PRODUCTS = '_PRODUCTS';

 export function ValidationError(errors) {
     this.errors = errors;
 }

 export default class ProductService {

    validate = (product) => {
        const errors = []

        // possible errors
        if(!product.name) errors.push('NAME is mandatory!')     
        if(!product.sku) errors.push('SKU is mandatory!')    
        if(!product.price || product.price <= 0) errors.push('PRICE needs to be greater than 0!')
        if(!product.supplier) errors.push('SUPPLIER is mandatory')


        if(errors.length > 0) {
            throw new ValidationError(errors)
        }
    }

    getProduct = () => {
        let products = localStorage.getItem(PRODUCTS)
        if(products) {
            return JSON.parse(products) 
        }
        
    }

    getIndex = (sku) => {
        let index = null
        this.getProduct().forEach((product, i) => {
            if (product.sku == sku) {
                index = i
            }
        });
        return index
    }

    delete = (sku) => {
        const index = this.getIndex(sku)
        if(index !== null){
            const products = this.getProduct()
            products.splice(index, 1)
            localStorage.setItem(PRODUCTS, JSON.stringify(products))
            return products
        }
    }

    save = (product) => {
        this.validate(product)

        let products = localStorage.getItem(PRODUCTS)

        if(!products) {
            products = []
        }else {
            products = JSON.parse(products)
        }

        const index = this.getIndex(product.sku)
        console.log(index)
        if(index === null) {
            products.push(product);
        }else{
            products[index] = product
        }

        localStorage.setItem(PRODUCTS, JSON.stringify(products))
    }

 }
