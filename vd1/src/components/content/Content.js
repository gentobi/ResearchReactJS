import React, {Component} from 'react';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: true
        };
    }

    onEdit = () => {
        // alert('button Edit was clicked')
        this.setState({status: false});
    };

    // onRemove = () => {
    //     // alert("button remove was clicked");
    //     this.notifyWithOption("message");
    // }

    onSave = () => {
        this.setState({status: true});
        console.log(this.temp.value);
        
    }
    notifyWithOption = (message) => {
        alert("Button Remove was clicked: " + message);
    }

    displayCheck = () => {
        if (this.state.status === true) {
            return this.renderButton();
        } else {
            return this.renderForm();
        }
    }
    renderButton = () => (
        <div className='row'>
            <div className='btn btn-group'>
                <div className='btn btn-info' onClick={() => this.onEdit()}>Edit</div>
                {/* <div className='btn btn-warning' onClick={this.onRemove}>Remove</div> */}
                {/* <div className='btn btn-warning' onClick={() => this.onRemove()}>Remove</div> */}
                {/* <div className='btn btn-warning' onClick={() => this.notifyWithOption("this is message with arrow function")}>Remove</div> */}
                <div className='btn btn-warning'
                     onClick={this.notifyWithOption.bind(this, "this is message with bind")}>Remove
                </div>
            </div>
        </div>
    )

    renderForm = () => (
        <div className='row'>
            <div className='form-group pl-3'>
                <input ref={(inputValue) => {this.temp = inputValue}} defaultValue={this.props.title} type='text' name='title' className='form-control'/>
                <div className='mt-2 btn btn-block btn-success' onClick={() => this.onSave()}>Save</div>
            </div>
        </div>)

    componentWillMount() {
        console.log('Component will mounted');
    }
    
    componentDidMount() {
        console.log("Component did mounted");
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log("Component should update ---");
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Component will update ---");
    }

    componentDidUpdate(nextProps, nextState){
        console.log("Component did update ---");
    }

    render() {
        return (

            <div className="col-md-4">
                <div className="row align-items-center">
                    <div className={"col-md-4 " + this.props.imagePosition}>
                        <div className="p-1">
                            <img className="img-fluid rounded-circle" src={this.props.image} alt=""/>
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
                {this.displayCheck()}
            </div>

        );
    }
}

export default Content;