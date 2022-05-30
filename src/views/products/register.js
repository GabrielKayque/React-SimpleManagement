import React from "react";
import ProductService from "../../app/productService";


const firstState = {
        name: '',
        sku: '',
        description: '',
        price: '',
        supplier: '',
        success: false,
        errors: []

}


export default class RegisterProduct extends React.Component {
    
    state = firstState;

    constructor(){
        super()
        this.service = new ProductService()
    }

    onChange = (event) => {
        const value = event.target.value
        const field = event.target.name
        this.setState({ 
            [field]: value}) 
    }
    
    onSubmit = (event) => {
        const product = {
            name: this.state.name,
            sku: this.state.sku,
            description: this.state.description,
            price: this.state.price,
            supplier: this.state.supplier
        }
        try{
            this.service.save(product)
            this.cleanFields()
            this.setState({ success: true})
        }catch(error){
            const errors = error.errors
            this.setState({ errors: errors})
        }
    }

    cleanFields = () => {
        this.setState(firstState)
    }

    hide = (event) => {
        this.setState({
            [event.target.name]: false
        })
    }


    render() {
        return (
            <div className="card">
                <div className="card-header">
                     REGISTER A PRODUCT
                     <p><small><small>* Mandatory Fields</small></small></p>
                </div>
                <div className="card-body" onChange={this.onChange}>
                    
                    {/* this is conditionally rendering the alert box SUCCESS message */}
                    {this.state.success &&
                        (
                            <div className="alert alert-dismissible alert-success">
                                <button type="button" name="success" onClick={this.hide} className="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Well done!</strong> You successfully registered a product.
                            </div>
                        )
                    }
                    {/* this is conditionally rendering the alert box ERROR message */}
                    {this.state.errors.length > 0 &&
                        this.state.errors.map(message => {
                            return (
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                    <strong>ERROR!</strong> {message}
                                </div>
                            )
                        })
                    }

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Name: *</label>
                                <input type="text" name="name"  value={this.state.name} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text"  name="sku"  value={this.state.sku} className="form-control"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Description: </label>
                                <textarea name="description"  value={this.state.description} className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Price: *</label>
                                <input type="number" name="price"  value={this.state.price} className="form-control"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Supplier: *</label>
                                <input type="text" name="supplier"  value={this.state.supplier} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-2 col-md-2 col-lg-1"><button onClick={this.onSubmit} className="btn btn-success">Save</button></div>
                        <div className="col-sm-2 col-md-2"><button onClick={this.cleanFields} className="btn btn-primary">Clean All</button></div>
                    </div>

                </div>
            </div>
        );
    }

}