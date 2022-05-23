import React from "react";


const firstState = {
        name: '',
        sku: '',
        description: '',
        price: '',
        supplier: ''
}


export default class RegisterProduct extends React.Component {

    state = firstState;

    onChange = (event) => {
        const value = event.target.value
        const field = event.target.name
        this.setState({ 
            [event.target.name]: value}) 
    }
    
    onSubmit = (event) => {
        console.log(this.state)
    }

    cleanFields = () => {
        this.setState(firstState)
    }


    render() {
        return (
            <div className="card">
                <div className="card-header">
                     REGISTER A PRODUCT
                </div>
                <div className="card-body" onChange={this.onChange}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Name: </label>
                                <input type="text" name="name"  value={this.state.name} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: </label>
                                <input type="text"  name="sku"  value={this.state.sku} className="form-control"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea name="description"  value={this.state.description} className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Price: </label>
                                <input type="number" name="price"  value={this.state.price} className="form-control"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Supplier: </label>
                                <input type="text" name="supplier"  value={this.state.supplier} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-1"><button onClick={this.onSubmit} className="btn btn-success">Save</button></div>
                        <div className="col-md-2"><button onClick={this.cleanFields} className="btn btn-primary">Clean All</button></div>
                    </div>

                </div>
            </div>
        );
    }

}