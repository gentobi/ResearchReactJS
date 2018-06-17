import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }
    
    onEdit = () => {alert('button Edit was clicked')};

    onRemove =() => {
        alert("button remove was clicked");
    }
    render() {
        return (
            
                <div className="col-md-4">
                    <div className="row align-items-center">
                        <div className={"col-md-4 " + this.props.imagePosition}>
                            <div className="p-1">
                                <img className="img-fluid rounded-circle" src={this.props.image} alt />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="p-1 align-items-left">
                                <p className="display-6 align-items-left h3">
                                    {this.props.title}
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='row align-items-left'>
                        <p>{this.props.content}</p>
                    </div>
                     <hr/>
                    <div className='row'>
                        <div className='btn btn-group'>
                            <div className='btn btn-info' onClick={this.onEdit}>Edit</div>
                            <div className='btn btn-warning' onClick={this.onRemove}>Remove</div>
                        </div>
                    </div>
                   
                </div>
          
        );
    }
}

export default Content;