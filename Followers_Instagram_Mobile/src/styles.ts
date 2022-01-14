import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const ContainerInfo = styled.View`
  margin: 0px 10px;
`;

export const HeaderContainer = styled.View`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-right: 2px;
  font-family: "Roboto_500Medium";
`;

export const ProfileContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  margin-top: 60px;
  width: 68px;
  height: 68px;
  margin-bottom: 18px;

  border-top-right-radius: 34px;
  border-top-left-radius: 34px;
  border-bottom-right-radius: 34px;
  border-bottom-left-radius: 34px;
`;

export const ProfileContainerTextInfo = styled.View`
  display: flex;
  flex-direction: row;
  width: 350px;
  justify-content: space-around;
`;

export const ProfileContainerText = styled.View`
  display: flex;
  align-items: center;
`;

export const ProfileTextNumber = styled.Text`
font-size: 22px
  font-family: "Roboto_700Bold";
  color: #fff;
`;

export const ProfileText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: "Roboto_400Regular";
`;

export const ProfileButton = styled.TouchableOpacity`
  height: 46px;
  width: 196px;
  background-color: #01579b;
  margin-bottom: 20px;

  margin-top: 29px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
  align-items: center;

  font-family: "Roboto_700Bold";
`;

export const Cards = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Card = styled.TouchableOpacity`
  height: 95px;
  width: 150px;
  color: #4c94c6;

  margin-bottom: 18px;

  background-color: #121b24;

  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const CardTextInfo = styled.View`
  display: flex;

  flex-direction: column;
  justify-content: center;
`;

export const CardTextNumber = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
  color: #4c94c6;
  font-family: "Roboto_700Bold";
`;

export const CardText = styled.Text`
  font-size: 16px;
  color: #4c94c6;
  font-family: "Roboto_400Regular";
`;

export const CardInfoStatus = styled.View`
  background-color: #1a5889;

  height: 19px;
  width: 39px;

  color: #fff;
  font-size: 10px;

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin-top: -40px;
`;

export const CardInfoStatusText = styled.Text`
  font-size: 14px;
  color: #fff;
`;
