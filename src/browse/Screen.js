import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../theme';

const SCR_HEIGHT = Dimensions.get('window').height;
const SCR_WIDTH = Dimensions.get('window').width;

const Spacer = ({ size, horizontal = false }) => {
    const horizontalStyle = {
        width: size
    };
    const verticalStyle = {
        height: size
    };
    return (
        <View style={horizontal ? horizontalStyle : verticalStyle} />
    );
};

const Header = () => {
    return (
        <View style={styles.header}>
            <Text></Text>
        </View>
    );
};

// const getBoxStyle = (index) => {
//     // const heightSmall = 10;
//     // const heightLarge = 50;
//     const height = {
//         height: 140
//     };

//     const flex = {
//         flex: 1
//     };

//     const size = {
//         '0': flex,
//         '1': heightSmall,
//         '2': heightSmall,
//         '3': heightLarge
//     };

//     return {
//         padding: size[index.toString()]
//     };
// };

const Column = ({ children }) => {
    return (
        <View style={styles.column}>
            {children}
        </View>
    );
};

const Title = ({ title }) => (
    <Text style={{
        marginTop: 10,
        color: theme.light,
        fontWeight: '600',
        fontSize: 20,
        marginRight: 30,
    }}>
        {title}
    </Text>
);

const Logo = () => {
    return (
        <View style={{
            height: 40,
            width: 40,
            backgroundColor: '#fff'
        }} />
    );
};

const Rating = ({ rating }) => {
    return (
        <View>
            <Text>{rating}</Text>
        </View>
    );
};

const Reviews = ({ reviewCount }) => {
    return (
        <Text>{reviewCount} review</Text>
    );
};

const SmallBoxView = ({
    content: {
        title
    }
}) => {
    return (
        <View style={styles.smallBoxView}>
            <Logo />
            <Title
                {...{ title }}
            />
        </View>
    );
};

const LargeBoxView = ({
    content: {
        title,
        rating,
        reviewCount
    }
}) => {
    return (
        <View style={styles.largeBoxView}>
            <Logo />
            <Title
                {...{ title }}
            />

            <View style={styles.flexOne} />

            <Rating
                {...{ rating }}
            />
            <Spacer size={10} />
            <Reviews
                {...{ reviewCount }}
            />
        </View>
    );
};

const Categories = () => {
    const items = new Array(2).fill('');
    return (
        <View style={styles.categoriesContainer}>
            <Column>

                <LargeBoxView
                    content={{
                        title: 'Facebook ads',
                        rating: 4.9,
                        reviewCount: 2495
                    }}
                />

                <Spacer size={14} />

                <SmallBoxView
                    content={{
                        title: 'Art & draw illustration',
                    }}
                />

            </Column>
            <Spacer size={14} horizontal />
            <Column>

                <SmallBoxView
                    content={{
                        title: 'UI/UX Design',
                    }}
                />

                <Spacer size={14} />

                <LargeBoxView
                    content={{
                        title: 'Google ads',
                        rating: 4.8,
                        reviewCount: 230
                    }}
                />

            </Column>
        </View>
    );
};

const SectionTitle = ({ title }) => {
    return (
        <View style={styles.sectionTitleContainer}>
            <Text style={{
                fontSize: 25,
                fontWeight: '600',
                color: theme.text1
            }}>{title}</Text>
        </View>
    );
};

const BestSection = () => {
    return (
        <View style={styles.bestSection}>
            <View style={{ flex: 1 }}>

            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>Website Desig & Development</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Text>Computer Website</Text>

                </View>

                <Text>$1250</Text>

            </View>
        </View>
    );
};

const Screen = () => {
    return (
        <View style={styles.layout}>
            <Header />

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Spacer size={20} />

                <Categories />

                <Spacer size={20} />

                <SectionTitle
                    title='Best Services'
                />

                <Spacer size={20} />

                <BestSection />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    flexOne: {
        flex: 1
    },
    layout: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    header: {
        height: 72,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: theme.light
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box: {
        width: '48%',
        borderWidth: 1,
        marginTop: 16,
        borderRadius: 20,
    },
    categoriesContainer: {
        flexDirection: 'row',
        height: SCR_HEIGHT * .42,
        borderRadius: 20
    },
    column: {
        flex: 1,
    },
    smallBoxView: {
        height: 140,
        padding: 20,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: theme.light
    },
    largeBoxView: {
        flex: 1,
        padding: 20,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: theme.light
    },
    sectionTitleContainer: {
        height: 72,
        borderWidth: 1,
        borderColor: theme.light,
        borderRadius: 20,
        justifyContent: 'center'
    },
    bestSection: {
        flexGrow: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: theme.light,
        borderRadius: 22
    }
});

export default Screen;
