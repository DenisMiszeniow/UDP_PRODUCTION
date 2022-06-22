
import { connect } from "react-redux"
import MotoblockItemsUnits from "./motoblock_items"
import TractorItemsUnits from "./tractor_items"
import WireItemsUnits from "./wire_items"
import { motoblockItemsAC, tractorItemsAC, wireItemsAC } from "../../../redux/product_item_reducer"



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
            motoblockItemsDisp: (motoblockItems) => {dispatch(motoblockItemsAC(motoblockItems))},
            tractorItemsDisp: (tractorItems) => {dispatch(tractorItemsAC(tractorItems))},
            wireItemsDisp: (wireItems) => {dispatch(wireItemsAC(wireItems))}
        }
    )
}


export const MotoblockItems = connect(mapStateToProps, mapDispatchToProps)(MotoblockItemsUnits)
export const TractorItems = connect(mapStateToProps, mapDispatchToProps)(TractorItemsUnits)
export const WireItems = connect (mapStateToProps, mapDispatchToProps)(WireItemsUnits)



// export const TractorItems = connect(mapStateToProps)()


