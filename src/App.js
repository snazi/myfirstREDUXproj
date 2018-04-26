import React from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {Header} from 'react-native-elements';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        <Provider store={ createStore(reducers) }>
        <View style={{flex:1}}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'wooh redux', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />

            <LibraryList />
        </View>
        </Provider>
    );
};

export default App;