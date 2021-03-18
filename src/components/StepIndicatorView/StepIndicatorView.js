import React, {useState} from 'react'
import {
    View
} from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import styles from './StepIndicatorStyle'
import colors from '../../comon/colors/colors'

export default function({numberOfStep, onPressStep, activePosition}) {
    const customStyles = {
        stepIndicatorSize: 40,
        currentStepIndicatorSize: 45,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: colors.primaryGreen,
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: colors.primaryGreen,
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: colors.primaryGreen,
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: colors.primaryGreen,
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 16,
        currentStepIndicatorLabelFontSize: 18,
        stepIndicatorLabelCurrentColor: colors.primaryGreen,
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 18,
        currentStepLabelColor: colors.primaryGreen
    }

    const [currentnPosition, setPosition] = useState(1);

    return (
        <View>
            <StepIndicator
                customStyles = {customStyles}
                currentPosition={activePosition}
                stepCount = {numberOfStep}
                onPress = {onPressStep}
            />
        </View>
    )
}

