import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  ContainerInfo,
  HeaderText,
  HeaderContainer,
  HeaderInfo,
  ProfileContainer,
  ProfileImage,
  ProfileContainerTextInfo,
  ProfileContainerText,
  ProfileText,
  ProfileTextNumber,
  ProfileButton,
  ButtonText,
  Cards,
  Card,
  CardTextInfo,
  CardTextNumber,
  CardText,
  CardInfoStatus,
  CardInfoStatusText,
} from "./styles";

export function Home() {
  return (
    <Container>
      <ContainerInfo>
        <HeaderContainer>
          <MaterialIcons name="menu" size={24} color="#FFF" />
          <HeaderInfo>
            <HeaderText>PauloPinheiro</HeaderText>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#FFF" />
          </HeaderInfo>
          <MaterialIcons name="logout" size={24} color="#FFF" />
        </HeaderContainer>
        <ProfileContainer>
          <ProfileImage
            source={{
              uri: "https://avatars.githubusercontent.com/u/33367881?v=4",
            }}
          />

          <ProfileContainerTextInfo>
            <ProfileContainerText>
              <ProfileTextNumber>13k</ProfileTextNumber>
              <ProfileText>Seguidores</ProfileText>
            </ProfileContainerText>
            <ProfileContainerText>
              <ProfileTextNumber>124</ProfileTextNumber>
              <ProfileText>Seguindo</ProfileText>
            </ProfileContainerText>
            <ProfileContainerText>
              <ProfileTextNumber>48</ProfileTextNumber>
              <ProfileText>Engajamento</ProfileText>
            </ProfileContainerText>
          </ProfileContainerTextInfo>

          <ProfileButton>
            <ButtonText>Iniciar a Análise</ButtonText>
          </ProfileButton>
        </ProfileContainer>

        <Cards>
          <Card>
            <CardTextInfo>
              <CardTextNumber>12 K</CardTextNumber>
              <CardText>
                Novos {"\n"}
                Seguidores
              </CardText>
            </CardTextInfo>
            <CardInfoStatus>
              <MaterialIcons
                name="keyboard-arrow-up"
                size={14}
                color="#2c9751"
              />
              <CardInfoStatusText>44</CardInfoStatusText>
            </CardInfoStatus>
          </Card>

          <Card>
            <CardTextInfo>
              <CardTextNumber>120</CardTextNumber>
              <CardText>
                Seguidores {"\n"}
                perdidos
              </CardText>
            </CardTextInfo>
            <CardInfoStatus>
              <MaterialIcons name="keyboard-arrow-down" size={14} color="red" />
              <CardInfoStatusText>12</CardInfoStatusText>
            </CardInfoStatus>
          </Card>

          <Card>
            <CardTextInfo>
              <CardTextNumber>20</CardTextNumber>
              <CardText>
                Interações {"\n"}
                de perfis
              </CardText>
            </CardTextInfo>
            <CardInfoStatus>
              <MaterialIcons
                name="keyboard-arrow-up"
                size={14}
                color="#2c9751"
              />
              <CardInfoStatusText>4</CardInfoStatusText>
            </CardInfoStatus>
          </Card>

          <Card>
            <CardTextInfo>
              <CardTextNumber>11</CardTextNumber>
              <CardText>
                Admiradores {"\n"}
                secretos
              </CardText>
            </CardTextInfo>
            <CardInfoStatus>
              <MaterialIcons
                name="keyboard-arrow-up"
                size={14}
                color="#2c9751"
              />
              <CardInfoStatusText>2</CardInfoStatusText>
            </CardInfoStatus>
          </Card>

          <Card>
            <CardTextInfo>
              <CardTextNumber>12</CardTextNumber>
              <CardText>
                Eu não sigo {"\n"}
                de volta
              </CardText>
            </CardTextInfo>
            <CardInfoStatus>
              <MaterialIcons
                name="keyboard-arrow-up"
                size={14}
                color="#2c9751"
              />
              <CardInfoStatusText>2</CardInfoStatusText>
            </CardInfoStatus>
          </Card>

          <Card>
            <CardTextInfo>
              <CardTextNumber>24</CardTextNumber>
              <CardText>
                Não me seguiu {"\n"}
                de volta
              </CardText>
            </CardTextInfo>
            <CardInfoStatus>
              <MaterialIcons
                name="keyboard-arrow-up"
                size={14}
                color="#2c9751"
              />
              <CardInfoStatusText>8</CardInfoStatusText>
            </CardInfoStatus>
            {/*  */}
          </Card>
        </Cards>
      </ContainerInfo>
    </Container>
  );
}
