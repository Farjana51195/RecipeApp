import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import Card from "./common/Card";
import RecipeText from "./common/RecipeText";
import Button from "./common/Button";

export default class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  gotoDetail = () => {
    const { item } = this.props;
    this.props.navigation.navigate("Details", { recipe: item });
  };
  render() {
    const { item } = this.props;

    return (
      <Card>
        <View style={{ overflow: "hidden" }}>
          <Image
            source={{ uri: item.image_url }}
            style={{ height: 200, flex: 1 }}
            resizeMode="cover"
          />

          <RecipeText title={item.title} publisher={item.publisher} />
        </View>
        <View style={{ flexDirection: "row", padding: 20 }}>
          <Button
            customStyle={{ flex: 1 }}
            onPress={this.gotoDetail}
            title="Details"
          />
          <Button
            customStyle={{ flex: 1, marginLeft: 5, backgroundColor: "#60AF10" }}
            onPress={() => Linking.openURL(item.source_url)}
            title="URL"
          />
        </View>
      </Card>
    );
  }
}
