import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper
            autoplay={true}
            autoplayTimeout={5}
            dotColor='crimson'
            activeDotColor='white'
            showsButtons={true}
        >
            <View style={styles.offerSlide}>
                <Image
                    source={require('../../assets/offer/deal1.png')}
                    style={styles.offerImg}
                />
            </View>
            <View style={styles.offerSlide}>
                <Image
                    source={require('../../assets/offer/deal2.png')}
                    style={styles.offerImg}
                />
            </View>
            <View style={styles.offerSlide}>
                <Image
                    source={require('../../assets/offer/deal3.png')}
                    style={styles.offerImg}
                />
            </View>
            <View style={styles.offerSlide}>
                <Image
                    source={require('../../assets/offer/deal4.png')}
                    style={styles.offerImg}
                />
            </View>
        </Swiper>
      </View>
    </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%'
    },
    offerSlider:{
        width:'100%',
        height:250,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
        marginVertical:10
    },
    offerSlide:{
        width:'100%',
        height:250,
        justifyContent:'center',
        backgroundColor:'white',
        alignItems:'center'
    },
    offerImg:{
        flex:1,
        width:'100%',
        height:'100%',
        borderRadius:20,
        resizeMode:'contain'
    }
})