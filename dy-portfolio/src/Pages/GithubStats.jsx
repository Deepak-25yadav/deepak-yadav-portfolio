import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Link } from "react-router-dom";
import Tooltip from "react-tooltip";

const GithubStats = () => {
  return (
    <Box p={6}
    fontFamily="'Poppins', sans-serif"
    
    >
      <Stack spacing={8}>
        {/* Title */}
        <Text fontSize="3xl" fontWeight="bold" textDecor={"underline"} textAlign="center">
          My Github Stats
        </Text>
        {/* Calender */}
        <Box w="100%" textAlign="center">
          <GitHubCalendar
            className="react-activity-calendar"
            style={{ margin: "auto", width: "80%" }}
            username="Deepak-25yadav"
            blockSize={20}
            hideTotalCount
          >
            <Tooltip delayShow={20} html />
          </GitHubCalendar>
        </Box>
        {/* Stats */}
        <Flex
          w="100%"
          justifyContent="space-evenly"
          alignItems="center"
          flexDir={{ base: "column", md: "column", lg: "row" }}
        >
          {/* Stats Card */}
          <Box
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb={"20px"}
          >
            <Link to="https://github.com/Deepak-25yadav">
              <Image
                w="100%"
                h="auto"
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=Deepak-25yadav&count_private=true&show_icons=true"
              />
            </Link>
          </Box>
          {/* Top Languages */}
          <Box
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb={"20px"}
          >
            <Link to="https://github.com/Deepak-25yadav?tab=repositories">
              <Image
                w="100%"
                h="auto"
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Deepak-25yadav&layout=compact"
              />
            </Link>
          </Box>
          {/* Streak Stats */}
          <Box
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb={"20px"}
          >
            <Link to="https://github.com/Deepak-25yadav">
              <Image
                w="100%"
                h="auto"
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com/?user=Deepak-25yadav"
              />
            </Link>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default GithubStats;
