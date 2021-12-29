import React from 'react';
import styled from 'styled-components/native';
//Redux
import { connect } from 'react-redux';
import { signUp } from '../store/actions/user_actions';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';

const Container = styled.View`
  width: 90%;
  align-self: center;
  background-color: #e3e3e3;
  border-radius: 6px;
  margin-top: 10px;
`;

const CustomInput = styled.TextInput`
  padding: 15px;
`;

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input: React.FC<Props> = props => {
  return (
    <Container>
      <CustomInput
        {...props}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry || false}
        onChangeText={props.onChangeText}
      />
    </Container>
  );
};

// const mapStatetoProps = (state) => {
//   return {
//     User: state.User,
//   };
// };

// const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
//   return bindActionCreators({signUp}, dispatch);
// };

// export default connect(mapStatetoProps, mapDispatchToProps)(Input);

export default Input;
