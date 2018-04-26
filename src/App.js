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
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />

            <LibraryList />
        </View>
        </Provider>
    );
};

export default App;