import { connect } from "react-redux"
import MotoblockItemsUnits from "./motoblock_items"
import TractorItemsUnits from "./tractor_items"
import WireItemsUnits from "./wire_items"


export const mapStateToProps = (state) => {
    return (
        {
            motoblockItems: state.productItem.productItemsMotoblock,
            tractorItems: state.productItem.productItemsTractor,
            wireItems: state.productItem.productItemsWire
        }
    )
}



export const MotoblockItems = connect(mapStateToProps)(MotoblockItemsUnits)
export const TractorItems = connect(mapStateToProps)(TractorItemsUnits)
export const WireItems = connect (mapStateToProps)(WireItemsUnits)



// export const TractorItems = connect(mapStateToProps)()


