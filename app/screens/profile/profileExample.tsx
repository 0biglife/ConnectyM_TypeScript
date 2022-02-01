// // import React from 'react';
// // import styled from 'styled-components/native';
// // import {StackNavigationProp} from '@react-navigation/stack';
// // import {ProfileParamsList} from '../../navigations/Types';

// // const SafeViewContainer = styled.SafeAreaView`
// //   flex: 1;
// // `;

// // const ScrollViewContainer = styled.ScrollView`
// //   flex: 1;
// //   /* margin-top: 90; */
// //   /* padding-top: 35; */
// //   background-color: lightgray;
// // `;

// // // const AnimatedScrollView = Animated.createAnimatedComponent(ScrollViewContainer);

// // const PaddingView = styled.View`
// //   padding-top: 10px;
// //   padding-left: 10px;
// //   padding-right: 10px;
// // `;

// // const ProfileImage = styled.Image`
// //   width: 120px;
// //   height: 120px;
// //   border-radius: 75px;
// //   align-self: flex-start;
// //   border-width: 0.5px;
// //   border-color: lightgray;
// // `;

// // const UserTopInfoContainer = styled.View`
// //   flex-direction: row;
// //   justify-content: space-between;
// // `;

// // const UserInfoWrapper = styled.View`
// //   flex: 3;
// //   flex-direction: row;
// //   justify-content: space-around;
// //   align-self: center;
// //   padding-left: 10px;
// // `;

// // const UserInfoItem = styled.View`
// //   align-items: center;
// //   /* justify-content: center; */
// // `;

// // const UserInfoTitle = styled.Text`
// //   font-size: 14px;
// //   padding-top: 2px;
// //   color: darkgray;
// // `;

// // const UserInfoSubTitle = styled.Text`
// //   font-weight: 600;
// //   font-size: 16px;
// // `;

// // const InfoContainer = styled.View`
// //   padding: 4px;
// // `;

// // const UserName = styled.Text`
// //   font-size: 16px;
// //   padding-top: 10px;
// //   font-weight: 500;
// // `;

// // const UserDescription = styled.Text`
// //   font-size: 14px;
// //   padding-top: 4px;
// // `;

// // const UserButtonWrapper = styled.View`
// //   flex-direction: row;
// //   width: 100%;
// //   justify-content: space-between;
// //   padding-top: 4px;
// // `;

// // const UserButton = styled.TouchableOpacity`
// //   width: 30%;
// //   border-width: 1px;
// //   border-color: lightgray;
// //   border-radius: 6px;
// // `;

// // const UserButtonText = styled.Text`
// //   padding: 6px;
// //   font-size: 14px;
// //   align-self: center;
// // `;

// // export interface ProfileProps {
// //   navigation: StackNavigationProp<ProfileParamsList, 'Profile'>;
// // }

// // const profileView: React.FC<ProfileProps> = ({navigation}) => {
// //   return (
// //     <SafeViewContainer>

// //     </SafeViewContainer>
// //   );
// // };

// // export default profileView;
// import React, {useState, useEffect, useRef} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Dimensions,
//   Animated,
//   PanResponder,
//   Platform,
//   TouchableOpacity,
//   Alert,
//   StatusBar,
//   ActivityIndicator,
// } from 'react-native';
// import {TabView, TabBar} from 'react-native-tab-view';

// const AnimatedIndicator = Animated.createAnimatedComponent(ActivityIndicator);
// const windowHeight = Dimensions.get('window').height;
// const windowWidth = Dimensions.get('window').width;
// const TabBarHeight = 48;
// const HeaderHeight = 200;
// const SafeStatusBar = Platform.select({
//   ios: 44,
//   android: StatusBar.currentHeight,
// });
// const tab1ItemSize = (windowWidth - 30) / 2;
// const tab2ItemSize = (windowWidth - 40) / 3;
// const PullToRefreshDist = 150;

// const profileView = () => {
//   /**
//    * stats
//    */
//   const [tabIndex, setIndex] = useState<number>(0);
//   const [routes] = useState([
//     {key: 'tab1', title: 'Photo'},
//     {key: 'tab2', title: 'Track'},
//     {key: 'tab3', title: 'Info'},
//   ]);
//   const [canScroll, setCanScroll] = useState(true);
//   const [tab1Data] = useState(Array(4).fill(0));
//   const [tab2Data] = useState(Array(12).fill(0));

//   /**
//    * ref
//    */
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const headerScrollY = useRef(new Animated.Value(0)).current;
//   // for capturing header scroll on Android
//   const headerMoveScrollY = useRef(new Animated.Value(0)).current;
//   const listRefArr = useRef([]);
//   const listOffset = useRef({});
//   const isListGliding = useRef(false);
//   const headerScrollStart = useRef(0);
//   const _tabIndex = useRef(0);
//   const refreshStatusRef = useRef(false);

