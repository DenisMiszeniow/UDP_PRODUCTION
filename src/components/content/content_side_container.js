
import { connect } from "react-redux"
import ContentSide from "./content_side"


export const mapStateToProps = (state) => {
    return (
        {
            serviseId: state.serviceItem.menuItems
        }
    )
}

export const ContentSideContainer = connect(mapStateToProps)(ContentSide)

