import React from "react";
import ProductService from "../../app/productService";
import { Link } from "react-router-dom";

export default class ProductsCatalog extends React.Component {
    
    state = {
        products : []
    }

    constructor() {
        super()
        this.service = new ProductService(); 
    }

    componentDidMount(){
        const products = this.service.getProduct()
        this.setState({ products })
    }
    
    delete = (sku) => {
        const products = this.service.delete(sku)
        this.setState({products})
    }

    render () {
        return (
            <div className="card">
                <div className="card-header">
                    Products Catalog
                </div>
                <div className="card-body">

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>SKU</th>
                                <th>Price</th>
                                <th>Supplier</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map((product, key) => {
                                return (
                                    <tr key={key}>
                                        <th>{product.name}</th>
                                        <th>{product.sku}</th>
                                        <th>$ {product.price}</th>
                                        <th>{product.supplier}</th>
                                        <th>
                                            <Link to={`/register-products/${product.sku}`}><button className="btn btn-primary">Edit</button></Link>
                                            <button onClick={() => this.delete(product.sku)} className="btn btn-danger">Delete</button>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}