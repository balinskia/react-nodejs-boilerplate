import React from 'react'
import { connect } from "react-redux"

//Components
import { HelloWorld } from '../components/HelloWorld'

//Actions
import { start } from '../actions'

class Root extends React.Component {
    componentDidMount() {
        if (!this.props.who) this.props.start();
    }

    render() {
        const { who="" } = this.props;
        return (
            <div id="content">
                <HelloWorld who={who} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        start: () => dispatch(start())
    }
}

export default connect(state => state, mapDispatchToProps)(Root);
