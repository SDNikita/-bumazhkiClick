import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/gameStyles';


export default function GameScreen() {
  const [papers, setPapers] = useState(0);
  const papersPerClick = 1;
  const papersPerSecond = 0;

  function handleClick() {
    setPapers((previous) => previous + papersPerClick);
  }
  
  return (
    <SafeAreaView style = {styles.screen} edges={['top','left','right']}>
        <View style = {styles.content}>
          <Text style = {styles.title}>Бумажки</Text>
          
          <View style = {styles.stats}>
            <Text style={styles.balance} numberOfLines={1} adjustsFontSizeToFit>
              {papers.toLocaleString('ru-RU')}
            </Text>

            <Text style={styles.income}>
              +{papersPerClick} за клик · +{papersPerSecond} в секунду
            </Text>
          </View>

          <View style={styles.clickArea}>
            <Pressable
              accessibilityRole='button'
              accessibilityLabel='Собрать бумажки'
              onPress = {handleClick}
              style = {({pressed})=>[styles.stackButton, pressed && styles.stackPressed]}>
              <Image
                source={require('../../../assets/images/paper-stack.png')}
                style = {styles.stack}
                resizeMode='contain'/>
            </Pressable>
            <Text style = {styles.hint}>Жми на стопку</Text>

          </View>
        </View>
    </SafeAreaView>
  );
}