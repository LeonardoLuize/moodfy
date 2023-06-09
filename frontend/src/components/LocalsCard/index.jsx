import {
  Button,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Textarea,
  Heading,
  Image
} from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import {MapPin} from "@phosphor-icons/react"

export function LocalsCard({local}) {

  /* 
    local.name
    local.filters - tags
    local.address
  */

  return (
    <>
      <Box display="flex" alignItems="center" gap={5} mt={5}>
        <Box display="flex" rounded="xl" alignItems="center" justifyContent="center" w="100px" h="100px" overflow="hidden">
          <Image
            src="https://picsum.photos/100/100"
            w="full"
          />
        </Box>

        <Box gap={5}>
          <Heading fontSize={20}>OPAO</Heading>
          <Box display="flex" alingItems="center" justifyContent="center" gap={3}>
            <Icon as={MapPin} fontSize={18} />
            <Text>OPA</Text>
          </Box>

          <Box>
              <Tag>3</Tag>
          </Box>
        </Box>
      </Box>
    </>
  );
}
