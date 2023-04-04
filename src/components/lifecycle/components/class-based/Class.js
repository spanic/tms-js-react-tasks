import { Result } from 'antd';
import { Component } from 'react';

/**
 * See https://a-sadulin.notion.site/a-sadulin/React-components-lifecycle-a55e1fe2a694405a9b6d9910c335cce3 for explanation
 */

export default class Class extends Component {
  state = {};

  constructor(props) {
    console.log('✅ Constructor has been called');

    super(props);

    this.state = {
      status: 'warning',
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('✅ getDerivedStateFromProps has been called');

    return {
      ...state,
      status: props.status,
    };
  }

  componentDidMount() {
    console.log('✅ componentDidMount has been called');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('🔄 shouldComponentUpdate has been called');

    return nextProps.status !== this.props.status;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('🔄 getSnapshotBeforeUpdate has been called');

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('🔄 componentDidUpdate has been called');
  }

  componentWillUnmount() {
    console.log('❌ componentWillUnmount has been called');
  }

  render() {
    return (
      <Result
        status={this.state.status}
        title="Class-based component has been successfully mounted!"
        subTitle="Let's check how to use React.Component methods to bind to the component's lifecycle"
      />
    );
  }
}
