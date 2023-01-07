import { useMediaQuery } from '@chakra-ui/react';

export const useMedia = () => {
    
    const [smallScreen] = useMediaQuery('(min-width: 570px)')
    const [mediumScreen] = useMediaQuery('(min-width: 1023px)')
    const [midBr] = useMediaQuery('(min-width: 800px)')
    return { smallScreen,mediumScreen,midBr }
}



// for using media query in your page do---
// const { smallScreen,mediumScreen,largeScreen } = useMedia()

//rule for use
//always use screen sizes in accending order in return else it will throw bug
// <Text>{!smallScreen?"smaal":!mediumScreen?"mid":!largeScreen?"large":"other"} </Text> right way
// <Text>{!largeScreen?"large":!mediumScreen?"mid":!smallScreen?"smaal":"other"} </Text> wrong way

//notice don't use largeScreen this is only for me

