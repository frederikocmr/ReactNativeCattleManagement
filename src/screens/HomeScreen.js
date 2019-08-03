import React, { Component }  from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/HomeScreen/Category'
import Home from '../components/HomeScreen/Home'
import Tag from '../components/HomeScreen/Tag'
import HomeImage from '../assets/images/home.jpg'
import ExperiencesImage from '../assets/images/experiences.jpg'
import RestaurantImage from '../assets/images/restaurant.jpg'
const { height, width } = Dimensions.get('window')

class HomeScreen extends Component {


  UNSAFE_componentWillMount() {

      this.scrollY = new Animated.Value(0)

      this.startHeaderHeight = 80
      this.endHeaderHeight = 50
      if (Platform.OS == 'android') {
          this.startHeaderHeight = 90 + StatusBar.currentHeight
          this.endHeaderHeight = 50 + StatusBar.currentHeight
      }

      this.animatedHeaderHeight = this.scrollY.interpolate({
          inputRange: [0, 50],
          outputRange: [this.startHeaderHeight, this.endHeaderHeight],
          extrapolate: 'clamp'
      })

      this.animatedOpacity = this.animatedHeaderHeight.interpolate({
          inputRange: [this.endHeaderHeight, this.startHeaderHeight],
          outputRange: [0, 1],
          extrapolate: 'clamp'
      })
      this.animatedTagTop = this.animatedHeaderHeight.interpolate({
          inputRange: [this.endHeaderHeight, this.startHeaderHeight],
          outputRange: [-30, 10],
          extrapolate: 'clamp'
      })
      this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
          inputRange: [this.endHeaderHeight, this.startHeaderHeight],
          outputRange: [50, 30],
          extrapolate: 'clamp'
      })


  }

  render() {
      return (
          <SafeAreaView style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>
                  <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                      <View style={{
                          flexDirection: 'row', padding: 10,
                          backgroundColor: 'white', marginHorizontal: 20,
                          shadowOffset: { width: 0, height: 0 },
                          shadowColor: 'black',
                          shadowOpacity: 0.2,
                          elevation: 1,
                          marginTop: Platform.OS == 'android' ? 20 : null
                      }}>
                          <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                          <TextInput
                              underlineColorAndroid="transparent"
                              placeholder="Buscar ..."
                              placeholderTextColor="grey"
                              style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                          />
                      </View>
                      <Animated.View
                          style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity }}
                      >
                          <Tag name="Guests" />
                          <Tag name="Dates" />

                      </Animated.View>
                  </Animated.View>
                  <ScrollView
                      scrollEventThrottle={16}
                      onScroll={Animated.event(
                          [
                              { nativeEvent: { contentOffset: { y: this.scrollY } } }
                          ]
                      )}
                  >
                      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                              What can we help you find, Varun?
                          </Text>

                          <View style={{ height: 130, marginTop: 20 }}>
                              <ScrollView
                                  horizontal={true}
                                  showsHorizontalScrollIndicator={false}
                              >
                                  <Category imageUri={HomeImage}
                                      name="Home"
                                  />
                                  <Category imageUri={ExperiencesImage}
                                      name="Experiences"
                                  />
                                  <Category imageUri={RestaurantImage}
                                      name="Restaurant"
                                  />
                              </ScrollView>
                          </View>
                          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                  Introducing Airbnb Plus
                              </Text>
                              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                  A new selection of homes verified for quality & comfort

                              </Text>
                              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                  <Image
                                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                      source={HomeImage}
                                  />

                              </View>
                          </View>
                      </View>
                      <View style={{ marginTop: 40 }}>
                          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                              Homes around the world
                          </Text>
                          <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                              <Home width={width}
                                  name="The Cozy Place"
                                  type="PRIVATE ROOM - 2 BEDS"
                                  price={82}
                                  rating={4}
                              />
                              <Home width={width}
                                  name="The Cozy Place"
                                  type="PRIVATE ROOM - 2 BEDS"
                                  price={82}
                                  rating={4}
                              />
                              <Home width={width}
                                  name="The Cozy Place"
                                  type="PRIVATE ROOM - 2 BEDS"
                                  price={82}
                                  rating={4}
                              />


                          </View>
                      </View>
                  </ScrollView>

              </View>
          </SafeAreaView>
      );
  }
}
export default HomeScreen;

HomeScreen.navigationOptions = {
  // header: null,
  title: 'Bem vindo!'
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});