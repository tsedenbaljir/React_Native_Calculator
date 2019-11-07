import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonPrimary1 from "../components/MaterialButtonPrimary1";

export default class Untitled1 extends Component {
  state = {
    numbers:''
  } 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.numbers || '0'}</Text>
        <View style={styles.materialButtonPrimary119Row}>
          <MaterialButtonPrimary1
            caption="*"
            style={styles.materialButtonPrimary119}
          />
          <MaterialButtonPrimary1
            caption="/"
            style={styles.materialButtonPrimary120}
          />
          <MaterialButtonPrimary1
            caption="+"
            style={styles.materialButtonPrimary121}
          />
        </View>
        <View style={styles.materialButtonPrimary113Row}>
          <MaterialButtonPrimary1
            caption="1"
            style={styles.materialButtonPrimary113}
          />
          <MaterialButtonPrimary1
            caption="2"
            style={styles.materialButtonPrimary114}
          />
          <MaterialButtonPrimary1
            caption="3"
            style={styles.materialButtonPrimary115}
          />
        </View>
        <View style={styles.materialButtonPrimary110Row}>
          <MaterialButtonPrimary1
            caption="4"
            style={styles.materialButtonPrimary110}
          />
          <MaterialButtonPrimary1
            caption="5"
            style={styles.materialButtonPrimary111}
          />
          <MaterialButtonPrimary1
            caption="6"
            style={styles.materialButtonPrimary112}
          />
        </View>
        <View style={styles.materialButtonPrimary17Row}>
          <MaterialButtonPrimary1
            caption="7"
            style={styles.materialButtonPrimary17}
          />
          <MaterialButtonPrimary1
            caption="8"
            style={styles.materialButtonPrimary18}
          />
          <MaterialButtonPrimary1
            caption="9"
            style={styles.materialButtonPrimary19}
          />
        </View>
        <View style={styles.materialButtonPrimary116Row}>
          <MaterialButtonPrimary1
            caption="0"
            style={styles.materialButtonPrimary116}
          />
          <MaterialButtonPrimary1
            caption="="
            style={styles.materialButtonPrimary117}
          />
          <MaterialButtonPrimary1
            caption="C"
            style={styles.materialButtonPrimary118}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  text: {
    width: 302,
    height: 39,
    color: "#121212",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 104,
    marginLeft: 38
  },
  materialButtonPrimary119: {
    width: 88,
    height: 57
  },
  materialButtonPrimary120: {
    width: 88,
    height: 57,
    marginLeft: 18
  },
  materialButtonPrimary121: {
    width: 88,
    height: 57,
    marginLeft: 20
  },
  materialButtonPrimary119Row: {
    height: 57,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 38,
    marginRight: 35
  },
  materialButtonPrimary113: {
    width: 88,
    height: 57
  },
  materialButtonPrimary114: {
    width: 88,
    height: 57,
    marginLeft: 18
  },
  materialButtonPrimary115: {
    width: 88,
    height: 57,
    marginLeft: 20
  },
  materialButtonPrimary113Row: {
    height: 57,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 38,
    marginRight: 35
  },
  materialButtonPrimary110: {
    width: 88,
    height: 57
  },
  materialButtonPrimary111: {
    width: 88,
    height: 57,
    marginLeft: 18
  },
  materialButtonPrimary112: {
    width: 88,
    height: 57,
    marginLeft: 20
  },
  materialButtonPrimary110Row: {
    height: 57,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 38,
    marginRight: 35
  },
  materialButtonPrimary17: {
    width: 88,
    height: 57
  },
  materialButtonPrimary18: {
    width: 88,
    height: 57,
    marginLeft: 18
  },
  materialButtonPrimary19: {
    width: 88,
    height: 57,
    marginLeft: 20
  },
  materialButtonPrimary17Row: {
    height: 57,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 38,
    marginRight: 35
  },
  materialButtonPrimary116: {
    width: 88,
    height: 57
  },
  materialButtonPrimary117: {
    width: 88,
    height: 57,
    marginLeft: 18
  },
  materialButtonPrimary118: {
    width: 88,
    height: 57,
    marginLeft: 20
  },
  materialButtonPrimary116Row: {
    height: 57,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 38,
    marginRight: 35
  }
});
