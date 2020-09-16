import React from 'react';
import md5 from 'md5';

class Form extends React.Component {

    constructor(props) {
        super(props);

        const method = props.request.method || 'get';
        const url = props.request.url || '';
        const data = props.request.data ? JSON.stringify(props.request.data) : '';

        this.state = {
            request: {
                method,
                url,
                data
            }
        };

    }

    componentDidUpdate(props) {

        // we're doing something tricky in this component
        // where state is tied to props at particular times
        // i.e. at first render and when user clicks on call in history
        // so we need this business to determine if anything has really changed
        // otherwise we go into react render spiral

        const nextHash = md5(JSON.stringify(props.request));
        const stateHash = md5(JSON.stringify(this.state.request));

        // console.log('props.request', props.request);
        // console.log('state.request', this.state.request);

        if (nextHash === stateHash) return;

        // update state based on props if we've been cleared above
        const request = { ...props.request };

        console.log('componentDidUpdate', request);
        this.setState({ request });
    }

    changeURL = (e) => {
        let url = e.target.value;
        const newRequest = { ...this.state.request, url };
        console.log('changeURL', newRequest);
        this.setState({ request: newRequest });
    };

    changeMethod = (method) => {
        const newRequest = { ...this.state.request, method };

        this.setState({ request: newRequest });
    };

    changeBody = (e) => {
        try {
            let data = JSON.parse(e.target.value);
            const newRequest = { ...this.state.request, data };

            this.setState({ request: newRequest });
        } catch (e) { }
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.props.handler(this.state.request);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="url"
                        defaultValue={this.state.request.url}
                        placeholder="http://api.url.here"
                        onChange={this.changeURL}
                    />
                    <button>GO!</button>
                </div>
                <div className="methods">
                    <span className={`method ${this.state.request.method === 'get'}`} onClick={() => this.changeMethod('get')}>
                        GET
        </span>
                    <span className={`method ${this.state.request.method === 'post'}`} onClick={() => this.changeMethod('post')}>
                        POST
        </span>
                    <span className={`method ${this.state.request.method === 'put'}`} onClick={() => this.changeMethod('put')}>
                        PUT
        </span>
                    <span className={`method ${this.state.request.method === 'delete'}`} onClick={() => this.changeMethod('delete')}>
                        DELETE
        </span>

                    <textarea name="data" onChange={this.changeBody} defaultValue={this.state.request.data} />

                </div>
            </form >
        );
    }
}

export default Form;
