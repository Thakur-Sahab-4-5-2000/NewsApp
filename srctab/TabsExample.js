import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Left,
  Body,
  Right,
  Title,
  View,
} from "native-base";
import { StyleSheet } from "react-native";
import Tab1 from "./tabOne";
import Tab2 from "./tabTwo";
import Tab3 from "./tabThree";
import { StatusBar } from "expo-status-bar";

export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Header
          style={{
            paddingLeft: 100,
            backgroundColor: "#87ceeb",
            marginTop: 15,
          }}
          hasTabs
        >
          <Left />
          <Body>
            <Title style={{ color: "black", marginTop: 40, marginBottom: 10 }}>
              News App
            </Title>
          </Body>
          <Right />
        </Header>

        <Tabs  renderTabBar={() => <ScrollableTab />}>
          <Tab
            tabStyle={{ backgroundColor: "#87ceeb" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#87ceeb" }}
            activeTextStyle={{
              color: "#fff",
              fontWeight: "bold",
              color: "black",
            }}
            heading="General"
          >
            <Tab1 />
          </Tab>

          <Tab
            tabStyle={{ backgroundColor: "#87ceeb", paddingStart: 20,marginLeft: 0 }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{
              backgroundColor: "#87ceeb",
              paddingStart: 20,
              marginLeft: 0,
            }}
            activeTextStyle={{
              color: "black",
              fontWeight: "bold",
            }}
            heading="General"
            heading="Business"
          >
            <Tab2 />
          </Tab>

          <Tab
            tabStyle={{ backgroundColor: "#87ceeb" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#87ceeb" }}
            activeTextStyle={{
              color: "#fff",
              fontWeight: "bold",
              color: "black",
            }}
            heading="General"
            heading="Business"
            heading="Top News"
          >
            <Tab3 />
          </Tab>
        </Tabs>
        <StatusBar />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  heading: {},
});
