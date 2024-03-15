import { View } from "react-native"

const Test = () => {
    return (
        <View style={{
            backgroundColor: "blue",
            width: "80%",
            height: 450,
            borderRadius: 30,
            borderWidth: 5,
            borderStyle: 'dashed',
            borderColor: 'orange',
            padding: 20,
            margin: 40,
            flexDirection: 'row',
            gap: 10, 
        }}>
            {/* Container 1 */}
            <View style={{ width: '50%', height: 200, backgroundColor: 'red' }}>
            </View>
            {/* Container 1 ends here */}
            

            {/* Container 2 */}
            <View style={{ width: '50%', height: 200, backgroundColor: 'yellow' }}>

            </View>
            {/* Container 2 ends here */}

        </View>
    );
}
export default Test