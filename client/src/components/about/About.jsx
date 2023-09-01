import { Box, styled, Typography } from "@mui/material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Blogging Hub</Typography>
        <Text variant="h5">
          Welcome to Blogging Hub, your ultimate
          destination for inspiration, information, and insightful content.
          We're passionate about sharing stories, ideas, and knowledge with the
          world.
          <br />
          <br/>
          At BlogHub, our mission is to empower individuals from all walks of
          life to express themselves, educate others, and connect with a global
          community. We believe that everyone has a unique perspective to share,
          and we provide the platform to make it happen. Whether you're a
          seasoned writer or just starting your blogging journey, we're here to
          support and inspire you.
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
