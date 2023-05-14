import { StyleSheet, Text, View } from "react-native";

export default function AppFooter(props) {
    return (
        <View style={styles.container}>
            <Text sylte={styles.footer}>{props.header}
                <Text style={{fontStyle: 'italic'}}>{props.slogan}</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.075,
        backgroundColor: 'fuchsia'
    },
    footer: {
        textAlign: 'auto',
    }
});
