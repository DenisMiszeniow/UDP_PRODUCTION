
import { connect } from "react-redux"
import MotoblockItemsUnits from "./motoblock_items"
import TractorItemsUnits from "./tractor_items"
import WireItemsUnits from "./wire_items"
import { motoblockItemsAC } from "../../../redux/product_item_reducer"



export const mapStateToProps = (state) => {
    return (
        {
            motoblockItems: state.productItem.productItemsMotoblock,
            tractorItems: state.productItem.productItemsTractor,
            wireItems: state.productItem.productItemsWire
        }
    )
}
export const mapDispatchToProps = (dispatch) => {
    return (
        {
            motoblockItemsDisp: (motoblockItems) => {dispatch(motoblockItemsAC(motoblockItems))}
        }
    )
}



export const MotoblockItems = connect(mapStateToProps, mapDispatchToProps)(MotoblockItemsUnits)
export const TractorItems = connect(mapStateToProps)(TractorItemsUnits)
export const WireItems = connect (mapStateToProps)(WireItemsUnits)



// export const TractorItems = connect(mapStateToProps)()


