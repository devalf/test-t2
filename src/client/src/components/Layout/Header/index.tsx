import {connect} from 'react-redux';

import Component from './component';

import {selectCartContents} from 'state/cart/selectors';
import {openModal} from 'state/modal/actions';

const mapStateToProps = (state) => ({
    contents: selectCartContents(state)
});

const mapDispatchToProps = (dispatch) => ({
    openCartModal: () => dispatch(openModal({id: 'CART_MODAL'}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
