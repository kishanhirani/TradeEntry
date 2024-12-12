import { useTheme } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { createStyles } from './styles';
import AppIntroSlider from 'react-native-app-intro-slider';
import { IMAGES, SCREENS } from '../../../helper/Constants';
import { navigate } from '../../../helper/NavigationHelper';

const IntroSLider = () => {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);


    const slides = [
        { key: 1, image: IMAGES.dummtImg },
        { key: 2, image: IMAGES.dummtImg },
        { key: 3, image: IMAGES.dummtImg },
    ];

    const renderSlides = ({ item }: any) => {
        return <Image source={item.image} style={styles.imageIntro} />;
    };

    const handleNextPress = () => {
        if (activeIndex < slides.length - 1) {
            sliderRef.current?.goToSlide(activeIndex + 1);
            setActiveIndex(activeIndex + 1);
        }
    };

    const renderNextButton = () => (
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    );

    const renderDoneButton = () => (
        <TouchableOpacity style={styles.donebutton} onPress={() => navigate(SCREENS.LOGIN)}>
            <Text style={styles.donebuttonText}>Done</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />

            <AppIntroSlider
                ref={sliderRef}
                data={slides}
                renderItem={renderSlides}
                renderNextButton={renderNextButton}
                renderDoneButton={renderDoneButton}
                bottomButton={true}
                dotStyle={{ backgroundColor: 'transparent' }}
                activeDotStyle={{ backgroundColor: 'transparent' }}
                onSlideChange={(index) => setActiveIndex(index)}
            />
        </View>
    );
};

export default IntroSLider;
