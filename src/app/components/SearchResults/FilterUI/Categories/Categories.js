import { HStack, Tag, TagLabel, TagCloseButton, Button } from "@chakra-ui/react"
export default function Categories(
    {
        selectedItems, toggleItem, clearAll, 
    }
){
    return (
        <HStack spacing={4} mt={4} mx={{ md: "4rem", base: "1rem" }}>
        {selectedItems.map((item) => (
          <Tag size="lg" key={item} borderRadius="4px" bg={"#F5F5F5"}>
            <TagLabel
              color={"#222222"}
              fontSize={{ md: "1rem", base: "0.5rem" }}
              lineHeight={"22px"}
            >
              {item}
            </TagLabel>
            <TagCloseButton onClick={() => toggleItem(item)} />
          </Tag>
        ))}
        {selectedItems.length > 0 && (
          <Button variant="link" onClick={clearAll}>
            Clear all
          </Button>
        )}
      </HStack>
    )
}