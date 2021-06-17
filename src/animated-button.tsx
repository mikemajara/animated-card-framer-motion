import React, { useState } from "react";
import {
  Text,
  Flex,
  Box,
  Stack,
  HStack,
  Button,
  IconButton,
  chakra,
  Icon
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence, useAnimation, AnimateSharedLayout } from "framer-motion";
import { sample } from "lodash";
import {
  AFlex,
  ABox,
  AButton,
  AIcon,
  AText,
} from './chakra-animated-components'

const colors = [
  "#e40303",
  "#ff8c00",
  "#ffed00",
  "#008026",
  "#004dff",
  "#750787"
];

export const AnimatedButton = (props: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [isContentShowing, setIsContentShowing] = useState(true);

  const toggleBackgroundColor = () => {
    setBackgroundColor(sample(colors) + "55" || "white");
  };

  const toggleContentShowing = () => {
    setIsContentShowing(!isContentShowing);
  };

  React.useEffect(() => {
    setIsExpanded(props.expanded);
  }, [props.expanded]);

  // setInterval(() => toggleExpanded(), 4000)

  const textControls = useAnimation();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };


  const buttonStyle = {
    padding: "8px 16px",
    // paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    // justifyContent: "flex-start",
    // height: "40px",
    borderRadius: "10px",
    backgroundColor: "white"
  };

  return (
    <ABox
      // layout
      onClick={toggleExpanded}
      boxShadow="md"
      border=".5px"
      borderStyle="solid"
      borderColor="gray.300"
      style={{
        ...buttonStyle,
        ...props.style,
        // paddingRight: isExpanded ? "16px" : "11px",
        // paddingLeft: isExpanded ? "16px" : "11px",
        // borderRadius: "10px",
        // height not animated here because the meassurement
        // leads to a glitch adjusting to the padding (which is not taken
        // into account with padding)
        height: "auto", 
        backgroundColor: "gray.500",
        overflow: "hidden",
      }}
      initial={false}
      // animate={{height: isExpanded ? "auto" : "40px", borderRadius: "10px"}}
      transition={{duration: "3"}}
    >
      <AFlex align="center" layout initial={false}>
        <AIcon layout as={SunIcon} mr="16px"
          animate={{height: isExpanded ? "1.2rem" : "1rem"}}
        />
        <AText layout initial={false} animate={{fontSize: isExpanded ? "1.5rem" : "1rem"}}>
          {props.title}
        </AText>
      </AFlex>
      <AText
        // layout
        // py="5"
        // initial={false}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : "1px"
        }}
        >
        {props.content}
      </AText>      
    </ABox>
  );
};
