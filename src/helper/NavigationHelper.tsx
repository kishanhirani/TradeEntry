import { createNavigationContainerRef } from '@react-navigation/native';
import { Alert } from 'react-native';

export const navigationRef = createNavigationContainerRef<any>();


export function navigate(name: string, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    } else {
        Alert.alert("navigation not found. check inside src/utils/navigationhelper/navigate")
    }
}


export function reset(name: string, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.reset({
            index: 0,
            routes: [{ name: name, params: params }],
        });
    } else {
        Alert.alert("navigation not found. check inside src/utils/navigationhelper/reset")
    }
}


export function goBack() {
    if (navigationRef.isReady()) {
        navigationRef.goBack();
    } else {
        Alert.alert("navigation not found. check inside src/utils/navigationhelper/goBack")
    }
}
export function route() {
    if (navigationRef.isReady()) {
        return navigationRef.getCurrentRoute();
    }
}
