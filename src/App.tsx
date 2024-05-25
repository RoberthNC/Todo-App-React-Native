import {SafeAreaView, ScrollView} from 'react-native';
import {TodoScreen} from './presentation/screens';
import {globalStyles} from './config/theme/app-theme';

function App() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <TodoScreen />
    </SafeAreaView>
  );
}

export default App;
