// import React, {useState, useEffect} from 'react';
// import styled from 'styled-components/native';
// import {FlatList} from 'react-native';
// import PostCard from '../../components/PostCard';
// import {AxiosResponse} from 'axios';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {HomeParamsList} from '../../navigations/Types';
// //HTTP
// import {useQuery} from 'react-query';
// import apiClient from '../../apis/service/client';
// import {Feed} from '../../apis/model/data';

// const SafeContainer = styled.SafeAreaView`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: ${props => props.theme.color.bg};
// `;

// export interface HomeProps {
//   navigation: StackNavigationProp<HomeParamsList, 'HomeView'>;
// }

// const getArticles = async () => {
//   const response = await apiClient.get<Feed[]>('/feeds');
//   return response.data;
// };

// const HomeView: React.FC<HomeProps> = () => {
//   const {data, isLoading} = useQuery('articles', getArticles);
//   const [posts, setPosts] = useState([]);
//   const [refresh, setRefresh] = useState<boolean>(false);

//   useEffect(() => {
//     fetchData();
//     console.log({data, isLoading});
//   }, []);

//   const fetchData = async () => {
//     await apiClient.get<Feed>('/feeds').then((response: AxiosResponse) => {
//       // console.log('HOME VIEW DATA : ', response.data);
//       setPosts(response.data);
//     });
//   };

//   const wait = (timeout: number) => {
//     return new Promise(resolve => setTimeout(resolve, timeout));
//   };

//   const refreshing = () => {
//     setRefresh(true);
//     wait(1400).then(() => setRefresh(false));
//     fetchData();
//   };

//   return (
//     <SafeContainer>
//       <FlatList
//         data={posts}
//         renderItem={({item}) => <PostCard item={item} />}
//         keyExtractor={item => item.id.toString()}
//         showsVerticalScrollIndicator={false}
//         onRefresh={() => refreshing()}
//         refreshing={refresh}
//       />
//     </SafeContainer>
//   );
// };

// export default HomeView;
