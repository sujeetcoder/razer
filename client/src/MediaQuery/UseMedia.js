import { useMediaQuery } from '@chakra-ui/react';

export const useMedia = () => {

    const [smallScreen] = useMediaQuery('(min-width: 480px)')
    const [mediumScreen] = useMediaQuery('(min-width: 800px)')
    const [largeScreen] = useMediaQuery('(min-width: 3000px)')
    return { smallScreen,mediumScreen,largeScreen }
}



// for using media query in your page do---
// const { smallScreen,mediumScreen,largeScreen } = useMedia()

//rule for use
//always use screen sizes in accending order in return else it will throw bug
// <Text>{!smallScreen?"smaal":!mediumScreen?"mid":!largeScreen?"large":"other"} </Text> right way
// <Text>{!largeScreen?"large":!mediumScreen?"mid":!smallScreen?"smaal":"other"} </Text> wrong way

//notice don't use largeScreen this is only for me

