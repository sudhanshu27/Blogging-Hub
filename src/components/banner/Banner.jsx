
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
    ${'' /* font-family: cursive; */}
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color: #FFFFFF;
    font-family: cursive;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOGGING HUB</Heading>
            <SubHeading>Express your inner self</SubHeading>
        </Image>
    )
}

export default Banner;