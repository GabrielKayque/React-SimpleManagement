import React, { Component } from "react";
import ProductService from "../../app/productService";
import { useParams } from "react-router-dom";


const firstState = {
        name: '',
        sku: '',
        description: '',
        price: '',
        supplier: '',
        success: false,
        errors: [],
        editing: false

}


export function RegisterProductParam() {
    const {sku} = useParams();
    return (< RegisterProduct sku={sku} />)
}

export default class RegisterProduct extends Component {
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

    componentDidMount(){
        if(this.props.sku){
            const { sku } = this.props
            const result = this.service.getProduct().filter( product => product.sku === sku)
            if(result.length === 1){
                const productFound = result[0]
                this.setState({...productFound, editing:true})
            }
        }
    }


    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.state.editing ? 'EDITING ' : 'REGISTER A '}
                    PRODUCT
                    <p><small><small>* Mandatory Fields</small></small></p>
                </div>
                <div className="card-body">
                    
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
                                <input type="text" name="name" onChange={this.onChange} value={this.state.name} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" name="sku" disabled={this.state.editing} onChange={this.onChange} value={this.state.sku} className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Description: </label>
                                <textarea name="description"  onChange={this.onChange} value={this.state.description} className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Price: *</label>
                                <input type="number" name="price"  onChange={this.onChange} value={this.state.price} className="form-control"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Supplier: *</label>
                                <input type="text" name="supplier"  onChange={this.onChange} value={this.state.supplier} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-2 col-md-2 col-lg-1"><button onClick={this.onSubmit} className="btn btn-success">{this.state.editing ? 'Update' : 'Save'}</button></div>
                        <div className="col-sm-3 col-md-2"><button onClick={this.cleanFields} className="btn btn-primary">Clean All</button></div>
                    </div>

                </div>
            </div>
        );
    }

}