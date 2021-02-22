import React, { Component } from "react";
import {Platform, StyleSheet, View, Button, Picker, Alert, Text, TextInput, Animated, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";

export default class HomeActivity extends Component {

  constructor(props, ctx){
     super(props, ctx);
     this.state={

       PickerSelectedVal : '',
       PickSelectedVal : '',
       selectedValue : '',
       isLoading : true,
       dataSource : null,

     }
   }

handleSubmit = () => {
  

  const data = {category:this.state.PickerSelectedVal, price:this.state.PickSelectedVal,content:this.state.SelectedVal,size:this.state.number};

  const url = `https://anshulraghav.pythonanywhere.com/api/?category=${encodeURIComponent(data.category)}&price=${encodeURIComponent(data.price)}&content_rating=${encodeURIComponent(data.content)}&size=${encodeURIComponent(data.size)}`;


  fetch(url,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          const result = responseJson[0]["result"];
          alert("No. of downloads:"+responseJson[0]["result"]);
          
        })
        .catch((error) => {
          alert(console.error(error));
        });
  }

  render() {

      
    return (

        <View style={styles.container}>
        

        <Animated.View style={styles.headerWrapper}>
        <Text style={{ fontSize: 50, color: "black" }}>VISION</Text>
        </Animated.View>

        <View style={{flex: 0.5,width:"80%"}}>
        <Text style={{ fontSize: 25, color: "black"}}>Category</Text>

        <Picker
             selectedValue={this.state.PickerSelectedVal}
             onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} style={{borderRadius: 4, borderWidth: 1.5, borderColor: '#d6d7da',height:30}} >


             <Picker.Item label="Select the Category" value="category" />
             <Picker.Item label="ART_AND_DESIGN" value="ART_AND_DESIGN" />
             <Picker.Item label="AUTO_AND_VEHICLES" value="AUTO_AND_VEHICLES" />
             <Picker.Item label="BEAUTY" value="BEAUTY" />
             <Picker.Item label="BOOKS_AND_REFERENCE" value="BOOKS_AND_REFERENCE" />
             <Picker.Item label="BUSINESS" value="BUSINESS" />
             <Picker.Item label="COMICS" value="COMICS" />
             <Picker.Item label="COMMUNICATION" value="COMMUNICATION" />
             <Picker.Item label="DATING" value="DATING" />
             <Picker.Item label="EDUCATION" value="EDUCATION" />
             <Picker.Item label="ENTERTAINMENT" value="ENTERTAINMENT" />
             <Picker.Item label="EVENTS" value="EVENTS" />
             <Picker.Item label="FINANCE" value="FINANCE" />
             <Picker.Item label="FOOD_AND_DRINK" value="FOOD_AND_DRINK" />
             <Picker.Item label="GAME_ACTION" value="GAME_ACTION" />
             <Picker.Item label="GAME_ADVENTURE" value="GAME_ADVENTURE" />
             <Picker.Item label="GAME_ARCADE" value="GAME_ARCADE" />
             <Picker.Item label="GAME_BOARD" value="GAME_BOARD" />
             <Picker.Item label="GAME_CARD" value="GAME_CARD" />
             <Picker.Item label="GAME_CASINO" value="GAME_CASINO" />
             <Picker.Item label="GAME_CASUAL" value="GAME_CASUAL" />
             <Picker.Item label="GAME_EDUCATIONAL" value="GAME_EDUCATIONAL" />
             <Picker.Item label="GAME_MUSIC" value="GAME_MUSIC" />
             <Picker.Item label="GAME_PUZZLE" value="GAME_PUZZLE" />
             <Picker.Item label="GAME_RACING" value="GAME_RACING" />
             <Picker.Item label="GAME_ROLE_PLAYING" value="GAME_ROLE_PLAYING" />
             <Picker.Item label="GAME_SIMULATION" value="GAME_SIMULATION" />
             <Picker.Item label="GAMES_SPORTS" value="GAMES_SPORTS" />
             <Picker.Item label="GAME_STRATEGY" value="GAME_STRATEGY" />
             <Picker.Item label="GAME_TRIVIA" value="GAME_TRIVIA" />
             <Picker.Item label="GAME_WORD" value="GAME_WORD" />
             <Picker.Item label="HEALTH_AND_FITNESS" value="HEALTH_AND_FITNESS" />
             <Picker.Item label="HOUSE_AND_HOME" value="HOUSE_AND_HOME" />
             <Picker.Item label="LIBRARIES_AND_DEMO" value="LIBRARIES_AND_DEMO" />
             <Picker.Item label="LIFESTYLE" value="LIFESTYLE" />
             <Picker.Item label="MAPS_AND_NAVIGATION" value="MAPS_AND_NAVIGATION" />
             <Picker.Item label="MEDICAL" value="MEDICAL" />
             <Picker.Item label="MUSIC_AND_AUDIO" value="MUSIC_AND_AUDIO" />
             <Picker.Item label="NEWS_AND_MAGAZINES" value="NEWS_AND_MAGAZINES" />
             <Picker.Item label="PARENTING" value="PARENTING" />
             <Picker.Item label="PERSONALIZATION" value="PERSONALIZATION" />
             <Picker.Item label="PHOTOGRAPHY" value="PHOTOGRAPHY" />
             <Picker.Item label="PRODUCTIVITY" value="PRODUCTIVITY" />
             <Picker.Item label="SHOPPING" value="SHOPPING" />
             <Picker.Item label="SOCIAL" value="SOCIAL" />
             <Picker.Item label="SPORTS" value="SPORTS" />
             <Picker.Item label="TOOLS" value="TOOLS" />
             <Picker.Item label="TRAVEL" value="TRAVEL" />
             <Picker.Item label="TRAVEL_AND_LOCAL" value="TRAVEL_AND_LOCAL" />
             <Picker.Item label="VIDEO_PLAYERS" value="VIDEO_PLAYERS" />
             <Picker.Item label="WEATHER" value="WEATHER" />

           </Picker>
           </View>

           <View style={{flex: 0.5,width:"80%"}}>
           <Text style={{ fontSize: 25, color: "black"}}>Price</Text>

           <Picker
           selectedValue={this.state.PickSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickSelectedVal: itemValue})} style={{height:30}} >

                <Picker.Item label="Select the Price" value="price" />
                <Picker.Item label="Free" value="Free" />
                <Picker.Item label="Paid" value="Paid" />

              </Picker>
              </View>

              <View style={{flex: 0.5,width:"80%"}}>
           <Text style={{ fontSize: 25, color: "black"}}>Content Rating</Text>

           <Picker
           selectedValue={this.state.SelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({SelectedVal:itemValue})} style={{height:30}}>

                <Picker.Item label="Select the Content Rating" value="content_rating" />
                <Picker.Item label="Adults only 18+" value="Adults only 18+" />
                <Picker.Item label="Everyone" value="Everyone" />
                <Picker.Item label="Everyone 10+" value="Everyone 10+" />
                <Picker.Item label="Mature 17+" value="Mature 17+" />
                <Picker.Item label="Teen" value="Teen" />
                <Picker.Item label="Unrated" value="Unrated" />

              </Picker>
              </View>


                 <View style={{flex: 0.5,width:"80%",marginBottom:20}}>
                 <Text style={{ fontSize: 25, color: "black",marginBottom:5}} value="size">Size(Mb)</Text>

                 <TextInput style={{
                     height: 40, borderRadius: 4,borderWidth: 1.5,borderColor: '#d6d7da',paddingLeft:10
                    }} 
                     
                    onChangeText={(number) => this.setState({number})}
                    value={this.state.number}
                    name='size' label = 'size' type='Input' keyboardType='numeric' placeholder = 'Enter the Size' />
                 </View>

                 <View style={styles.form_group}>

            <TouchableOpacity>       

           <Button title="Evaluate" onPress={() => {this.handleSubmit();}} />

           </TouchableOpacity>
           
           
           </View>
        </View>
      );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: .9,
    justifyContent: "center",
    margin :"auto",
    backgroundColor :"#FFF",
    alignItems: "center",
    width:"100%",
    marginTop:30,
    paddingBottom:20
  },
  headerWrapper: {
    flex: 0.4, justifyContent:"center", alignItems: "center",borderBottomColor:"black",borderBottomWidth:1,marginBottom:50,
    paddingRight:8,paddingLeft:8
  }
});