//   /**
//    * PanResponder for header
//    */
//   const headerPanResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
//       onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
//       onStartShouldSetPanResponder: (evt, gestureState) => {
//         headerScrollY.stopAnimation();
//         syncScrollOffset();
//         return false;
//       },

//       onMoveShouldSetPanResponder: (evt, gestureState) => {
//         headerScrollY.stopAnimation();
//         return Math.abs(gestureState.dy) > 5;
//       },
//       onPanResponderEnd: (evt, gestureState) => {
//         handlePanReleaseOrEnd(evt, gestureState);
//       },
//       onPanResponderMove: (evt, gestureState) => {
//         const curListRef = listRefArr.current.find(
//           (ref) => ref.key === routes[_tabIndex.current].key,
//         );
//         const headerScrollOffset = -gestureState.dy + headerScrollStart.current;
//         if (curListRef.value) {
//           // scroll up
//           if (headerScrollOffset > 0) {
//             curListRef.value.scrollToOffset({
//               offset: headerScrollOffset,
//               animated: false,
//             });
//             // start pull down
//           } else {
//             if (Platform.OS === 'ios') {
//               curListRef.value.scrollToOffset({
//                 offset: headerScrollOffset / 3,
//                 animated: false,
//               });
//             } else if (Platform.OS === 'android') {
//               if (!refreshStatusRef.current) {
//                 headerMoveScrollY.setValue(headerScrollOffset / 1.5);
//               }
//             }
//           }
//         }
//       },
//       onShouldBlockNativeResponder: () => true,
//       onPanResponderGrant: (evt, gestureState) => {
//         headerScrollStart.current = scrollY._value;
//       },
//     }),
//   ).current;

//   /**
//    * PanResponder for list in tab scene
//    */
//   const listPanResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
//       onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
//       onStartShouldSetPanResponder: (evt, gestureState) => false,
//       onMoveShouldSetPanResponder: (evt, gestureState) => {
//         headerScrollY.stopAnimation();
//         return false;
//       },
//       onShouldBlockNativeResponder: () => true,
//       onPanResponderGrant: (evt, gestureState) => {
//         headerScrollY.stopAnimation();
//       },
//     }),
//   ).current;

//   /**
//    * effect
//    */
//   useEffect(() => {
//     scrollY.addListener(({value}) => {
//       const curRoute = routes[tabIndex].key;
//       listOffset.current[curRoute] = value;
//     });

//     headerScrollY.addListener(({value}) => {
//       listRefArr.current.forEach((item) => {
//         if (item.key !== routes[tabIndex].key) {
//           return;
//         }
//         if (value > HeaderHeight || value < 0) {
//           headerScrollY.stopAnimation();
//           syncScrollOffset();
//         }
//         if (item.value && value <= HeaderHeight) {
//           item.value.scrollToOffset({
//             offset: value,
//             animated: false,
//           });
//         }
//       });
//     });
//     return () => {
//       scrollY.removeAllListeners();
//       headerScrollY.removeAllListeners();
//     };
//   }, [routes, tabIndex]);

//   /**
//    *  helper functions
//    */
//   const syncScrollOffset = () => {
//     const curRouteKey = routes[_tabIndex.current].key;

//     listRefArr.current.forEach((item) => {
//       if (item.key !== curRouteKey) {
//         if (scrollY._value < HeaderHeight && scrollY._value >= 0) {
//           if (item.value) {
//             item.value.scrollToOffset({
//               offset: scrollY._value,
//               animated: false,
//             });
//             listOffset.current[item.key] = scrollY._value;
//           }
//         } else if (scrollY._value >= HeaderHeight) {
//           if (
//             listOffset.current[item.key] < HeaderHeight ||
//             listOffset.current[item.key] == null
//           ) {
//             if (item.value) {
//               item.value.scrollToOffset({
//                 offset: HeaderHeight,
//                 animated: false,
//               });
//               listOffset.current[item.key] = HeaderHeight;
//             }
//           }
//         }
//       }
//     });
//   };

//   const startRefreshAction = () => {
//     if (Platform.OS === 'ios') {
//       listRefArr.current.forEach((listRef) => {
//         listRef.value.scrollToOffset({
//           offset: -50,
//           animated: true,
//         });
//       });
//       refresh().finally(() => {
//         syncScrollOffset();
//         // do not bounce back if user scroll to another position
//         if (scrollY._value < 0) {
//           listRefArr.current.forEach((listRef) => {
//             listRef.value.scrollToOffset({
//               offset: 0,
//               animated: true,
//             });
//           });
//         }
//       });
//     } else if (Platform.OS === 'android') {
//       Animated.timing(headerMoveScrollY, {
//         toValue: -150,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//       refresh().finally(() => {
//         Animated.timing(headerMoveScrollY, {
//           toValue: 0,
//           duration: 300,
//           useNativeDriver: true,
//         }).start();
//       });
//     }
//   };

