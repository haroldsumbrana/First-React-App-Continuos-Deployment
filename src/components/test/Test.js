import React, { Component } from 'react'

class Test extends Component {
state = {
title: '',
body: ''
}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => this.setState({
        title: json.title,
        body: json.body
    }));
}
// }
// componentWillMount() {
// console.log('componentWillMount...');
// }
// componentDidUpdate() {
// console.log('componentDidUpdate...');a
// }
// componentWillUpdate() {
// console.log('componentWillUpdate...');
// }

// componentWillReceiveProps(nextProps, NextState) {
// console.log('componentWillReceiveProps...');
// }
// static getDerivedStateFromProps(nextProps, Prevstate) {
// return null;
// }
// getSnapshotBeforeUpdate(prevProps, prevState) {
// console.log('getSnapshotBeforeUpdate...')
// }

render() {
const {title, body} = this.state;
return (
<div>
<h1 className="heading-4">
{title}
</h1>  
<p>
    {body}
</p>
</div>
)
}
}

export default Test;