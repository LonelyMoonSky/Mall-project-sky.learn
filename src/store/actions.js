import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

export default {
    addCart(context, payload) {
        // payload新添加的商品 判断这个商品有没有在购物车里面
        // let oldProduct = null;
        // for (let item of state.cartList) {
        //     if (item.iid === payload.iid) {
        //         oldProduct = item;
        //     }
        // }
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            // 2.判断oldProduct有没有值
        if (oldProduct) {
            context.commit(ADD_COUNTER, oldProduct)
        } else {
            payload.count = 1
                // state.cartList.push(payload)
            context.commit(ADD_TO_CART, payload)
        }
    }
}