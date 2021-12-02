import React, {Component} from 'react'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class ProductRow extends Component {
    destroy = () => {
        this.props.onDestroy(this.props.product.productId)
    }

    updateStatus = () => {
        this.props.updateStatus(this.props.product.productId)
    }

    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.category}</td>
                <td>{this.props.product.price}</td>
                <td>{capitalizeFirstLetter(String(this.props.product.inStock))}</td>
                <td className="text-right">
                    <button onClick={this.updateStatus} className="btn btn-info">
                        Change In Stock Status
                    </button>
                </td>
                <td>
                    <button onClick={this.destroy} className="btn btn-info">
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default ProductRow
