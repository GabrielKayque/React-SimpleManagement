import React from "react";


export class ProductsCatalog extends React.Component {

    state = {
        products : []
    }

    render () {
        return (
            <table>
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
                    {this.state.products.map( product => {
                        return (
                            <tr>
                                <th>{product.name}</th>
                                <th>{product.sku}</th>
                                <th>{product.price}</th>
                                <th>{product.supplier}</th>
                                <th></th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}