//   const handlePanReleaseOrEnd = (evt, gestureState) => {
//     // console.log('handlePanReleaseOrEnd', scrollY._value);
//     syncScrollOffset();
//     headerScrollY.setValue(scrollY._value);
//     if (Platform.OS === 'ios') {
//       if (scrollY._value < 0) {
//         if (scrollY._value < -PullToRefreshDist && !refreshStatusRef.current) {
//           startRefreshAction();
//         } else {
//           // should bounce back
//           listRefArr.current.forEach((listRef) => {
//             listRef.value.scrollToOffset({
//               offset: 0,
//               animated: true,
//             });
//           });
//         }
//       } else {
//         if (Math.abs(gestureState.vy) < 0.2) {
//           return;
//         }
//         Animated.decay(headerScrollY, {
//           velocity: -gestureState.vy,
//           useNativeDriver: true,
//         }).start(() => {
//           syncScrollOffset();
//         });
//       }
//     } else if (Platform.OS === 'android') {
//       if (
//         headerMoveScrollY._value < 0 &&
//         headerMoveScrollY._value / 1.5 < -PullToRefreshDist
//       ) {
//         startRefreshAction();
//       } else {
//         Animated.timing(headerMoveScrollY, {
//           toValue: 0,
//           duration: 300,
//           useNativeDriver: true,
//         }).start();
//       }
//     }
//   };

//   const onMomentumScrollBegin = () => {
//     isListGliding.current = true;
//   };

//   const onMomentumScrollEnd = () => {
//     isListGliding.current = false;
//     syncScrollOffset();
//     // console.log('onMomentumScrollEnd');
//   };

//   const onScrollEndDrag = (e) => {
//     syncScrollOffset();

//     const offsetY = e.nativeEvent.contentOffset.y;
//     // console.log('onScrollEndDrag', offsetY);
//     // iOS only
//     if (Platform.OS === 'ios') {
//       if (offsetY < -PullToRefreshDist && !refreshStatusRef.current) {
//         startRefreshAction();
//       }
//     }

//     // check pull to refresh
//   };

//   const refresh = async () => {
//     console.log('-- start refresh');
//     refreshStatusRef.current = true;
//     await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('done');
//       }, 2000);
//     }).then((value) => {
//       console.log('-- refresh done!');
//       refreshStatusRef.current = false;
//     });
//   };

//   /**
//    * render Helper
//    */
//   const renderHeader = () => {
//     const y = scrollY.interpolate({
//       inputRange: [0, HeaderHeight],
//       outputRange: [0, -HeaderHeight],
//       extrapolateRight: 'clamp',
//       // extrapolate: 'clamp',
//     });
//     return (
//       <Animated.View
//         {...headerPanResponder.panHandlers}
//         style={[styles.header, {transform: [{translateY: y}]}]}>
//         <TouchableOpacity
//           style={{flex: 1, justifyContent: 'center'}}
//           activeOpacity={1}
//           onPress={() => Alert.alert('header Clicked!')}>
//           <Text>Pull to Refresh Header</Text>
//         </TouchableOpacity>
//       </Animated.View>
//     );
//   };

//   const rednerTab1Item = ({item, index}) => {
//     return (
//       <View
//         style={{
//           borderRadius: 16,
//           marginLeft: index % 2 === 0 ? 0 : 10,
//           width: tab1ItemSize,
//           height: tab1ItemSize,
//           backgroundColor: '#aaa',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text>{index}</Text>
//       </View>
//     );
//   };

//   const rednerTab2Item = ({item, index}) => {
//     return (
//       <View
//         style={{
//           marginLeft: index % 3 === 0 ? 0 : 10,
//           borderRadius: 16,
//           width: tab2ItemSize,
//           height: tab2ItemSize,
//           backgroundColor: '#aaa',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text>{index}</Text>
//       </View>
//     );
//   };

//   const renderLabel = ({route, focused}) => {
//     return (
//       <Text style={[styles.label, {opacity: focused ? 1 : 0.5}]}>
//         {route.title}
//       </Text>
//     );
//   };

