import React from 'react';
import { Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const CusHeader = (props) => {

    const { textStyle, viewStyle, putastyle }  = styles;

    return (
        <LinearGradient colors={['#C29E6B', '#9F8573']}
        style={putastyle}
        >
            <Header
                outerContainerStyles={{ 
                    backgroundColor: null,
                    height: 80,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,  

                    shadowColor: '#EEEEEE',
  shadowOffset: {
    width: 1000,
    height: 0
  },
  shadowRadius: 50,
  shadowOpacity: 1.0,
  elevation: 1

                    }}

                 innerContainerStyles={{ 
                     
                    }}

                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: props.headerText, style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />

        </LinearGradient>

    );
    
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 15,
    },
    textStyle: {
        fontSize: 20
    },
    testStyle: {
        backgroundColor: '#3D6DCC',
                
    },
    putastyle: {
        overflow: 'hidden',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,  
    }
};

export { CusHeader };