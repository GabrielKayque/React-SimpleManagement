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


    save = (product) => {
        this.validate(product)

        let products = localStorage.getItem(PRODUCTS)

        if(!products) {
            products = []
        }else {
            products = JSON.parse(products)
        }

        products.push(product);

        localStorage.setItem(PRODUCTS, JSON.stringify(products))
    }

 }