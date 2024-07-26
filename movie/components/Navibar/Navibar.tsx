"use client";
import { useDisclosure, Link, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRef } from "react";

export default function NaviBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <HStack
      justifyContent="flex-start"
      p={8}
      bg="blue.50" // 연한 파란색 배경
      spacing={8} // 링크 간 간격 설정
    >
      <NextLink href="/" passHref>
        <Link
          fontWeight="bold" // 뚜렷한 글씨체
          color="gray.800" // 진한 회색 글자색
          _hover={{ color: "blue.500" }} // 호버 시 파란색
        >
          Home
        </Link>
      </NextLink>
      <NextLink href="/about" passHref>
        <Link fontWeight="bold" color="gray.800" _hover={{ color: "blue.500" }}>
          About
        </Link>
      </NextLink>
      <NextLink href="/contact" passHref>
        <Link fontWeight="bold" color="gray.800" _hover={{ color: "blue.500" }}>
          Contact
        </Link>
      </NextLink>
    </HStack>
  );
}
