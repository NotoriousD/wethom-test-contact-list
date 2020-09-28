import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = null;

const Block = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { Block };
