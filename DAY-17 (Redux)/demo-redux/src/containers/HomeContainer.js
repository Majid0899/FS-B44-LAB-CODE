import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../service/action/action'

const mapStateToProps= state=>({

})

const mapDispatchToProps =dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)