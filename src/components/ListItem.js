import React, {Component} from 'react';
import {
    Text, 
    TouchableWithoutFeedback, 
    View, 
    UIManager,
    LayoutAnimation,
    Platform
} from 'react-native';
import {connect} from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';




class ListItem extends Component {

    componentDidUpdate() {
        if (Platform.OS === "android") {
            UIManager.setLayoutAnimationEnabledExperimental &&
              UIManager.setLayoutAnimationEnabledExperimental(true);
            LayoutAnimation.spring();
          }
          
        LayoutAnimation.spring();
    }

    renderDescription(){
        const {item, expanded} = this.props;

        if(expanded){
            return (
                <CardSection>
                    <Text style={{ flex: 1,
                                    padding: 20 }}>
                        {item.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {

        const { titleStyle } = styles;
        const { id, title } = this.props.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
            <View>
                <CardSection>
                    <Text style={titleStyle}>
                        {title}
                    </Text>
                </CardSection>
                {this.renderDescription()}
            </View>
            </TouchableWithoutFeedback>
        );
       
    }
}

const styles = {
    titleStyle: {
        fontSize: 20,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.item.id;

    return{expanded}
};

export default connect(mapStateToProps, actions)(ListItem);