//   const renderScene = ({route}) => {
//     const focused = route.key === routes[tabIndex].key;
//     let numCols;
//     let data;
//     let renderItem;
//     switch (route.key) {
//       case 'tab1':
//         numCols = 2;
//         data = tab1Data;
//         renderItem = rednerTab1Item;
//         break;
//       case 'tab2':
//         numCols = 3;
//         data = tab2Data;
//         renderItem = rednerTab2Item;
//         break;
//       default:
//         return null;
//     }
//     return (
//       <Animated.FlatList
//         scrollToOverflowEnabled={true}
//         // scrollEnabled={canScroll}
//         {...listPanResponder.panHandlers}
//         numColumns={numCols}
//         ref={(ref) => {
//           if (ref) {
//             const found = listRefArr.current.find((e) => e.key === route.key);
//             if (!found) {
//               listRefArr.current.push({
//                 key: route.key,
//                 value: ref,
//               });
//             }
//           }
//         }}
//         scrollEventThrottle={16}
//         onScroll={
//           focused
//             ? Animated.event(
//                 [
//                   {
//                     nativeEvent: {contentOffset: {y: scrollY}},
//                   },
//                 ],
//                 {useNativeDriver: true},
//               )
//             : null
//         }
//         onMomentumScrollBegin={onMomentumScrollBegin}
//         onScrollEndDrag={onScrollEndDrag}
//         onMomentumScrollEnd={onMomentumScrollEnd}
//         ItemSeparatorComponent={() => <View style={{height: 2}} />}
//         ListHeaderComponent={() => <View style={{height: 2}} />}
//         contentContainerStyle={{
//           paddingTop: HeaderHeight + TabBarHeight,
//           paddingHorizontal: 10,
//           minHeight: windowHeight - SafeStatusBar + HeaderHeight,
//         }}
//         showsHorizontalScrollIndicator={false}
//         data={data}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     );
//   };

//   const renderTabBar = (props) => {
//     const y = scrollY.interpolate({
//       inputRange: [0, HeaderHeight],
//       outputRange: [HeaderHeight, 0],
//       // extrapolate: 'clamp',
//       extrapolateRight: 'clamp',
//     });
//     return (
//       <Animated.View
//         style={{
//           top: 0,
//           zIndex: 1,
//           position: 'absolute',
//           transform: [{translateY: y}],
//           width: '100%',
//         }}>
//         <TabBar
//           {...props}
//           onTabPress={({route, preventDefault}) => {
//             if (isListGliding.current) {
//               preventDefault();
//             }
//           }}
//           style={styles.tab}
//           renderLabel={renderLabel}
//           indicatorStyle={styles.indicator}
//         />
//       </Animated.View>
//     );
//   };

//   const renderTabView = () => {
//     return (
//       <TabView
//         onSwipeStart={() => setCanScroll(false)}
//         onSwipeEnd={() => setCanScroll(true)}
//         onIndexChange={(id) => {
//           _tabIndex.current = id;
//           setIndex(id);
//         }}
//         navigationState={{index: tabIndex, routes}}
//         renderScene={renderScene}
//         renderTabBar={renderTabBar}
//         initialLayout={{
//           height: 0,
//           width: windowWidth,
//         }}
//       />
//     );
//   };

//   const renderCustomRefresh = () => {
//     // headerMoveScrollY
//     return Platform.select({
//       ios: (
//         <AnimatedIndicator
//           style={{
//             top: -50,
//             position: 'absolute',
//             alignSelf: 'center',
//             transform: [
//               {
//                 translateY: scrollY.interpolate({
//                   inputRange: [-100, 0],
//                   outputRange: [120, 0],
//                   extrapolate: 'clamp',
//                 }),
//               },
//             ],
//           }}
//           animating
//         />
//       ),
//       android: (
//         <Animated.View
//           style={{
//             transform: [
//               {
//                 translateY: headerMoveScrollY.interpolate({
//                   inputRange: [-300, 0],
//                   outputRange: [150, 0],
//                   extrapolate: 'clamp',
//                 }),
//               },
//             ],
//             backgroundColor: '#eee',
//             height: 38,
//             width: 38,
//             borderRadius: 19,
//             borderWidth: 2,
//             borderColor: '#ddd',
//             justifyContent: 'center',
//             alignItems: 'center',
//             alignSelf: 'center',
//             top: -50,
//             position: 'absolute',
//           }}>
//           <ActivityIndicator animating />
//         </Animated.View>
//       ),
//     });
//   };

//   return (
//     <View style={styles.container}>
//       {renderTabView()}
//       {renderHeader()}
//       {renderCustomRefresh()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: HeaderHeight,
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'absolute',
//     backgroundColor: '#FFA088',
//   },
//   label: {fontSize: 16, color: '#222'},
//   tab: {
//     elevation: 0,
//     shadowOpacity: 0,
//     backgroundColor: '#FFCC80',
//     height: TabBarHeight,
//   },
//   indicator: {backgroundColor: '#222'},
// });

// export default profileView;
