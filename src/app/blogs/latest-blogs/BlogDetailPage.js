import React from "react";
import {
  Box,
  Heading,
  Text,
  Avatar,
  Flex,
  Link,
  Container,
  UnorderedList,
  ListItem,
  List,
} from "@chakra-ui/react";
import Image from "next/image";
import Image1 from "../../../../public/blogImages/image1.png";
import Image0 from "../../../../public/blogImages/image0.png";
import Image10 from "../../../../public/blogImages/image10.png";
import Image3 from "../../../../public/blogImages/image3.png";
import Image11 from "../../../../public/blogImages/image11.png";
import Image8 from "../../../../public/blogImages/image8.png";
import Image6 from "../../../../public/blogImages/image6.png";
import Image2 from "../../../../public/blogImages/image2.png";
import Image7 from "../../../../public/blogImages/image7.png";
import figtree from "../../fonts/Figtree";
const BlogDetailPage = () => {
  return (
    <Container
      gap={{ md: "0.5rem" }}
      display={"flex"}
      flexDirection={"column"}
      p={5}
      minW={{ md: "70%", base: "100%" }}
      // fontFamily={"Figtree, sans-serif"}
      className={figtree.className}
    >
      <Text
        fontSize={{ md: "13px", base: "11px" }}
        lineHeight={"25px"}
        fontWeight={"700"}
        color="#FFB6C1"
        mb="2"
      >
        MACHINE LEARNING
      </Text>
      <Text
        color={"#000000"}
        fontWeight={"500"}
        fontSize={{ md: "3rem", base: "1.5rem" }}
        lineHeight={{ md: "60px", base: "40px" }}
      >
        Enhancing Customer Satisfaction: Controlling and Tailoring Semantic
        Search Results With Semantic Parsing
      </Text>
      <Text
        fontSize={{ md: "1rem", base: "0.5rem" }}
        color={"#5F6367"}
        fontWeight={"500"}
        lineHeight={{ md: "34px", base: "30px" }}
      >
        23 Oct, 2024 · 10 min read
      </Text>
      <Flex align="center" mb="6">
        <Avatar name="Rohan Nishikant Sidankar" src="/path/to/avatar.jpg" />
        <Box
          ml="3"
          fontSize={{ md: "1rem", base: "0.5rem" }}
          lineHeight={"24px"}
        >
          <Text fontWeight="700">Rohan Nishikant Sidankar</Text>
          <Text fontWeight={"500"}>ML Engineer, Hushh.ai</Text>
        </Box>
      </Flex>
      <Text
        mb="4"
        color={"#5F6367"}
        fontWeight={"500"}
        fontSize={{ md: "2rem", base: "1rem" }}
        lineHeight={"28px"}
      >
        The Power of Semantic Search for E-commerce
      </Text>
      <Text mb="4" color={"#5F6367"}>
        In the competitive world of e-commerce, customer satisfaction reigns
        supreme. A key driver of satisfaction? A seamless and intuitive search
        experience. This is where semantic search comes in, moving beyond simple
        keyword matching to understand the true intent behind a user's query.
        Unlike traditional keyword-based search, semantic search delves into the
        meaning and context of words, delivering highly relevant results that
        resonate with customer needs.
      </Text>
      <Link
        color={"#1155cc"}
        href="https://cloud.google.com/discover/what-is-semantic-search?"
        textDecoration={"underline"}
        size="md"
        mb="4"
      >
        What is Semantic Search?
      </Link>
      <Text
        mb="4"
        color={"#5F6367"}
        fontWeight={"500"}
        fontSize={{ md: "2rem", base: "1rem" }}
        lineHeight={"28px"}
      >
        The Challenge: Beyond Traditional Search to Understanding Queries
      </Text>

      <Text mb="4">
        Traditional keyword-based search often falls short when faced with
        complex user queries. Imagine a customer searching for a "red dress for
        a winter wedding with floral prints." A keyword-based approach might
        return results containing all those words, but not necessarily in a way
        that reflects the user's true intent. This is where Query Understanding
        becomes crucial. Search engines need to go beyond simply identifying
        keywords to grasp the nuances of human language and decipher the
        relationships between those words.
      </Text>
      <Text mb="4">
        Search engines are increasingly utilizing NLP query understanding and
        large language models (LLMs) for query understanding to decipher the
        nuances of natural language. However, there's a catch. Semantic search,
        while powerful, can feel like a "black box." We feed in a query and get
        relevant results, but the inner workings – often reliant on LLMs or even
        vision transformers (ViTs) for generating vector representations –
        remain opaque. This lack of control can be a challenge.
      </Text>
      <Text mb="4">
        For example, while LLMs and ViTs excel at generating embeddings for
        queries and catalog items, understanding which vector features
        correspond to "red t-shirt" versus "white floral prints" and how they
        influence ranking is unclear. This lack of transparency can introduce
        noise into the system, impacting the precision of search results.
      </Text>
      <Text
        mb="4"
        color={"#5F6367"}
        fontWeight={"500"}
        fontSize={{ md: "2rem", base: "1rem" }}
        lineHeight={"28px"}
      >
        Semantic Parsing: Unlocking Deeper Query Understanding
      </Text>
      <Link
        color={"#1155cc"}
        href="https://medium.com/@datailm/the-essential-role-of-syntactic-and-semantic-parsing-in-nlp-47b92118d9de#:~:text=Syntactic%20parsing%2C%20often%20referred%20to,between%20words%20in%20a%20sentence."
        textDecoration={"underline"}
        size="md"
        mb="4"
      >
        What is Semantic Search?
      </Link>

      <Text mb="4">
        This is where Semantic Parsing comes in, offering a way to crack open
        the "black box" of semantic search. Semantic parsing breaks down natural
        language queries into their fundamental components, identifying
        entities, attributes, and relationships. Think of it as teaching a
        search engine to diagram a sentence, understanding that "red" is an
        attribute of the "t-shirt" entity.
      </Text>
      <Text mb="4">
        (For example, a semantic parser can understand that "red" refers to the
        color of the dress, "winter wedding" indicates the occasion, and "floral
        prints" specifies a design element.)
      </Text>
      <Image src={Image0} alt="Vibe Search" />

      <Link
        href="https://towardsdatascience.com/understanding-frame-semantic-parsing-in-nlp-bec84c885061"
        color="blue.500"
        isExternal
      >
        Learn more about semantic parsing
      </Link>
      <Text mb="4">
        While a deep dive into neural semantic parsing and deep learning
        semantic parsing deserves its own discussion, the key takeaway is this:
        Semantic parsing allows us to move from basic keyword recognition to a
        nuanced understanding of user intent.
      </Text>
      <Text mb="4">
        To understand better, let us simplify the process by focusing only on
        specific aspects of the input. Understanding the complete meaning or
        logical forms is not necessary. Here is an example.
      </Text>
      <Image src={Image1} alt="Vibe Search" />

      <Heading as="h3" size="md" mb="4">
        Vanilla Semantic Search
      </Heading>
      <Text mb="4">
        Imagine someone searches for: "red dress with floral prints for a winter
        wedding"
      </Text>
      <Text>They want three main things:</Text>
      <UnorderedList>
        <ListItem>A red dress</ListItem>
        <ListItem>Floral patterns</ListItem>
        <ListItem>Something warm enough for a winter wedding</ListItem>
      </UnorderedList>
      <Image src={Image10} alt="Vibe Search" />
      <Text mb="4">The current approach is pretty straightforward:</Text>
      <UnorderedList>
        <ListItem>
          We take the search words and turn them into a special format (called a
          vector) that computers understand
        </ListItem>
        <ListItem>
          Our system looks for similar items in our product catalog
        </ListItem>
        <ListItem>
          We apply some business rules to pick the top 20-30 best matches
        </ListItem>
      </UnorderedList>

      <Text>
        {" "}
        This usually works well! The results are mostly relevant - we get
        dresses that could work for our shopper.
      </Text>
      <Image src={Image3} alt="Vibe Search " />

      <Image src={Image11} alt="Vibe Search" />
      <Heading as="h3" size="lg" mb="4">
        Semantic Search using Query Parsing
      </Heading>
      <Text mb="4" size="sm">
        E-commerce search requires more than just matching keywords. We need to
        understand user intent, prioritize features, and deliver precisely
        ranked results.
      </Text>
      <Text color={"#073763"} fontWeight={"bold"} size="md" mb="4">
        Core Concept: Query Parsing
      </Text>
      <Text mb="4">
        The fundamental idea is to dissect search queries into distinct
        components that we can analyze independently. Instead of treating a
        search query as one block of text, we break it down into meaningful
        pieces that our system can understand and prioritize.
      </Text>
      <Text color={"#073763"} fontWeight={"bold"} size="md" mb="4">
        Architecture Overview
      </Text>
      <Text mb="2">Here's how our enhanced search system works:</Text>
      <Box mb="4">
        <Text fontWeight="bold">1. Dual Processing Pipeline</Text>
        <List styleType="lower-alpha" pl="4">
          <ListItem>Traditional semantic search path</ListItem>
          <ListItem>New query parsing path for detailed analysis</ListItem>
        </List>
      </Box>

      <Box mb="4">
        <Text fontWeight="bold">2. Semantic Parser Integration</Text>
        <List styleType="lower-alpha" pl="4">
          <ListItem>Breaks queries into logical components</ListItem>
          <ListItem>Creates labeled sequences for specific features</ListItem>
          <ListItem>
            Generates targeted embeddings for precise matching
          </ListItem>
        </List>
      </Box>
      <Text color={"#073763"} fontWeight={"bold"} size="md" mb="4">
        Building the Parser: Key Requirements
      </Text>
      <Text mb="4">
        Speed is crucial - we need results in milliseconds, not seconds. This
        rules out using Large Language Models (LLMs) directly in the processing
        pipeline, as they typically add 7-10 seconds of latency.
      </Text>
      <Text color={"#073763"} fontWeight={"bold"} size="md" mb="1" mt="2">
        Implementation Steps
      </Text>
      <Text mb="4">
        Building a semantic query parser for your e-commerce platform might seem
        daunting, but it doesn't have to be. Here's a practical breakdown:
      </Text>
      <Text mb="4">
        <b> 1. Feature Classification System:</b> Define a structured taxonomy
        for your domain. For an e-commerce fashion site: - Color (red, blue,
        black) <br></br>- Season (winter, summer) <br></br>- Occasion (wedding,
        business) <br></br>- Product Type (dress, pants) <br></br>-
        Specifications (floral print, v-neck) <br></br>
      </Text>
      <Text mb="4">
        <b>2. Knowledge Base Development:</b> Begin by creating a comprehensive
        inventory of terms, phrases, synonyms, and slang relevant to your
        industry. This knowledge base serves as the foundation for your parser.
        <br></br>
        Initially, the corpus may not cover all terms comprehensively. Implement
        a pipeline of cron jobs to process new queries periodically through an
        LLM, enhancing the corpus over time. This architecture allows the corpus
        to improve continually.
      </Text>
      <Text mb="4">
        <b>3. Phrase Matching Algorithm:</b> Implement a phrase matching
        algorithm to identify chunks of phrases, trigrams, bigrams, and
        monograms present in the feature corpus. Prioritize the longest chunk
        label; for instance, phrases like 'beach party' should be categorized
        together under 'occasion' rather than as separate entities.
        <br></br>
        <b>Example: </b>"beach party" → occasion (single category) <br></br>
        <b>Rather than:</b> "beach" + "party" → two separate terms
      </Text>
      <Text mb="4">
        <b>4. Grammar and Syntax Understanding:</b> Define grammatical rules to
        help your parser interpret relationships between words. For instance,
        "long sleeves" should be categorized as a single specification related
        to the sleeve length. For instance, rules could specify that adjectives
        after specifications (like 'long sleeves') should be classified as part
        of the specification, with 'sleeves' as the entity and 'long' as a
        requirement. This provides a robust foundation for a version 1.0
        semantic parser. The system can be enhanced with additional NLP
        techniques as your needs grow.
      </Text>
      <Text mb="4">
        Here you can see the result of semantic parsing for our example query:
      </Text>
      <Image src={Image8} alt="Vibe Search Sematic" />
      <Heading as="h3" size="md" mb="4">
        Optimizing Search Results: The Final Steps
      </Heading>
      <Text mb="4">
        The true power of semantic parsing for e-commerce lies in its ability to
        fine-tune search results for optimal relevance. By breaking down queries
        into their constituent parts, we can implement sophisticated ranking
        systems that go beyond simple keyword matching.
      </Text>
      <Text mb="4">
        We start with traditional semantic search using the complete query.
        Think of this as casting a wide net to catch all potentially relevant
        products. This gives us our initial pool of candidates.
      </Text>
      <Text mb="4">
        Not all search features are created equal. We need to make strategic
        decisions about how to use each identified feature:
      </Text>
      <Text color={"#073763"} fontWeight={"bold"} size="md" mb="1" mt="2">
        Filtering Criteria
      </Text>
      <Text>
        {" "}
        Some features act as hard requirements. For example: Brand names
        typically need exact matches Size specifications must be precise Price
        range requirements are non-negotiable
      </Text>

      <Text color={"#073763"} fontWeight={"bold"} size="md" mb="1" mt="2">
        Boosting Factors{" "}
      </Text>
      <Text>Other features influence ranking without excluding products:</Text>
      <UnorderedList>
        <ListItem>Color preferences</ListItem>
        <ListItem>Style elements</ListItem>
        <ListItem> Seasonal appropriateness</ListItem>
      </UnorderedList>

      <Text color={"#073763"} fontWeight={"bold"} size="md" mb="1" mt="2">
        The Ranking Engine{" "}
      </Text>
      <Text mb="4">
        Here's where it gets interesting. We convert each feature chunk into its
        own embedding (a mathematical representation). This allows us to:
      </Text>
      <UnorderedList>
        <ListItem>Compare products against specific features </ListItem>
        <ListItem>Generate individual ranking scores </ListItem>
        <ListItem>Combine these scores intelligently </ListItem>
      </UnorderedList>

      <Text color={"#073763"} fontWeight={"bold"} size="md" mb="1" mt="2">
        Bringing It All Together
      </Text>
      <Text mb="4">
        The final step is rank fusion - combining multiple ranking signals into
        a single, coherent list. We can:
      </Text>
      <UnorderedList mb={4}>
        <ListItem>Assign different weights to different features </ListItem>
        <ListItem>Account for user preferences</ListItem>
        <ListItem>Adapt to business priorities </ListItem>
      </UnorderedList>

      <Text>This creates a flexible system that can be tuned for:</Text>
      <UnorderedList>
        <ListItem>Individual user preferences </ListItem>
        <ListItem>Business objectives</ListItem>
        <ListItem>Seasonal priorities </ListItem>
        <ListItem>Market trends</ListItem>
      </UnorderedList>

      <Text>
        {" "}
        By balancing these elements, we create search results that are both
        relevant and aligned with business goals.
      </Text>

      <Image src={Image6} alt="Vibe Search Business Goals Sematic Parsing" />

      <Text>
        <b>Product Ranking: </b>Semantic parsing allows us to rank products
        based on how well they align with the specific elements of a user's
        query.
      </Text>
      <Text>
        <b>Query Parsing:</b> By identifying key attributes within a query
        (e.g., color, size, occasion), we can surface products that precisely
        match those criteria.
      </Text>
      <Text>
        <b>Rank Boosting: </b>Weights assigned to different features empower you
        to boost the visibility of products that align with the most important
        aspects of a query.
      </Text>
      <Text>
        Techniques like the <b>Rank Fusion Algorithm</b>
        further refine this process, ensuring that the final product ranking
        reflects a balanced consideration of all relevant factors.
      </Text>
      <Heading as="h3" size="md" my="4">
        Fine-Tuning Search Results: The Magic of Feature Weighting
      </Heading>

      <Text color={"#073763"} fontWeight={"bold"} size="md" mb="1" mt="2">
        The Power of Precision Control
      </Text>
      <Text mb="4">
        By breaking down queries into logical features and controlling their
        importance, we can fine-tune search results with surgical precision.
        Let's see this in action with some real examples.
      </Text>
      <Text> Experiment: Adjusting Feature Weights </Text>
      <Text mb="4">
        Test 1: Color Takes the Lead When we amplified the importance of color
        in our search: Nearly all results were red items Only 4-5 out of 18
        products had floral prints Perfect for shoppers who prioritize getting
        the right shade
      </Text>
      <Image src={Image2} alt="Vibe Search Sematic Search AI" />

      <Text mb="4">
        Test 2: Patterns in Focus Shifting priority to floral patterns changed
        everything: Floral prints dominated the results Color became secondary
        Some non-red items appeared, but with beautiful floral designs
      </Text>
      <Image src={Image7} alt="Vibe Search Sematic Search AI" />

      <Text mb="4">
        Test 3: Occasion-Driven Results When we emphasized "wedding" as the key
        factor: Formal and wedding-appropriate dresses rose to the top Color and
        pattern became less crucial Results focused on elegance and event
        suitability
      </Text>
      <Text mb="4">
        Pro Tip: Balancing Act ✨ Here's the secret sauce: Always assign the
        highest weightage to full query semantic search. Think of it as your
        safety net - it understands the complete context. Use your parsed
        features to enhance and refine these results, not replace them.
      </Text>
      <Heading as="h3" size="md" mb="4">
        Tailor Semantic Search to Customer Needs: Enhance Satisfaction
      </Heading>
      <Text mb="4">
        Ultimately, the goal of any e-commerce search system is to satisfy the
        customer. Semantic parsing provides the tools to tailor the search
        experience to individual needs, leading to: Increased Engagement:
        Customers are more likely to engage with search results that accurately
        reflect their intent. Higher Conversions: When customers find what they
        are looking for quickly and easily, conversions naturally follow.
        Enhanced Satisfaction: A seamless and intuitive search experience
        fosters customer loyalty and positive brand perception.
      </Text>
      <Heading as="h3" size="md" mb="4">
        Conclusion
      </Heading>
      <Text mb="4">
        What we've explored here is more than just a technical improvement -
        it's a fundamental shift in how we approach semantic search. By
        introducing query parsing, we've essentially installed a glass window
        into what was once an opaque system.
      </Text>
      <Text mb="4">
        Key Takeaways We've uncovered how to: Break down complex search queries
        into meaningful components Take control of the search process with
        precision Balance different features to deliver exactly what users want
        Transform rigid search systems into flexible, intelligent tools
      </Text>
      <Text mb="4">
        The Real Impact The beauty of this approach lies in its adaptability.
        Whether a shopper is color-obsessed, pattern-particular, or
        occasion-focused, our system can now adjust to their priorities. This
        isn't just about better search results - it's about creating happier,
        more satisfied customers who find exactly what they're looking for.
      </Text>
      <Text mb="4">
        This is just the beginning. As we continue to refine these techniques,
        we're moving closer to search systems that truly understand not just
        what people are searching for, but why they're searching for it. It's a
        step toward more intuitive, human-centric e-commerce experiences.
      </Text>
      <Text mb="4">
        Remember: The best search isn't just about finding products - it's about
        understanding people.
      </Text>
    </Container>
  );
};

export default BlogDetailPage;
